const TIPO_DATO = require("../../Controller/Principales/Tipos");
const TIPO_INSTRUCCION = require("../../Controller/Principales/TInstrucciones");

class Ambito {
    constructor(_anterior, _tipo) {
        this.anterior = _anterior
        this.tipo = _tipo
        this.tablaSimbolos = new Map();
        this.tablaFunciones = new Map();
    }

    addSimbolo(_s, _simbolo) {
        this.tablaSimbolos.set(_s.toLowerCase(), _simbolo)
    }

    addFuncion(_s, _funcion) {
        this.tablaFunciones.set(_s.toLowerCase(), _funcion)
    }

    getSimbolo(_s) {
        for (let e = this; e != null; e = e.anterior) {
            var encontrado = e.tablaSimbolos.get(_s.toLowerCase())
            if (encontrado != null)
                return encontrado
        }
        return null
    }

    getFuncion(_s) {
        for (let e = this; e != null; e = e.anterior) {
            var encontrado = e.tablaFunciones.get(_s.toLowerCase())
            if (encontrado != null) {
                return encontrado
            }
        }
        return null
    }

    existeSimbolo(_s) {
        var encontrado = this.tablaSimbolos.get(_s.toLowerCase())
        if (encontrado != null) {
            return true
        }
        return false
    }

    existeFuncion(_s) {
        for (let e = this; e != null; e = e.anterior) {
            var encontrado = e.tablaFunciones.get(_s.toLowerCase())
            if (encontrado != null) {
                return true
            }
        }
        return false
    }

    actualizar(_s, _simbolo) {
        for (let e = this; e != null; e = e.anterior) {
            var encontrado = e.tablaSimbolos.get(_s.toLowerCase());
            if (encontrado != null) {
                e.tablaSimbolos.set(_s, _simbolo)
                return true;
            }
        }
        return false
    }

    getGlobal() {
        for (let e = this; e != null; e = e.anterior) {
            if (e.anterior === null) {
                return e;
            }
        }
        return null
    }

    isInsideLoop() {
        for (let e = this; e != null; e = e.anterior) {
            if (e.tipo === 'ciclo')
                return true;
        }
        return false;
    }

    isInsideSwitch() {
        for (let e = this; e != null; e = e.anterior) {
            if (e.tipo === 'switch')
                return true;
        }
        return false;
    }

    isInsideExec() {
        for (let e = this; e != null; e = e.anterior) {
            if (e.tipo === 'Start With')
                return true;
        }
        return false;
    }

    getArraySimbols() {
        try {
            var simbolos = [];
            for (var [clave, valor] of this.tablaSimbolos) {
                var tipo = valor.tipo;
                if (tipo === TIPO_DATO.VECTOR) tipo = "Vector: " + valor.valor[0].tipo;
                if (tipo === TIPO_DATO.LISTA) tipo = "Dynamic List: " + valor.valor[0].tipo;
                var simb = {
                    id: valor.id,
                    objeto: 'Variable',
                    tipo: tipo,
                    entorno: 'global',
                    linea: valor.linea,
                    columna: valor.columna
                }
                if (!simbolos.some(e => e.id === simb.id)) {
                    simbolos.push(simb);
                }
            }
            for (var [clave, valor] of this.tablaFunciones) {
                if (valor.constructor.name === 'Metodo') {
                    simbolos.push({
                        id: valor.id,
                        objeto: 'Método',
                        tipo: 'VOID',
                        entorno: 'global',
                        linea: valor.linea,
                        columna: valor.columna
                    });
                }
                else if (valor.constructor.name === 'Funcion') {
                    var tipo = valor.retorno;
                    if (tipo.vector) tipo = "Vector: " + tipo.vector;
                    if (tipo.lista) tipo = "Dynamic List: " + tipo.lista;
                    simbolos.push({
                        id: valor.id,
                        objeto: 'Función',
                        tipo: tipo,
                        entorno: 'global',
                        linea: valor.linea,
                        columna: valor.columna
                    });
                }
                if (valor.lista_parametros) {
                    for (let i = 0; i < valor.lista_parametros.length; i++) {
                        const param = valor.lista_parametros[i];
                        var tipo = param.tipo_dato;
                        if (tipo.vector) tipo = "Vector: " + tipo.vector;
                        if (tipo.lista) tipo = "Dynamic List: " + tipo.lista;
                        simbolos.push({
                            id: param.id,
                            objeto: 'Parámetro',
                            tipo: tipo,
                            entorno: valor.id,
                            linea: param.linea,
                            columna: param.columna
                        });
                    }
                }
                simbolos = this.getSimbolos(valor.instrucciones, simbolos, valor.id);
            }
            return simbolos;
        } catch (error) {
            return simbolos;
        }
    }

    getSimbolos(instrucciones, simbolos, clave) {
        for (let i = 0; i < instrucciones.length; i++) {
            const instruccion = instrucciones[i];
            if (instruccion.tipo === TIPO_INSTRUCCION.BREAK || instruccion.tipo === TIPO_INSTRUCCION.RETURN) break;
            if (instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
                simbolos.push({
                    id: instruccion.id,
                    objeto: 'Variable',
                    tipo: instruccion.tipo_dato,
                    entorno: clave,
                    linea: instruccion.linea,
                    columna: instruccion.columna
                });
            }
            else {
                if (instruccion.instrucciones) {
                    simbolos = this.getSimbolos(instruccion.instrucciones, simbolos, clave + "->" + instruccion.tipo);
                }
                if (instruccion.variable) {
                    simbolos = this.getSimbolos([instruccion.variable], simbolos, clave + "->" + instruccion.tipo);
                }
                if (instruccion.instruccionesIF) {
                    simbolos = this.getSimbolos(instruccion.instruccionesIF, simbolos, clave + "->" + instruccion.tipo);
                }
                if (instruccion.instruccionesELSE) {
                    simbolos = this.getSimbolos(instruccion.instruccionesELSE, simbolos, clave + "->" + instruccion.tipo);
                }
                if (instruccion.instruccionesELSEIF) {
                    simbolos = this.getSimbolos([instruccion.instruccionesELSEIF], simbolos, clave);
                }
                if (instruccion.casosComparar) {
                    for (let i = 0; i < instruccion.casosComparar.length; i++) {
                        const caso = instruccion.casosComparar[i];
                        simbolos = this.getSimbolos(caso.instrucciones, simbolos, clave + "->" + instruccion.tipo + "->CASO");
                    }
                    if (instruccion.casoDefault != null) {
                        simbolos = this.getSimbolos(instruccion.casoDefault.instrucciones, simbolos, (clave + "->" + instruccion.tipo + "->DEFAULT").replace('->CASO', ''));
                    }
                }
            }
        }
        return simbolos;
    }

}

module.exports = Ambito