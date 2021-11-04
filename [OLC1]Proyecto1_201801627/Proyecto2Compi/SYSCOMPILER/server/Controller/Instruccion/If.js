const Ambito = require("../../model/Ambito/Ambito")
const TIPO_DATO = require("../Enum/Tipados")
const TIPO_INSTRUCCION = require("../Enum/TipoInstrucciones")
const Operacion = require("../../model/Operacion/Operacion")

function sentenciaIf(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false }
    var operacion = Operacion(_instruccion.expresion, _ambito)
    if (operacion.err) { cadena.err = operacion.err; return cadena; }
    if (operacion.cadena) cadena.cadena = operacion.cadena;
    if (operacion.retorno) operacion = operacion.retorno;
    if (operacion.tipo === TIPO_DATO.BOOLEANO) {
        if (operacion.valor) {
            var nuevoAmbito = new Ambito(_ambito, "control")
            const Bloque = require('./Bloque')
            var bloque = Bloque(_instruccion.instrucciones, nuevoAmbito)
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            if (bloque.hasBreak) cadena.hasBreak = true;
            if (bloque.hasContinue) cadena.hasContinue = true;
            if (bloque.hasReturn) cadena.hasReturn = true;
        }
        return cadena;
    }
    else
        return { err: "Error: La expresión no es de tipo booleano en la condición.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function sentenciaIfElse(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false }
    var operacion = Operacion(_instruccion.expresion, _ambito)
    if (operacion.err) { cadena.err = operacion.err; return cadena; }
    if (operacion.cadena) cadena.cadena = operacion.cadena;
    if (operacion.retorno) operacion = operacion.retorno;
    if (operacion.tipo === TIPO_DATO.BOOLEANO) {
        if (operacion.valor) {
            var nuevoAmbito = new Ambito(_ambito, "control")
            const Bloque = require('./Bloque')
            var bloque = Bloque(_instruccion.instruccionesIF, nuevoAmbito)
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            if (bloque.hasBreak) cadena.hasBreak = true;
            if (bloque.hasContinue) cadena.hasContinue = true;
            if (bloque.hasReturn) cadena.hasReturn = true;
        }
        else {
            var nuevoAmbito = new Ambito(_ambito, "control")
            const Bloque = require('./Bloque')
            var bloque = Bloque(_instruccion.instruccionesELSE, nuevoAmbito)
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            if (bloque.hasBreak) cadena.hasBreak = true;
            if (bloque.hasContinue) cadena.hasContinue = true;
            if (bloque.hasReturn) cadena.hasReturn = true;
        }
        return cadena;
    }
    else
        return { err: "Error: La expresión no es de tipo booleano en la condición.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function sentenciaElseIf(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false }
    if (_instruccion.tipo === TIPO_INSTRUCCION.IF) return sentenciaIf(_instruccion, _ambito);
    if (_instruccion.tipo === TIPO_INSTRUCCION.IF_ELSE) return sentenciaIfElse(_instruccion, _ambito);
    var operacion = Operacion(_instruccion.expresion, _ambito)
    if (operacion.err) { cadena.err = operacion.err; return cadena; }
    if (operacion.cadena) cadena.cadena = operacion.cadena;
    if (operacion.retorno) operacion = operacion.retorno;
    if (operacion.tipo === TIPO_DATO.BOOLEANO) {
        if (operacion.valor) {
            var nuevoAmbito = new Ambito(_ambito, "control")
            const Bloque = require('./Bloque')
            var bloque = Bloque(_instruccion.instruccionesIF, nuevoAmbito)
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            if (bloque.hasBreak) cadena.hasBreak = true;
            if (bloque.hasContinue) cadena.hasContinue = true;
            if (bloque.hasReturn) cadena.hasReturn = true;
        }
        else if (_instruccion.instruccionesELSEIF) {
            var nuevoAmbito = new Ambito(_ambito, "control")
            var bloque = sentenciaElseIf(_instruccion.instruccionesELSEIF, nuevoAmbito);
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            if (bloque.hasBreak) cadena.hasBreak = true;
            if (bloque.hasContinue) cadena.hasContinue = true;
            if (bloque.hasReturn) cadena.hasReturn = true;
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.IF_ELSE) {
            var nuevoAmbito = new Ambito(_ambito, "control")
            var bloque = sentenciaIfElse(_instruccion, nuevoAmbito);
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            if (bloque.hasBreak) cadena.hasBreak = true;
            if (bloque.hasContinue) cadena.hasContinue = true;
            if (bloque.hasReturn) cadena.hasReturn = true;
        }
        return cadena
    }
    return { err: "Error: La expresión a evaluar de tipo booleano en la condición.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function operadorTernario(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false }
    var operacion = Operacion(_instruccion.condicion, _ambito)
    if (operacion.err) { cadena.err = operacion.err; return cadena; }
    if (operacion.cadena) cadena.cadena = operacion.cadena;
    if (operacion.retorno) operacion = operacion.retorno;
    if (operacion.tipo === TIPO_DATO.BOOLEANO) {
        var expresion = (operacion.valor ? _instruccion.expresionA : _instruccion.expresionB)
        var op = Operacion(expresion, _ambito);
        if (op.err) return { err: op.err }
        if (op.cadena) cadena.cadena += op.cadena;
        if (op.retorno) cadena.retorno = op.retorno;
        else cadena.retorno = op;
        return cadena;
    }
    return { err: "Error: La expresión no es de tipo booleano en la condición.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

module.exports = {
    If: sentenciaIf,
    IfElse: sentenciaIfElse,
    ElseIf: sentenciaElseIf,
    Ternario: operadorTernario
};