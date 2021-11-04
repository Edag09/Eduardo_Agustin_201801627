const Ambito = require("../../model/Ambito/Ambito")
const TIPO_DATO = require("../Enum/Tipados")
const Operacion = require("../../model/Operacion/Operacion")
const TIPO_INSTRUCCION = require("../Enum/TipoInstrucciones");
const LIMIT = require("../Enum/TipoOperaciones").MAX;
const Asignacion = require("./Asignacion");
const Declaracion = require("./Declaracion");

function cicloFor(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false }
    var ambitoFor = new Ambito(_ambito, "declaracionFor");
    
    if (_instruccion.variable.tipo === TIPO_INSTRUCCION.DECLARACION) {
        var m = Declaracion(_instruccion.variable, ambitoFor)
        if (m.err) return { err: m.err };
        if (m.cadena) cadena.cadena = m.cadena;
    }
    else if (_instruccion.variable.tipo === TIPO_INSTRUCCION.ASIGNACION) {
        var m = Asignacion(_instruccion.variable, ambitoFor)
        if (m.err) return { err: m.err };
        if (m.cadena) cadena.cadena = m.cadena;
    }
    var max = 0;
    var operacion = Operacion(_instruccion.expresion, ambitoFor)
    if (operacion.err) { cadena.err = operacion.err; return cadena; }
    if (operacion.cadena) cadena.cadena += operacion.cadena;
    if (operacion.retorno) operacion = operacion.retorno;

    if (operacion.tipo === TIPO_DATO.BOOLEANO) {
        while (operacion.valor && max < LIMIT) {
            var nuevoAmbito = new Ambito(ambitoFor, "ciclo")
            const Bloque = require('./Bloque')
            var bloque = Bloque(_instruccion.instrucciones, nuevoAmbito);
            cadena.cadena += bloque.cadena;
            if (bloque.retorno) cadena.retorno = bloque.retorno;
            cadena.hasBreak = bloque.hasBreak;
            cadena.hasReturn = bloque.hasReturn;
            if (bloque.hasBreak || bloque.hasReturn) break;
            if (bloque.hasContinue) {
                var actualizacion = _instruccion.instrucciones[_instruccion.instrucciones.length - 1];
                cadena.cadena += Bloque([actualizacion], nuevoAmbito).cadena;
            }
            operacion = Operacion(_instruccion.expresion, nuevoAmbito)
            if (operacion.err) return { err: operacion.err }
            if (operacion.cadena) cadena.cadena += operacion.cadena;
            if (operacion.retorno)
                operacion = operacion.retorno;
            max++;
        }
        if (max === LIMIT) cadena.cadena += 'Maximum call stack size exceeded!\n'
        return cadena
    }
    return { err: "Error: La expresión no es de tipo booleano en la condición.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

module.exports = cicloFor