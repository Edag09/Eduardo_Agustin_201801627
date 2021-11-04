const TIPO_DATO = require("../../Controller/Principales/Tipos");
const TIPO_OPERACION = require("../../Controller/Principales/TOperaciones");
const TipoResultado = require("./Resultados")

function Aritmetica(_expresion, _ambito) {
    switch (_expresion.tipo) {
        case TIPO_OPERACION.SUMA:
            return suma(_expresion.opIzq, _expresion.opDer, _ambito)

        case TIPO_OPERACION.RESTA:
            return resta(_expresion.opIzq, _expresion.opDer, _ambito)

        case TIPO_OPERACION.MULTIPLICACION:
            return multiplicacion(_expresion.opIzq, _expresion.opDer, _ambito)

        case TIPO_OPERACION.DIVISION:
            return division(_expresion.opIzq, _expresion.opDer, _ambito)

        case TIPO_OPERACION.POTENCIA:
            return potencia(_expresion.opIzq, _expresion.opDer, _ambito)

        case TIPO_OPERACION.MODULO:
            return modulo(_expresion.opIzq, _expresion.opDer, _ambito)

        case TIPO_OPERACION.NEGACION:
            return negacion(_expresion.opIzq, _ambito)

        default:
            break;
    }
}

function suma(_opIzq, _opDer, _ambito) {
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
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo, TIPO_OPERACION.SUMA)
    var op1, op2, resultado;
    if (tipoRes != null) {
        switch (tipoRes) {
            case TIPO_DATO.ENTERO:
                op1 = 0;
                op2 = 0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 + op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            case TIPO_DATO.DOBLE:
                op1 = 0.0;
                op2 = 0.0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 + op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            case TIPO_DATO.CADENA:
                resultado = opIzq.valor.toString() + opDer.valor.toString();
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            default:
                break;
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + '\nError: no se puede realizar la operación suma.\nLínea: ' + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function resta(_opIzq, _opDer, _ambito) {
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
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo, TIPO_OPERACION.RESTA)
    var op1, op2, resultado;
    if (tipoRes != null) {
        switch (tipoRes) {
            case TIPO_DATO.ENTERO:
                op1 = 0;
                op2 = 0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 - op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            case TIPO_DATO.DOBLE:
                op1 = 0.0;
                op2 = 0.0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 - op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            default:
                break;
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + '\nError: no se puede realizar la operación resta.\nLínea: ' + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function multiplicacion(_opIzq, _opDer, _ambito) {
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
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo, TIPO_OPERACION.MULTIPLICACION)
    var op1, op2, resultado;
    if (tipoRes != null) {
        switch (tipoRes) {
            case TIPO_DATO.ENTERO:
                op1 = 0;
                op2 = 0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 * op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            case TIPO_DATO.DOBLE:
                op1 = 0.0;
                op2 = 0.0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 * op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            default:
                break;
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + '\nError: no se puede realizar la operación multiplicación.\nLínea: ' + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function division(_opIzq, _opDer, _ambito) {
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
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo, TIPO_OPERACION.DIVISION)
    var op1, op2, resultado;
    if (tipoRes != null) {
        switch (tipoRes) {

            case TIPO_DATO.DOBLE:
                op1 = 0.0;
                op2 = 0.0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                if (op2 == 0) {
                    return {
                        err: '\nError: no es permitida la división entre 0.\nLínea: ' + _opDer.linea + " Columna: " + _opDer.columna + "\n",
                        tipo: null,
                        linea: _opDer.linea,
                        columna: _opDer.columna
                    }
                }
                resultado = op1 / op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            default:
                break;
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + '\nError: no se puede realizar la operación división.\nLínea: ' + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function potencia(_opIzq, _opDer, _ambito) {
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
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo, TIPO_OPERACION.POTENCIA)
    var op1, op2, resultado;
    if (tipoRes != null) {
        switch (tipoRes) {
            case TIPO_DATO.ENTERO:
                op1 = 0;
                op2 = 0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 ** op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            case TIPO_DATO.DOBLE:
                op1 = 0.0;
                op2 = 0.0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                resultado = op1 ** op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            default:
                break;
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + '\nError: no se puede realizar la operación potencia.\nLínea: ' + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function modulo(_opIzq, _opDer, _ambito) {
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
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo, TIPO_OPERACION.MODULO)
    var op1, op2, resultado;
    if (tipoRes != null) {
        switch (tipoRes) {

            case TIPO_DATO.DOBLE:
                op1 = 0.0;
                op2 = 0.0;
                if (opIzq.tipo == TIPO_DATO.CARACTER)
                    op1 = opIzq.valor.charCodeAt(0);
                else
                    op1 = Number(opIzq.valor);

                if (opDer.tipo == TIPO_DATO.CARACTER)
                    op2 = opDer.valor.charCodeAt(0);
                else
                    op2 = Number(opDer.valor);
                if (op2 == 0) {
                    return {
                        err: '\nError: no es permitida la operación módulo 0.\nLínea: ' + _opDer.linea + " Columna: " + _opDer.columna + "\n",
                        tipo: null,
                        linea: _opDer.linea,
                        columna: _opDer.columna
                    }
                }
                resultado = op1 % op2;
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            default:
                break;
        }
    }
    var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
    return {
        err: respuesta + '\nError: no se puede realizar la operación módulo.\nLínea: ' + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function negacion(_opIzq, _ambito) {
    const Operacion = require("./Operacion")
    var cadena = "";
    var opIzq = Operacion(_opIzq, _ambito); if (opIzq.err) return opIzq;
    if (opIzq.cadena) cadena = opIzq.cadena;
    if (opIzq.retorno)
        opIzq = opIzq.retorno;
    const tipoRes = TipoResultado(opIzq.tipo, null, TIPO_OPERACION.NEGACION)
    var resultado;
    if (tipoRes != null) {
        switch (tipoRes) {
            case TIPO_DATO.ENTERO:
                resultado = 0 - Number(opIzq.valor)
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            case TIPO_DATO.DOBLE:
                resultado = 0.0 - Number(opIzq.valor)
                return {
                    valor: resultado,
                    tipo: tipoRes,
                    linea: _opIzq.linea,
                    columna: _opIzq.columna,
                    cadena: cadena
                }

            default:
                break;
        }
    }
    var respuesta = opIzq.tipo === null ? opIzq.valor : "";
    return {
        err: respuesta + '\nError: no se puede realizar la operación negación unaria.\nLínea: ' + _opIzq.linea + " Columna: " + _opIzq.columna + "\n",
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

module.exports = Aritmetica