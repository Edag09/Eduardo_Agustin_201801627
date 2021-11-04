const Ambito = require("../../../Model/Ambito/Ambito")
const Operacion = require("../../../Model/Operacion/Operacion")

function sentenciaSwitch(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null, hasBreak: false, hasContinue: false, hasReturn: false }
    var evaluar = Operacion(_instruccion.expresionEvaluar, _ambito);
    if (evaluar.err) { cadena.err = evaluar.err; return cadena; }
    if (evaluar.cadena) cadena.cadena = evaluar.cadena;
    if (evaluar.retorno) evaluar = evaluar.retorno;
    if (_instruccion.casosComparar != null) {
        for (let i = 0; i < _instruccion.casosComparar.length; i++) {
            const caso = _instruccion.casosComparar[i];
            var comparar = Operacion(caso.expresion, _ambito);
            if (comparar.err) return { err: comparar.err }
            if (comparar.cadena) cadena.cadena += comparar.cadena;
            var comparacion;
            if (comparar.retorno) comparacion = comparar.retorno;
            else comparacion = comparar;
            if (evaluar.valor == comparacion.valor) {
                var nuevoAmbito = new Ambito(_ambito, "switch")
                const Bloque = require('../Block')
                var bloque = Bloque(caso.instrucciones, nuevoAmbito);
                cadena.cadena += bloque.cadena;
                if (bloque.retorno) cadena.retorno = bloque.retorno;
                if (bloque.hasBreak || bloque.hasReturn) return cadena;
            }
        }
    }
    if (_instruccion.casoDefault != null) {
        var nuevoAmbito = new Ambito(_ambito, "switch")
        const Bloque = require('../Block')
        var bloque = Bloque(_instruccion.casoDefault.instrucciones, nuevoAmbito);
        cadena.cadena += bloque.cadena;
        if (bloque.retorno) cadena.retorno = bloque.retorno;
        if (bloque.hasBreak || bloque.hasReturn) return cadena;
    }

    return cadena;
}

module.exports = sentenciaSwitch