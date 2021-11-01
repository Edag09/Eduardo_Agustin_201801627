const TIPOD = require("../../Controller/Principales/Tipos")
const TVALOR = require("../../Controller/Principales/TValor")

function ValorExpresion(_expresion, _ambito){

    if(_expresion.tipo === TVALOR.DOUBLE){
        return{
            valor: parseFloat(_expresion.valor),
            tipo: TIPOD.DOUBLE,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }else if(_expresion.tipo === TVALOR.ENTERO){
        return{
            valor: parseInt(_expresion.valor),
            tipo: TIPOD.ENTERO,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    
    }else if(_expresion.tipo === TVALOR.BOOLEAN){
        return{
            valor: _expresion.valor.toString() == 'true',
            tipo: TIPOD.BOOLEAN,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }else if(_expresion.tipo === TVALOR.CADENA){
        return{
            valor: String(_expresion.valor),
            tipo: TIPOD.CADENA,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }else if(_expresion.tipo === TVALOR.CARACTER){
        return{
            valor: String(_expresion.valor),
            tipo: TIPOD.CARACTER,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }else if(_expresion.tipo === TVALOR.ID){
        var simbol;
        if(_ambito.isParam)
            simbol = _ambito.ambito.getParam(_expresion.valor);
        else 
            simbol = _ambito.getSimbol(_expresion.valor);
        if(simbol != null){
            if(simbol.tipo === TIPOD.VECTOR){
                var cor = '[';
                for (let i = 0; i < simbol.valor.length; i++){
                    cor += simbol.valor[i].valor+", ";
                }
                cor = cor.substring(0, cor.length -2)+' ]'
                return{
                    valor: simbol.valor,
                    imprval: cor,
                    tipo: simbol.tipo,
                    linea: simbol.linea,
                    columna: simbol.columna
                }

            }else if(simbol.tipo === TIPOD.LISTA){
                var par = '{'
                for(let i = 0; i<simbol.valor.length; i++){
                    par += simbol.valor[i].valor+", ";
                }
                par = par.substring(0, par.length - 2)+'}'
                return {
                    valor: simbol.valor,
                    imprval: par,
                    tipo: simbol.tipo,
                    linea: simbol.linea,
                    columna: simbol.columna
                }
            }
            return{
                valor: simbol.valor,
                tipo: simbol.tipo,
                linea: simbol.linea,
                columna: simbol.columna
            }
        }
        return{
            err: "Error: Variable'"+_expresion.valor+"' no existe. \nLinea: "+_expresion.linea+" Columna: "+_expresion.columna+"\n",
            tipo: null,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }

}

module.exports =  ValorExpresion