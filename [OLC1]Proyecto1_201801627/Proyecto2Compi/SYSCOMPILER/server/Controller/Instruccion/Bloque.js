const TIPO_INSTRUCCION = require("../Principales/TInstrucciones");
const Asignacion = require("./Asignacion");
const Wirteline = require("./Write");
const Declaracion = require("./Declaracion");
const CicloWhile = require("./Ciclicas/While")
const CicloFor = require("./Ciclicas/For")
const CicloDoWhile = require("./Ciclicas/DoWhile")
const { If, IfElse, ElseIf } = require("./SentenciasDeControl/If")
const Switch = require("./SentenciasDeControl/Switch")

function Bloque(_instrucciones, _ambito) {
    var cadena = { cadena: "", retorno: null, hasBreak: false, hasContinue: false, hasReturn: false, errores: [] };
    var brk = false;
    if (_instrucciones == null) return cadena;
    _instrucciones.forEach(instruccion => {
        if (!brk) {
            if (instruccion.tipo === TIPO_INSTRUCCION.PRINT) {
                var mensaje = Wirteline(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }if (mensaje.retorno)
                        cadena.cadena += mensaje.retorno.valor + '\n'
                    if (mensaje.print_val)
                        cadena.cadena += mensaje.print_val + '\n'
                    else if (mensaje.valor != null)
                        cadena.cadena += mensaje.valor + '\n'
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
                var mensaje = Declaracion(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
                var mensaje = Asignacion(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.WHILE) {
                var mensaje = CicloWhile(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                    if (mensaje.retorno)
                        cadena.retorno = mensaje.retorno
                    cadena.hasBreak = mensaje.hasBreak;
                    cadena.hasContinue = mensaje.hasContinue;
                    cadena.hasReturn = mensaje.hasReturn;
                    if (cadena.hasBreak || cadena.hasContinue || cadena.hasReturn)
                        brk = true;
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.FOR) {
                var mensaje = CicloFor(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                    if (mensaje.retorno)
                        cadena.retorno = mensaje.retorno
                    cadena.hasBreak = mensaje.hasBreak;
                    cadena.hasContinue = mensaje.hasContinue;
                    cadena.hasReturn = mensaje.hasReturn;
                    if (cadena.hasBreak || cadena.hasContinue || cadena.hasReturn)
                        brk = true;
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.DOWHILE) {
                var mensaje = CicloDoWhile(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                    if (mensaje.retorno)
                        cadena.retorno = mensaje.retorno
                    cadena.hasBreak = mensaje.hasBreak;
                    cadena.hasContinue = mensaje.hasContinue;
                    cadena.hasReturn = mensaje.hasReturn;
                    if (cadena.hasBreak || cadena.hasContinue || cadena.hasReturn)
                        brk = true;
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.IF) {
                var mensaje = If(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                    if (mensaje.retorno)
                        cadena.retorno = mensaje.retorno
                    cadena.hasBreak = mensaje.hasBreak;
                    cadena.hasContinue = mensaje.hasContinue;
                    cadena.hasReturn = mensaje.hasReturn;
                    if (cadena.hasBreak || cadena.hasContinue || cadena.hasReturn)
                        brk = true;
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.IF_ELSE) {
                var mensaje = IfElse(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                    if (mensaje.retorno)
                        cadena.retorno = mensaje.retorno
                    cadena.hasBreak = mensaje.hasBreak;
                    cadena.hasContinue = mensaje.hasContinue;
                    cadena.hasReturn = mensaje.hasReturn;
                    if (cadena.hasBreak || cadena.hasContinue || cadena.hasReturn)
                        brk = true;
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.ELSE_IF) {
                var mensaje = ElseIf(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                    if (mensaje.retorno)
                        cadena.retorno = mensaje.retorno
                    cadena.hasBreak = mensaje.hasBreak;
                    cadena.hasContinue = mensaje.hasContinue;
                    cadena.hasReturn = mensaje.hasReturn;
                    if (cadena.hasBreak || cadena.hasContinue || cadena.hasReturn)
                        brk = true;
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.SWITCH) {
                var mensaje = Switch(instruccion, _ambito)
                if (mensaje) {
                    if (mensaje.cadena)
                        cadena.cadena += mensaje.cadena
                    if (mensaje.err) {
                        var error = String(mensaje.err);
                        cadena.cadena += error;
                        cadena.errores.push({
                            tipo: 'Semántico',
                            error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                            linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                            columna: error.substring(error.indexOf("Columna") + 9),
                        });
                    }
                    if (mensaje.retorno)
                        cadena.retorno = mensaje.retorno
                    cadena.hasBreak = mensaje.hasBreak;
                    cadena.hasContinue = mensaje.hasContinue;
                    cadena.hasReturn = mensaje.hasReturn;
                    if (cadena.hasBreak || cadena.hasContinue || cadena.hasReturn)
                        brk = true;
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.LLAMADA) {
                const StartWith = require("./Arranque/StartWith")
                var mensaje = StartWith(instruccion, _ambito)
                if (mensaje.cadena)
                    cadena.cadena += mensaje.cadena
                if (mensaje.err) {
                    var error = String(mensaje.err);
                    cadena.cadena += error;
                    cadena.errores.push({
                        tipo: 'Semántico',
                        error: error.substring(error.indexOf("Error") + 7, error.indexOf("Línea") - 1),
                        linea: error.substring(error.indexOf("Línea") + 7, error.indexOf("Columna") - 1),
                        columna: error.substring(error.indexOf("Columna") + 9),
                    });
                }
            }else if (instruccion.tipo === TIPO_INSTRUCCION.BREAK) {
                if (!_ambito.isInsideLoop() && !_ambito.isInsideSwitch()) {
                    cadena.cadena = `Error: se ha encontrado una sentencia BREAK fuera de un ciclo o switch.\nLínea: ${instruccion.linea} Columna: ${instruccion.columna}\n`;
                    cadena.errores.push({
                        tipo: 'Semántico',
                        error: "Se ha encontrado una sentencia BREAK fuera de un ciclo o switch.",
                        linea: instruccion.linea,
                        columna: instruccion.columna
                    });
                    cadena.retorno = null;
                    brk = true;
                }
                else
                    brk = cadena.hasBreak = true;
            }else if (instruccion.tipo === TIPO_INSTRUCCION.CONTINUE) {
                if (!_ambito.isInsideLoop()) {
                    cadena.cadena = `Error: se ha encontrado una sentencia CONTINUE fuera de un ciclo.\nLínea: ${instruccion.linea} Columna: ${instruccion.columna}\n`;
                    cadena.errores.push({
                        tipo: 'Semántico',
                        error: "Se ha encontrado una sentencia CONTINUE fuera de un ciclo.",
                        linea: instruccion.linea,
                        columna: instruccion.columna
                    });
                    cadena.retorno = null;
                    brk = true;
                }else if (_instrucciones[_instrucciones.length - 1] !== instruccion) {
                    cadena.cadena = `Error: unreachable statement.\nLínea: ${_instrucciones[_instrucciones.indexOf(instruccion) + 1].linea} Columna: ${_instrucciones[_instrucciones.indexOf(instruccion) + 1].columna}\n`;
                    cadena.errores.push({
                        tipo: 'Semántico',
                        error: "Error: unreachable statement.",
                        linea: _instrucciones[_instrucciones.indexOf(instruccion) + 1].linea,
                        columna: _instrucciones[_instrucciones.indexOf(instruccion) + 1].columna
                    });
                    cadena.retorno = null;
                    brk = true;
                }else
                    brk = cadena.hasContinue = true;
            }else if (instruccion.tipo === TIPO_INSTRUCCION.RETURN) {
                const Operacion = require("../../Model/Operacion/Operacion");
                brk = cadena.hasReturn = true;
                if (instruccion.expresion) {
                    var expresion = Operacion(instruccion.expresion, _ambito);
                    if (expresion.err) cadena.cadena += expresion.err;
                    if (expresion.cadena) cadena.cadena += expresion.cadena;
                    cadena.retorno = expresion.retorno ? expresion.retorno : expresion;
                }else
                    cadena.retorno = "RETORNO VACIO";
            }else {
                return { err: `Error. Instrucción no procesada.\nLínea: ${instruccion.linea} Columna: ${instruccion.columna}\n` };
            }
        }
    });
    return cadena
}

module.exports = Bloque