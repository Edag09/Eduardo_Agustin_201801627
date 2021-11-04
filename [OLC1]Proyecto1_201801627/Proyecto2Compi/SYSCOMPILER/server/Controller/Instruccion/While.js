const Ambito = require("../../model/Ambito/Ambito")
const TIPO_DATO = require("../Enum/Tipados")
const LIMIT = require("../Enum/TipoOperaciones").MAX
const Operacion = require("../../model/Operacion/Operacion")

function cicloWhile(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false }
    var operacion = Operacion(_instruccion.expresion, _ambito)
    if (operacion.err) { cadena.err = operacion.err; return cadena; }
    if (operacion.cadena) cadena.cadena = operacion.cadena;
    if (operacion.retorno) operacion = operacion.retorno;
    var max = 0;
    if (operacion.tipo === TIPO_DATO.BOOLEANO) {
        while (operacion.valor && max < LIMIT) {
            var nuevoAmbito = new Ambito(_ambito, "ciclo")
            const Bloque = require('./Bloque')
            var bloque = Bloque(_instruccion.instrucciones, nuevoAmbito)
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            cadena.hasBreak = bloque.hasBreak;
            cadena.hasReturn = bloque.hasReturn;
            if (bloque.hasBreak || bloque.hasReturn) break;
            if (bloque.hasContinue) continue;
            operacion = Operacion(_instruccion.expresion, nuevoAmbito)
            if (operacion.err) return { err: operacion.err }
            if (operacion.retorno) operacion = operacion.retorno;
            if (operacion.cadena) cadena.cadena += operacion.cadena;
            max++;
        }
        if (max === LIMIT) cadena.cadena += 'Maximum call stack size exceeded!\n'
        return cadena
    }
    return { err: "Error: La expresión no es de tipo booleano en la condición o la variable no existe.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

module.exports = cicloWhile