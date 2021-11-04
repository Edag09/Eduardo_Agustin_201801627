const Simbolo = require("../../Model/Ambito/Simbolo");
const TIPO_DATO = require("../Principales/Tipos");
const Operacion = require("../../Model/Operacion/Operacion");

function defaultValue(tipo_dato) {
    switch (tipo_dato) {
        case TIPO_DATO.BOOLEANO:
            return true;
        case TIPO_DATO.CADENA:
            return "";
        case TIPO_DATO.CARACTER:
            return '\u0000';
        case TIPO_DATO.DOBLE:
            return 0.0;
        case TIPO_DATO.ENTERO:
            return 0;
        default:
            return null;
    }
}

function Declaracion(_instruccion, _ambito) {

    var cadena = { cadena: "", retorno: null, err: null }

    if (_instruccion.tipo_dato === TIPO_DATO.ENTERO) {
        var valor = defaultValue(TIPO_DATO.ENTERO);
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            if (op.err) { cadena.err = op.err; return cadena }
            if (op.cadena) cadena.cadena = op.cadena;
            if (op.retorno) op = op.retorno;
            tipo = op.tipo;
            if (tipo === TIPO_DATO.ENTERO || tipo === TIPO_DATO.DOBLE)
                valor = parseInt(op.valor);
            else
                return { err: "Error: No es posible declarar un valor de tipo " + tipo + " a la variable \n'" + _instruccion.id + "' que es de tipo " + TIPO_DATO.ENTERO + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
        if (_ambito.existeSimbolo(nuevoSimbolo.id) != false) {
            return { err: "Error: La variable '" + nuevoSimbolo.id + "' ya existe.\nLínea: " + nuevoSimbolo.linea + " Columna: " + nuevoSimbolo.columna + "\n" }
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return cadena;
    }

    else if (_instruccion.tipo_dato === TIPO_DATO.DOBLE) {
        var valor = defaultValue(TIPO_DATO.DOBLE);
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            if (op.err) { cadena.err = op.err; return cadena; }
            if (op.cadena) cadena.cadena = op.cadena;
            if (op.retorno) op = op.retorno;
            tipo = op.tipo;
            if (tipo === TIPO_DATO.DOBLE || tipo === TIPO_DATO.ENTERO)
                valor = parseFloat(op.valor);
            else
                return { err: "Error: No es posible declarar un valor de tipo " + tipo + " a la variable \n'" + _instruccion.id + "' que es de tipo " + TIPO_DATO.DOBLE + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DOBLE, _instruccion.linea, _instruccion.columna)
        if (_ambito.existeSimbolo(nuevoSimbolo.id) != false) {
            return { err: "Error: La variable '" + nuevoSimbolo.id + "' ya existe.\nLínea: " + nuevoSimbolo.linea + " Columna: " + nuevoSimbolo.columna + "\n" }
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return cadena;
    }

    else if (_instruccion.tipo_dato === TIPO_DATO.BOOLEANO) {
        var valor = defaultValue(TIPO_DATO.BOOLEANO);
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            if (op.err) { cadena.err = op.err; return cadena; }
            if (op.cadena) cadena.cadena = op.cadena;
            if (op.retorno) op = op.retorno;
            tipo = op.tipo;
            if (tipo === TIPO_DATO.BOOLEANO)
                valor = (op.valor.toString() == 'true');
            else {
                return { err: "Error: No es posible declarar un valor de tipo " + tipo + " a la variable \n'" + _instruccion.id + "' que es de tipo " + TIPO_DATO.BOOLEANO + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.BOOLEANO, _instruccion.linea, _instruccion.columna)
        if (_ambito.existeSimbolo(nuevoSimbolo.id) != false) {
            return { err: "Error: La variable '" + nuevoSimbolo.id + "' ya existe.\nLínea: " + nuevoSimbolo.linea + " Columna: " + nuevoSimbolo.columna + "\n" }
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return cadena;
    }

    else if (_instruccion.tipo_dato === TIPO_DATO.CARACTER) {
        var valor = defaultValue(TIPO_DATO.CARACTER);
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            if (op.err) { cadena.err = op.err; return cadena; }
            if (op.cadena) cadena.cadena = op.cadena;
            if (op.retorno) op = op.retorno;
            tipo = op.tipo;
            if (tipo === TIPO_DATO.CARACTER)
                valor = String(op.valor);
            else {
                return { err: "Error: No es posible declarar un valor de tipo " + tipo + " a la variable \n'" + _instruccion.id + "' que es de tipo " + TIPO_DATO.CARACTER + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
        if (_ambito.existeSimbolo(nuevoSimbolo.id) != false) {
            return { err: "Error: La variable '" + nuevoSimbolo.id + "' ya existe.\nLínea: " + nuevoSimbolo.linea + " Columna: " + nuevoSimbolo.columna + "\n" }
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return cadena;
    }

    else if (_instruccion.tipo_dato === TIPO_DATO.CADENA) {
        var valor = defaultValue(TIPO_DATO.CADENA);
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            if (op.err) { cadena.err = op.err; return cadena; }
            if (op.cadena) cadena.cadena = op.cadena;
            if (op.retorno) op = op.retorno;
            tipo = op.tipo;
            if (tipo === TIPO_DATO.CADENA)
                valor = String(op.valor);
            else {
                return { err: "Error: No es posible declarar un valor de tipo " + tipo + " a la variable \n'" + _instruccion.id + "' que es de tipo " + TIPO_DATO.CADENA + ".\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
        if (_ambito.existeSimbolo(nuevoSimbolo.id) != false) {
            return { err: "Error: La variable '" + nuevoSimbolo.id + "' ya existe.\nLínea: " + nuevoSimbolo.linea + " Columna: " + nuevoSimbolo.columna + "\n" }
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return cadena;
    }

    else if (_instruccion.tipo_dato === TIPO_DATO.VECTOR || _instruccion.tipo_dato.vector) {
        var valores = [];
        if (_instruccion.isParam) {
            _instruccion.valor = Operacion(_instruccion.valor, _ambito)
            if (_instruccion.valor.err) { cadena.err = _instruccion.valor.err; return cadena }
            if (_instruccion.valor.retorno) _instruccion.valor = _instruccion.valor.retorno;
            if (_instruccion.valor.tipo === TIPO_DATO.VECTOR) {
                if (_instruccion.valor.valor[0].tipo === _instruccion.tipo_dato.vector) {
                    valores = _instruccion.valor.valor;
                }
                else
                    return { err: `Error: No es posible declarar un vector de tipo ${_instruccion.valor.valor[0].tipo} al vector '${_instruccion.id}' que es de tipo ${_instruccion.tipo_dato.vector}.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
            }
            else
                return { err: `Error: No es posible declarar un valor de tipo ${_instruccion.valor.tipo} al vector '${_instruccion.id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
        }
        else if (_instruccion.valores != null) {
            for (let i = 0; i < _instruccion.valores.length; i++) {
                var exp = Operacion(_instruccion.valores[i], _ambito);
                if (exp.err) { cadena.err = exp.err; return cadena; }
                if (exp.cadena) cadena.cadena = exp.cadena;
                if (exp.retorno) exp = exp.retorno;
                if (exp.tipo === _instruccion.tipo_dato1)
                    valores.push(exp);
                else
                    return { err: "Error: La expresión '" + exp.valor + "' de tipo " + exp.tipo + " no corresponde al tipo " + _instruccion.tipo_dato1 + " de la declaración del vector.\nLínea: " + exp.linea + " Columna: " + exp.columna + "\n" }
            }
        }
        else if (_instruccion.expresion != null) { 
            var op = Operacion(_instruccion.expresion, _ambito);
            if (op.err) { cadena.err = op.err; return cadena; }
            if (op.cadena) cadena.cadena = op.cadena;
            if (op.retorno) op = op.retorno;
            if (op.tipo === TIPO_DATO.VECTOR) {
                if (op.valor[0].tipo === _instruccion.tipo_dato1)
                    valores = op.valor;
                else
                    return { err: `Error: No es posible declarar un vector de tipo ${op.valor[0].tipo} al vector '${_instruccion.id}' que es de tipo ${_instruccion.tipo_dato1}.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
            }
            else
                return { err: `Error: No es posible declarar un valor de tipo ${op.tipo} al vector '${_instruccion.id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
        }
        else { 
            if (_instruccion.tipo_dato1 === _instruccion.tipo_dato2) {
                var tamano = Operacion(_instruccion.tamaño, _ambito)
                if (tamano.err) { cadena.err = tamano.err; return cadena; }
                if (tamano.cadena) cadena.cadena = tamano.cadena;
                if (tamano.retorno) tamano = tamano.retorno;
                if (tamano.tipo === TIPO_DATO.ENTERO) {
                    if (tamano.valor < 1) { return { err: "Error: La expresión de valor " + tamano.valor + " no es un tamaño válido para declarar el vector.\nLínea: " + tamano.linea + " Columna: " + tamano.columna + "\n" } }
                    for (let i = 0; i < tamano.valor; i++) {
                        var exp = {
                            tipo: _instruccion.tipo_dato1,
                            valor: defaultValue(_instruccion.tipo_dato1),
                            linea: _instruccion.linea,
                            columna: _instruccion.columna
                        }
                        valores.push(exp);
                    }
                }
                else
                    return { err: "Error: La expresión de tipo " + tamano.tipo + " no es de tipo numérica para declarar el tamaño del vector.\nLínea: " + tamano.linea + " Columna: " + tamano.columna + "\n" }
            }
            else
                return { err: "Error: El tipo " + _instruccion.tipo_dato1 + " no coincide con el tipo " + _instruccion.tipo_dato2 + " del vector.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valores, TIPO_DATO.VECTOR, _instruccion.linea, _instruccion.columna)
        if (_ambito.existeSimbolo(nuevoSimbolo.id) != false) {
            return { err: "Error: La variable '" + nuevoSimbolo.id + "' ya existe.\nLínea: " + nuevoSimbolo.linea + " Columna: " + nuevoSimbolo.columna + "\n" }
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return cadena;
    }

    else if (_instruccion.tipo_dato === TIPO_DATO.LISTA || _instruccion.tipo_dato.lista) {
        var valores = [];
        if (_instruccion.isParam) { 
            _instruccion.valor = Operacion(_instruccion.valor, _ambito)
            if (_instruccion.valor.err) { cadena.err = _instruccion.valor.err; return cadena }
            if (_instruccion.valor.retorno) _instruccion.valor = _instruccion.valor.retorno;
            if (_instruccion.valor.tipo === TIPO_DATO.LISTA) {
                if (_instruccion.valor.valor[0].tipo === _instruccion.tipo_dato.lista)
                    valores = _instruccion.valor.valor;
                else
                    return { err: `Error: No es posible declarar una lista de tipo ${_instruccion.valor.valor[0].tipo} a la lista '${_instruccion.id}' que es de tipo ${_instruccion.tipo_dato.lista}.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
            }
            else
                return { err: `Error: No es posible declarar un valor de tipo ${_instruccion.valor.tipo} a la lista '${_instruccion.id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
        }
        else if (_instruccion.expresion != null) { 
            var op = Operacion(_instruccion.expresion, _ambito);
            if (op.err) { cadena.err = op.err; return cadena; }
            if (op.cadena) cadena.cadena = op.cadena;
            if (op.retorno) op = op.retorno;
            if (op.tipo === TIPO_DATO.LISTA) {
                if (op.valor[0].tipo === _instruccion.tipo_dato1)
                    valores = op.valor;
                else
                    return { err: `Error: No es posible declarar una lista de tipo ${op.valor[0].tipo} a la lista '${_instruccion.id}' que es de tipo ${_instruccion.tipo_dato1}.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
            }
            else
                return { err: `Error: No es posible declarar un valor de tipo ${op.tipo} a la lista '${_instruccion.id}'.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
        }
        else { 
            if (_instruccion.tipo_dato1 === _instruccion.tipo_dato2) {
                var exp = {
                    tipo: _instruccion.tipo_dato1,
                    valor: 'EMPTY',
                    linea: _instruccion.linea,
                    columna: _instruccion.columna
                }
                valores.push(exp);
            }
            else
                return { err: "Error: El tipo " + _instruccion.tipo_dato1 + " no coincide con el tipo " + _instruccion.tipo_dato2 + " de la lista '" + _instruccion.id + "'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valores, TIPO_DATO.LISTA, _instruccion.linea, _instruccion.columna)
        if (_ambito.existeSimbolo(nuevoSimbolo.id) != false) {
            return { err: "Error: La variable '" + nuevoSimbolo.id + "' ya existe.\nLínea: " + nuevoSimbolo.linea + " Columna: " + nuevoSimbolo.columna + "\n" }
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return cadena;
    }

}

module.exports = Declaracion