const Operacion = require("../../../Models");
const TIPOD = require("../Principales/Tipos");

function Asignacion(_instuccion, _ambito){
        var cadena = { cadena: "", retorno: null, err: null}
        
        if(_instuccion.tipo_dato === TIPOD.VECTOR){
            const id = _instuccion.id;
            const simbol = _ambito.getSimbol(id);
            if(simbol){
                if (simbol.tipo !== TIPOD.VECTOR) { 
                    return { err: `Error: la variable '${String(id)}' de tipo ${simbol.tipo} no corresponde a un vector.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` } 
                }
                var op = Operacion(_instuccion.posicion, _ambito);
                if(op.err) return { err: op.err }
                if(op.cadena) cadena.cadena = op.cadena;
                if(op.retorno) op = op.retorno;
                if(op.tipo != TIPOD.ENTERO) {
                    return { err: `Error: el valor '${String(op.valor)}' no es de tipo numérico.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
                }
                var valor = Operacion(_instuccion.valor, _ambito);
                if(valor.err) return { err: valor.err }
                if(valor.cadena) cadena.cadena += valor.cadena;
                if(valor.retorno) valor = valor.retorno;
                var tVector = simbol.valor[0].tipo;
                if(tVector === valor.tipo){
                    if(op.valor < 0 || op.valor >= simbol.valor.lenght)
                    return { err: `Error: el índice '${String(op.valor)}' se encuentra fuera del tamaño del vector '${id}'.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
                    simbol.valor[op.valor] = valor;
                    _ambito.upDate(id, simbol)
                    return cadena;
                }
                return { err: "Error: No es posible asignar un valor de tipo " + valor.tipo + " dentro del vector '" + id + "'\n ya que es de tipo  " + tipoVector + ".\nLínea: " + _instuccion.linea + " Columna: " + _instuccion.columna + "\n" }
            }
            return { err: `Error: el vector '${String(id)}' no existe.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
        
        }else if(_instuccion.tipo_dato === TIPOD.LISTA){
            const id = _instuccion.id;
            const simbol = _ambito.getSimbol(id);
            
            if(simbol){
                if(simbol.tipo !== TIPOD.LISTA){
                    return {err: `Error: la variable '${String(id)}' de tipo ${simbol.tipo} no corresponde a una lista.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n`}
                }
                if(_instuccion.posicion != null){
                    var pos = Operacion(_instuccion.posicion, _ambito);
                    if(pos.err) return {err: pos.err}
                    if(pos.cadena) cadena.cadena = pos.cadena;
                    if(pos.retorno) pos = pos.retorno;
                    if(pos.tipo != TIPOD.ENTERO){
                        return { err: `Error: el valor '${String(pos.valor)}' no es de tipo numérico.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
                    }
                    var valor = Operacion(_instuccion.valor, _ambito);
                    if(valor.err) return { err: valor.err }
                    if(valor.cadena) cadena.cadena += valor.cadena
                    if(valor.retorno) valor = valor.retorno
                    var tLista = simbol.valor[0].tipo;
                    if(tLista === valor.tipo){
                        if(simbol.valor[0].valor === 'EMPTY'){
                            return { err: `Error: la lista '${String(id)}' se encuentra vacía.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }    
                        }else if(pos.valor < 0 || pos.valor >= simbol.valor.lenght){
                            return { err: `Error: la posición '${String(pos.valor)}' se encuentra fuera del rango de la lista.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }    
                        }
                        simbol.valor[pos.valor] = valor;
                        _ambito.upDate(id, simbol)
                        return cadena;
                    }
                    return { err: "Error: No es posible asignar un valor de tipo " + valor.tipo + " dentro de la lista '" + id + "'\nque es de tipo " + tLista + ".\nLínea: " + _instuccion.linea + " Columna: " + _instuccion.columna + "\n" }
                }else{
                    var valor = Operacion(_instuccion.valor, _ambito);
                    if(valor.err) return { err: valor.err }
                    if(valor.cadena) cadena.cadena = valor.cadena
                    if(valor.retorno) valor = valor.retorno;
                    var Lista = simbol.valor[0].tipo;
                    if(Lista === valor.tipo){
                        if(simbol.valor[0].valor === 'EMPTY'){
                            simbol.valor[0] = valor;
                        }else{
                            simbol.valor.push(valor);
                        }
                        _ambito.upDate(id, simbol)
                        return cadena
                    }
                    return { err: "Error: No es posible agregar un valor de tipo " + valor.tipo + " a la lista '" + id + "'\nque es de tipo " + Lista + ".\nLínea: " + _instuccion.linea + " Columna: " + _instuccion.columna + "\n" }
                }
            }
            return { err: `Error: la lista '${String(id)}' no existe.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` } 
        }else{
            const id = _instuccion.id;
            const simbol = _ambito.getSimbol(id);
            if(simbol){
                var valor = Operacion(_instuccion.expresion, _ambito);
                if(valor.err) return {err: valor.err}
                if(valor.cadena) cadena.cadena = valor.cadena
                if(valor.retorno) valor = valor.retorno

                if(simbol.tipo === TIPOD.VECTOR){
                    if(valor.tipo != TIPOD.VECTOR)
                        return { err: `Error: No es posible asignar un valor de tipo ${valor.tipo} al vector '${id}'.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
                    var tVector = simbol.valor[0].tipo;
                    if(tVector === valor.valor[0].tipo){
                        simbol.valor == valor.valor;
                        _ambito.upDate(id, simbol)
                        return cadena
                    }else{
                        return { err: `Error: No es posible asignar una vector de tipo ${valor.valor[0].tipo} al vector  '${id}' que es de tipo ${tVector}.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
                    }
                }
                if(simbol.tipo === TIPOD.LISTA){
                    if(valor.tipo != TIPOD.LISTA)
                        return { err: `Error: No es posible asignar un valor de tipo ${valor.tipo} a la lista '${id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
                    var tLista = simbol.valor[0].tipo;
                    if(tLista === valor.valor[0].tipo){
                        simbol.valor = valor.valor;
                        _ambito.upDate(id, simbol)
                        return cadena;
                    
                    }else
                    return { err: `Error: No es posible asignar una lista de tipo ${valor.valor[0].tipo} a la lista '${id}' que es de tipo ${tLista}.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
                }

                var tips = {
                    typeSimbol: simbol.tipo,
                    typeValue: valor.tipo
                }
                // casteo implicita E-D, D-E
                if((tips.typeSimbol === TIPOD.ENTERO || tips.typeSimbol === TIPOD.DOUBLE) && (tips.typeValue === TIPOD.ENTERO || tips.typeValue === TIPOD.DOUBLE)){
                    simbol.valor = Number(valor.valor);
                    if(valor.cadena) cadena.cadena = valor.cadena;
                    _ambito.upDate(id, simbol)
                    return cadena
                }
                if(tips.typeSimbol === tips.typeValue){
                    simbol.valor = valor.valor;
                    _ambito.upDate(id, simbol)
                    return cadena
                }
                return { err: "Error: No es posible asignar un valor de tipo " + tips.typeValue + " a la variable '" + id + "' que es de tipo " + tips.typeSimbol + ".\nLínea: " + _instuccion.linea + " Columna: " + _instuccion.columna + "\n" }
            }
            return { err: `Error: la variable '${String(id)}' no existe.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
        }
}

module.exports = Asignacion