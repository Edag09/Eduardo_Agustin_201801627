const TIPO_DATO = require("../../Controller/Principales/Tipos");
const TIPO_OPERACION = require("../../Controller/Principales/TOperaciones");

function Logica(_expresion, _ambito) {
    if (_expresion.tipo === TIPO_OPERACION.OR) {
        return or(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if (_expresion.tipo === TIPO_OPERACION.AND) {
        return and(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if (_expresion.tipo === TIPO_OPERACION.NOT) {
        return not(_expresion.opIzq, null, _ambito)
    }
}

function or(_opIzq, _opDer, _ambito) {
    const Operacion = require("./Operacion")
    var cadena = "";
    var opIzq = Operacion(_opIzq, _ambito); if (opIzq.err) return opIzq;
    if (opIzq.cadena) cadena = opIzq.cadena;
    if (opIzq.retorno)
        opIzq = opIzq.retorno;
    var opDer = Operacion(_opDer, _ambito); if (opDer.err) return opDer;
    if (opDer.cadena) cadena = opDer.cadena;
    if (opDer.retorno)
        opDer = opDer.retorno;
    if (opIzq.tipo === TIPO_DATO.BOOLEANO || opDer.tipo === TIPO_DATO.BOOLEANO) {
        var resultado = false;
        var op1, op2;
        if (opIzq.tipo === TIPO_DATO.BOOLEANO)
            op1 = opIzq.valor;
        else
            op1 = false;

        if (opDer.tipo === TIPO_DATO.BOOLEANO)
            op2 = opDer.valor;
        else
            op2 = false;

        if (op1 || op2) {
            resultado = true;
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + "\nError: no se puede comparar el valor de tipo " + opIzq.tipo + "\ncon el valor de tipo " + opDer.tipo + ".\nLínea: " + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function and(_opIzq, _opDer, _ambito) {
    const Operacion = require("./Operacion")
    var cadena = "";
    var opIzq = Operacion(_opIzq, _ambito); if (opIzq.err) return opIzq;
    if (opIzq.cadena) cadena = opIzq.cadena;
    if (opIzq.retorno)
        opIzq = opIzq.retorno;
    var opDer = Operacion(_opDer, _ambito); if (opDer.err) return opDer;
    if (opDer.cadena) cadena = opDer.cadena;
    if (opDer.retorno)
        opDer = opDer.retorno;
    if (opIzq.tipo === TIPO_DATO.BOOLEANO || opDer.tipo === TIPO_DATO.BOOLEANO) {
        var resultado = false;
        var op1, op2;
        if (opIzq.tipo === TIPO_DATO.BOOLEANO)
            op1 = opIzq.valor;
        else
            op1 = false;

        if (opDer.tipo === TIPO_DATO.BOOLEANO)
            op2 = opDer.valor;
        else
            op2 = false;

        if (op1 && op2) {
            resultado = true;
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + "\nError: no se puede comparar el valor de tipo " + opIzq.tipo + "\ncon el valor de tipo " + opDer.tipo + ".\nLínea: " + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function not(_opIzq, _opDer, _ambito) {
    const Operacion = require("./Operacion")
    var cadena = "";
    var opIzq = Operacion(_opIzq, _ambito); if (opIzq.err) return opIzq;
    if (opIzq.cadena) cadena = opIzq.cadena;
    if (opIzq.retorno)
        opIzq = opIzq.retorno;
    var resultado = false;
    if (opIzq.tipo === TIPO_DATO.BOOLEANO) {
        resultado = !opIzq.valor;
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "")
    return {
        err: respuesta + "\nError: no se puede negar el valor de tipo " + opIzq.tipo + "\nporque no es booleano.\nLínea: " + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

module.exports = Logica