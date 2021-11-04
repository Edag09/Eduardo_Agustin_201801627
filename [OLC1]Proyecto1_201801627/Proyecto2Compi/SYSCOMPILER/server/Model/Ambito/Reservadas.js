const TIPO_DATO = require("../../Controller/Principales/Tipos");
const Operacion = require("../Operacion/Operacion");

function casteo(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    switch (_instruccion.nuevoTipo) {
        case TIPO_DATO.DOBLE:
            if (expresion.tipo === TIPO_DATO.ENTERO || expresion.tipo === TIPO_DATO.DOBLE) {
                expresion.valor = parseFloat(expresion.valor)
                expresion.tipo = TIPO_DATO.DOBLE;
                cadena.retorno = expresion;
                return cadena;
            }
            else if (expresion.tipo === TIPO_DATO.CARACTER) {
                expresion.valor = parseFloat(expresion.valor.charCodeAt(0));
                expresion.tipo = TIPO_DATO.DOBLE;
                cadena.retorno = expresion;
                return cadena;
            }
            else
                return { err: "Error: no se puede castear " + expresion.tipo + " a " + _instruccion.nuevoTipo + "\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        case TIPO_DATO.ENTERO:
            if (expresion.tipo === TIPO_DATO.DOBLE || expresion.tipo === TIPO_DATO.ENTERO) {
                expresion.valor = parseInt(expresion.valor);
                expresion.tipo = TIPO_DATO.ENTERO;
                cadena.retorno = expresion;
                return cadena;
            }
            else if (expresion.tipo === TIPO_DATO.CARACTER) {
                expresion.valor = parseInt(expresion.valor.charCodeAt(0));
                expresion.tipo = TIPO_DATO.ENTERO;
                cadena.retorno = expresion;
                return cadena;
            }
            else
                return { err: "Error: no se puede castear " + expresion.tipo + " a " + _instruccion.nuevoTipo + "\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        case TIPO_DATO.CADENA:
            if (expresion.tipo === TIPO_DATO.ENTERO || expresion.tipo === TIPO_DATO.DOBLE || expresion.tipo === TIPO_DATO.CADENA) {
                expresion.valor = String(expresion.valor);
                expresion.tipo = TIPO_DATO.CADENA;
                cadena.retorno = expresion;
                return cadena;
            }
            else {
                return { err: "Error: no se puede castear " + expresion.tipo + " a " + _instruccion.nuevoTipo + "\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
            }
        case TIPO_DATO.CARACTER:
            if (expresion.tipo === TIPO_DATO.ENTERO) {
                expresion.valor = String.fromCharCode(expresion.valor);
                expresion.tipo = TIPO_DATO.CARACTER;
                cadena.retorno = expresion;
                return cadena;
            }
            else
                return { err: "Error: no se puede castear " + expresion.tipo + " a " + _instruccion.nuevoTipo + "\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
        default:
            return { err: "Error: no se puede castear " + expresion.tipo + " a " + _instruccion.nuevoTipo + "\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
    }
}

function to_Lower(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    if (expresion.tipo === TIPO_DATO.CADENA || expresion.tipo === TIPO_DATO.CARACTER) {
        expresion.valor = expresion.valor.toLowerCase();
        cadena.retorno = expresion;
        return cadena;
    }
    return { err: "Error: La expresión de tipo " + expresion.tipo + " no es aceptada en 'toLower()'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function to_Upper(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    if (expresion.tipo === TIPO_DATO.CADENA || expresion.tipo === TIPO_DATO.CARACTER) {
        expresion.valor = expresion.valor.toUpperCase();
        cadena.retorno = expresion;
        return cadena;
    }
    return { err: "Error: La expresión de tipo " + expresion.tipo + " no es aceptada en 'toUpper()'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function get_length(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    if (expresion.tipo === TIPO_DATO.VECTOR || expresion.tipo === TIPO_DATO.LISTA) {
        if (expresion.valor[0].valor === 'EMPTY')
            cadena.retorno = { valor: 0, tipo: TIPO_DATO.ENTERO, linea: _instruccion.linea, columna: _instruccion.columna }
        else
            cadena.retorno = { valor: expresion.valor.length, tipo: TIPO_DATO.ENTERO, linea: _instruccion.linea, columna: _instruccion.columna }
        return cadena;
    }
    if (expresion.tipo === TIPO_DATO.CADENA) {
        cadena.retorno = { valor: expresion.valor.length, tipo: TIPO_DATO.ENTERO, linea: _instruccion.linea, columna: _instruccion.columna }
        return cadena;
    }
    return { err: "Error: La expresión de tipo " + expresion.tipo + " no es aceptada en 'length()'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function truncate(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    if (expresion.tipo === TIPO_DATO.ENTERO || expresion.tipo === TIPO_DATO.DOBLE) {
        cadena.retorno = { valor: Math.trunc(expresion.valor), tipo: TIPO_DATO.ENTERO, linea: _instruccion.linea, columna: _instruccion.columna }
        return cadena;
    }
    return { err: "Error: La expresión de tipo " + expresion.tipo + " no es aceptada en 'truncate()'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function round(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    if (expresion.tipo === TIPO_DATO.ENTERO || expresion.tipo === TIPO_DATO.DOBLE) {
        cadena.retorno = { valor: Math.round(expresion.valor), tipo: TIPO_DATO.ENTERO, linea: _instruccion.linea, columna: _instruccion.columna }
        return cadena;
    }
    return { err: "Error: La expresión de tipo " + expresion.tipo + " no es aceptada en 'round()'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function typeOf(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    var type = get_Type(expresion);
    cadena.retorno = { valor: type, tipo: TIPO_DATO.CADENA, linea: _instruccion.linea, columna: _instruccion.columna }
    return cadena;
}

function get_Type(expresion) {
    switch (expresion.tipo) {
        case TIPO_DATO.BOOLEANO: return 'boolean';
        case TIPO_DATO.CADENA: return 'string';
        case TIPO_DATO.CARACTER: return 'char';
        case TIPO_DATO.DOBLE: return 'double';
        case TIPO_DATO.ENTERO: return 'int';
        case TIPO_DATO.LISTA: return 'list<' + get_Type(expresion.valor[0]) + '>';
        case TIPO_DATO.VECTOR: return get_Type(expresion.valor[0]) + '[]';
        default: return null;
    }
}

function to_String(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    if (expresion.tipo === TIPO_DATO.ENTERO || expresion.tipo === TIPO_DATO.DOBLE || expresion.tipo === TIPO_DATO.BOOLEANO || expresion.tipo === TIPO_DATO.CADENA || expresion.tipo === TIPO_DATO.CARACTER) {
        cadena.retorno = { valor: String(expresion.valor), tipo: TIPO_DATO.CADENA, linea: _instruccion.linea, columna: _instruccion.columna }
        return cadena;
    }
    return { err: "Error: La expresión de tipo " + expresion.tipo + " no es aceptada en 'toString()'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}

function to_CharList(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    var expresion = Operacion(_instruccion.expresion, _ambito);
    if (expresion.err) { cadena.err = expresion.err; return cadena }
    if (expresion.cadena) cadena.cadena = expresion.cadena;
    if (expresion.retorno) expresion = expresion.retorno;
    if (expresion.tipo === TIPO_DATO.CADENA) {
        var valores = [];
        for (let i = 0; i < expresion.valor.length; i++) {
            var char = String(expresion.valor[i]);
            var exp = {
                tipo: TIPO_DATO.CARACTER,
                valor: char,
                linea: _instruccion.linea,
                columna: _instruccion.columna
            }
            valores.push(exp);
        }
        cadena.retorno = { asignacionLista: true, tipo: TIPO_DATO.LISTA, valor: valores, linea: _instruccion.linea, columna: _instruccion.columna };
        return cadena;
    }
    return { err: "Error: La expresión de tipo " + expresion.tipo + " no es aceptada en 'toCharArray()'.\nLínea: " + _instruccion.linea + " Columna: " + _instruccion.columna + "\n" }
}


module.exports = {
    Casteo: casteo,
    ToLower: to_Lower,
    ToUpper: to_Upper,
    Length: get_length,
    Truncate: truncate,
    Round: round,
    TypeOf: typeOf,
    ToString: to_String,
    ToCharList: to_CharList
};