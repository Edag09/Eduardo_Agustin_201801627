const TIPO_DATO = require("../../Controller/Principales/Tipos");
const TIPO_OPERACION = require("../../Controller/Principales/TOperaciones")

function Relacional(_expresion, _ambito) {
    switch (_expresion.tipo) {
        case TIPO_OPERACION.IGUALIGUAL:
            return igualigual(_expresion.opIzq, _expresion.opDer, _ambito);

        case TIPO_OPERACION.DIFERENTE:
            return diferente(_expresion.opIzq, _expresion.opDer, _ambito);

        case TIPO_OPERACION.MENOR:
            return menor(_expresion.opIzq, _expresion.opDer, _ambito);

        case TIPO_OPERACION.MENORIGUAL:
            return menorigual(_expresion.opIzq, _expresion.opDer, _ambito);

        case TIPO_OPERACION.MAYOR:
            return mayor(_expresion.opIzq, _expresion.opDer, _ambito);

        case TIPO_OPERACION.MAYORIGUAL:
            return mayorigual(_expresion.opIzq, _expresion.opDer, _ambito);

        default:
            break;
    }
}

function igualigual(_opIzq, _opDer, _ambito) {
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
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor == opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito entero-doble/caracter
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.CARACTER)) {
        var resultado = false
        if (opIzq.valor == opDer.valor.charCodeAt(0)) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito caracter/entero-doble
    if ((opIzq.tipo === TIPO_DATO.CARACTER) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor.charCodeAt(0) == opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    if (opIzq.tipo == opDer.tipo) {
        var resultado = false
        if (opIzq.valor == opDer.valor) {
            resultado = true
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

function diferente(_opIzq, _opDer, _ambito) {
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
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor != opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito entero-doble/caracter
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.CARACTER)) {
        var resultado = false
        if (opIzq.valor != opDer.valor.charCodeAt(0)) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito caracter/entero-doble
    if ((opIzq.tipo === TIPO_DATO.CARACTER) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor.charCodeAt(0) != opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    if (opIzq.tipo == opDer.tipo) {
        var resultado = false
        if (opIzq.valor != opDer.valor) {
            resultado = true
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

function menor(_opIzq, _opDer, _ambito) {
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
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor < opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito entero-doble/caracter
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.CARACTER)) {
        var resultado = false
        if (opIzq.valor < opDer.valor.charCodeAt(0)) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito caracter/entero-doble
    if ((opIzq.tipo === TIPO_DATO.CARACTER) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor.charCodeAt(0) < opDer.valor) {
            resultado = true
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

function menorigual(_opIzq, _opDer, _ambito) {
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
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor <= opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito entero-doble/caracter
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.CARACTER)) {
        var resultado = false
        if (opIzq.valor <= opDer.valor.charCodeAt(0)) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito caracter/entero-doble
    if ((opIzq.tipo === TIPO_DATO.CARACTER) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor.charCodeAt(0) <= opDer.valor) {
            resultado = true
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

function mayor(_opIzq, _opDer, _ambito) {
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
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor > opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito entero-doble/caracter
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.CARACTER)) {
        var resultado = false
        if (opIzq.valor > opDer.valor.charCodeAt(0)) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito caracter/entero-doble
    if ((opIzq.tipo === TIPO_DATO.CARACTER) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor.charCodeAt(0) > opDer.valor) {
            resultado = true
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

function mayorigual(_opIzq, _opDer, _ambito) {
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
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor >= opDer.valor) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito entero-doble/caracter
    if ((opIzq.tipo === TIPO_DATO.ENTERO || opIzq.tipo === TIPO_DATO.DOBLE) && (opDer.tipo === TIPO_DATO.CARACTER)) {
        var resultado = false
        if (opIzq.valor >= opDer.valor.charCodeAt(0)) {
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BOOLEANO,
            linea: _opIzq.linea,
            columna: _opIzq.columna,
            cadena: cadena
        }
    }
    // Casteo implícito caracter/entero-doble
    if ((opIzq.tipo === TIPO_DATO.CARACTER) && (opDer.tipo === TIPO_DATO.ENTERO || opDer.tipo === TIPO_DATO.DOBLE)) {
        var resultado = false
        if (opIzq.valor.charCodeAt(0) >= opDer.valor) {
            resultado = true
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

module.exports = Relacional