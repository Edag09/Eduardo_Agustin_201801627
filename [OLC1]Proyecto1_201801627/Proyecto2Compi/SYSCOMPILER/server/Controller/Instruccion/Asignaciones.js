const Operacion = require("../../Model/Operacion/Operacion");
const TIPO_DATO = require("../Principales/Tipos");

function Asignacion(_instruccion, _ambito) {

    var cadena = { cadena: "", retorno: null, err: null }

    if (_instruccion.tipo_dato === TIPO_DATO.VECTOR) {
        const id = _instruccion.id;
        const simbolo = _ambito.getSimbolo(id);
        if (simbolo) {
            if (simbolo.tipo !== TIPO_DATO.VECTOR) { return { err: `Error: la variable '${String(id)}' de tipo ${simbolo.tipo} no corresponde a un vector.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` } }
            var pos = Operacion(_instruccion.posicion, _ambito);
            if (pos.err) return { err: pos.err }
            if (pos.cadena) cadena.cadena = pos.cadena;
            if (pos.retorno) pos = pos.retorno;
            if (pos.tipo != TIPO_DATO.ENTERO) { return { err: `Error: el índice '${String(pos.valor)}' no es de tipo numérico.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` } }
            var valor = Operacion(_instruccion.valor, _ambito);
            if (valor.err) return { err: valor.err }
            if (valor.cadena) cadena.cadena += valor.cadena;
            if (valor.retorno) valor = valor.retorno;
            var tipoVector = simbolo.valor[0].tipo;
            if (tipoVector === valor.tipo) {
                if (pos.valor < 0 || pos.valor >= simbolo.valor.length)
                    return { err: `Error: el índice '${String(pos.valor)}' se encuentra fuera del tamaño del vector '${id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
                simbolo.valor[pos.valor] = valor;
                _ambito.actualizar(id, simbolo)
                return cadena;
            }
            return { err: "Error: No es posible asignar un valor de tipo " + valor.tipo + " dentro del vector '" + id + "'\nque es de tipo " + tipoVector + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        }
        return { err: `Error: el vector '${String(id)}' no existe.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
    }
    else if (_instruccion.tipo_dato === TIPO_DATO.LISTA) {
        const id = _instruccion.id;
        const simbolo = _ambito.getSimbolo(id);
        if (simbolo) {
            if (simbolo.tipo !== TIPO_DATO.LISTA) { return { err: `Error: la variable '${String(id)}' de tipo ${simbolo.tipo} no corresponde a una lista.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` } }
            if (_instruccion.posicion != null) { // Modificación de una posición de la lista
                var pos = Operacion(_instruccion.posicion, _ambito);
                if (pos.err) return { err: pos.err }
                if (pos.cadena) cadena.cadena = pos.cadena;
                if (pos.retorno) pos = pos.retorno;
                if (pos.tipo != TIPO_DATO.ENTERO) {
                    return { err: `Error: el índice '${String(pos.valor)}' no es de tipo numérico.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
                }
                var valor = Operacion(_instruccion.valor, _ambito);
                if (valor.err) return { err: valor.err }
                if (valor.cadena) cadena.cadena += valor.cadena;
                if (valor.retorno) valor = valor.retorno;
                var tipoLista = simbolo.valor[0].tipo;
                if (tipoLista === valor.tipo) {
                    if (simbolo.valor[0].valor === 'EMPTY') {
                        return { err: `Error: la lista '${String(id)}' se encuentra vacía.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
                    }
                    else if (pos.valor < 0 || pos.valor >= simbolo.valor.length) {
                        return { err: `Error: la posición '${String(pos.valor)}' se encuentra fuera del tamaño de la lista.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
                    }
                    simbolo.valor[pos.valor] = valor;
                    _ambito.actualizar(id, simbolo)
                    return cadena;
                }
                return { err: "Error: No es posible asignar un valor de tipo " + valor.tipo + " dentro de la lista '" + id + "'\nque es de tipo " + tipoLista + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
            }
            else { // Agregación de item a la lista
                var valor = Operacion(_instruccion.valor, _ambito);
                if (valor.err) return { err: valor.err }
                if (valor.cadena) cadena.cadena = valor.cadena;
                if (valor.retorno) valor = valor.retorno;
                var tipoLista = simbolo.valor[0].tipo;
                if (tipoLista === valor.tipo) { // ...
                    if (simbolo.valor[0].valor === 'EMPTY') {
                        simbolo.valor[0] = valor;
                    }
                    else {
                        simbolo.valor.push(valor);
                    }
                    _ambito.actualizar(id, simbolo)
                    return cadena
                }
                return { err: "Error: No es posible agregar un valor de tipo " + valor.tipo + " a la lista '" + id + "'\nque es de tipo " + tipoLista + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
            }
        }
        return { err: `Error: la lista '${String(id)}' no existe.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
    }

    else {
        const id = _instruccion.id;
        const simbolo = _ambito.getSimbolo(id)
        if (simbolo) {
            var valor = Operacion(_instruccion.expresion, _ambito)
            if (valor.err) return { err: valor.err }
            if (valor.cadena) cadena.cadena = valor.cadena;
            if (valor.retorno) valor = valor.retorno;

            if (simbolo.tipo === TIPO_DATO.VECTOR) {
                if (valor.tipo != TIPO_DATO.VECTOR)
                    return { err: `Error: No es posible asignar un valor de tipo ${valor.tipo} al vector '${id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
                var tipoVector = simbolo.valor[0].tipo;
                if (tipoVector === valor.valor[0].tipo) {
                    simbolo.valor = valor.valor;
                    _ambito.actualizar(id, simbolo)
                    return cadena;
                }
                else
                    return { err: `Error: No es posible asignar un vector de tipo ${valor.valor[0].tipo} al vector '${id}' que es de tipo ${tipoVector}.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
            }

            if (simbolo.tipo === TIPO_DATO.LISTA) {
                if (valor.tipo != TIPO_DATO.LISTA)
                    return { err: `Error: No es posible asignar un valor de tipo ${valor.tipo} a la lista '${id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
                var tipoLista = simbolo.valor[0].tipo;
                if (tipoLista === valor.valor[0].tipo) {
                    simbolo.valor = valor.valor;
                    _ambito.actualizar(id, simbolo)
                    return cadena;
                }
                else
                    return { err: `Error: No es posible asignar una lista de tipo ${valor.valor[0].tipo} a la lista '${id}' que es de tipo ${tipoLista}.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
            }

            var tipos = {
                tipoSimbolo: simbolo.tipo,
                tipoNuevoValor: valor.tipo
            }
            // Casteo implícito entero-doble, doble-entero
            if ((tipos.tipoSimbolo === TIPO_DATO.ENTERO || tipos.tipoSimbolo === TIPO_DATO.DOBLE) && (tipos.tipoNuevoValor === TIPO_DATO.ENTERO || tipos.tipoNuevoValor === TIPO_DATO.DOBLE)) {
                simbolo.valor = Number(valor.valor);
                if (valor.cadena) cadena.cadena = valor.cadena;
                _ambito.actualizar(id, simbolo)
                return cadena;
            }
            if (tipos.tipoSimbolo === tipos.tipoNuevoValor) {
                simbolo.valor = valor.valor;
                _ambito.actualizar(id, simbolo)
                return cadena;
            }
            return { err: "Error: No es posible asignar un valor de tipo " + tipos.tipoNuevoValor + " a la variable '" + id + "' que es de tipo " + tipos.tipoSimbolo + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        }
        return { err: `Error: la variable '${String(id)}' no existe.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
    }

}

module.exports = Asignacion