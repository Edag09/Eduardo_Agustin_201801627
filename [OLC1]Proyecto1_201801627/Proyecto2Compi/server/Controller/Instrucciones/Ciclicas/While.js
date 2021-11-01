const Ambito = require("../../../Models/Ambito/Ambito")
const TIPOD = require("../../Principales/Tipos")
const tamanio = require("../../Principales/TOperaciones").MAX
const Operacion = require("../../../Models")

function While(_instuccion, _ambito){
    var cadena = { cadena = "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false}
    var op = Operacion(_instuccion.expresion, _ambito)
    if(op.err){
        cadena.err = op.err;
        return cadena;
    }
    if(op.cadena){
        cadena.cadena = op.cadena;
    }
    if(op.retorno){
        op = op.retorno;
    }
    var lim = 0;
    if(op.tipo == TIPOD.BOOLEAN){
        while(op.valor && lim<tamanio){
            var newAmbito = new Ambito(_ambito, 'ciclo')
            const block = require("../../Block")
            var bloque = block(_instuccion.instucciones, newAmbito);
            cadena.cadena += bloque.cadena;
            if(bloque.retorno){
                cadena.retorno = bloque.retorno;
            }
            cadena.hasBreak = bloque.hasBreak;
            cadena.hasReturn = bloque.hasReturn;
            if(bloque.hasBreak || bloque.hasReturn){
                break;
            }
            if(bloque.hasContinue){
                continue;
            }
            op = Operacion(_instuccion.expresion, newAmbito)
            if(op.err) return { err: op.err }
            if (op.retorno){
                op = op.retorno;
            }
            if(op.cadena) {
                cadena.cadena += op.cadena;
            }
            lim++;
        }
        if (lim === tamanio){
            cadena.cadena += 'Se ha alcanzado el maximo!';
            return cadena
        }
    }
    return { err: "Error: La expresión no es de tipo booleano en la condición.\nLínea: " + _instuccion.linea + " Columna: " + _instuccion.columna + "\n" }
}

module.exports = While