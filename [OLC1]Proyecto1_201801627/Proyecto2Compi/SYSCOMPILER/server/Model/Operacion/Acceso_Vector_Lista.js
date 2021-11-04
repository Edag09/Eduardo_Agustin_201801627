const TIPO_DATO = require("../../Controller/Principales/Tipos");
const Operacion = require("./Operacion")

function accesoVector(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    const id = _instruccion.id;
    var simbolo = _ambito.getSimbolo(id);
    if (simbolo) {
        var pos = Operacion(_instruccion.posicion, _ambito);
        if (pos.err) { cadena.err = pos.err; return cadena }
        if (pos.retorno) pos = pos.retorno;
        if (simbolo.tipo != TIPO_DATO.VECTOR) {
            return { err: `Error: la variable '${String(id)}' de tipo '${String(simbolo.tipo)}' no corresponde a un vector.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
        }
        if (pos.valor < 0 || pos.valor >= simbolo.valor.length) {
            return { err: `Error: el índice '${String(pos.valor)}' se encuentra fuera del tamaño del vector.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` };
        }
        if (pos.cadena) cadena.cadena = pos.cadena;
        cadena.retorno = simbolo.valor[pos.valor];
        return cadena;
    }
    return { err: `Error: el vector '${String(id)}' no existe.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
}

function accesoLista(_instruccion, _ambito) {
    var cadena = { cadena: "", retorno: null, err: null }
    const id = _instruccion.id;
    var simbolo = _ambito.getSimbolo(id);
    if (simbolo) {
        var pos = Operacion(_instruccion.posicion, _ambito);
        if (pos.err) { cadena.err = pos.err; return cadena }
        if (pos.retorno) pos = pos.retorno;
        if (simbolo.tipo != TIPO_DATO.LISTA) {
            return { err: `Error: la variable '${String(id)}' de tipo '${String(simbolo.tipo)}' no corresponde a una lista.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
        }
        if (pos.valor < 0 || pos.valor >= simbolo.valor.length) {
            return { err: `Error: el índice '${String(pos.valor)}' se encuentra fuera del tamaño de la lista.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` };
        }
        if (simbolo.valor[0].valor === 'EMPTY') {
            return { err: `Error: la lista '${String(id)}' no contiene elementos.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` };
        }
        if (pos.cadena) cadena.cadena = pos.cadena;
        cadena.retorno = simbolo.valor[pos.valor];
        return cadena;
    }
    return { err: `Error: la lista '${String(id)}' no existe.\nLínea: ${_instruccion.linea} Columna: ${_instruccion.columna}\n` }
}

module.exports = {
    AccesoVector: accesoVector,
    AccesoLista: accesoLista
};