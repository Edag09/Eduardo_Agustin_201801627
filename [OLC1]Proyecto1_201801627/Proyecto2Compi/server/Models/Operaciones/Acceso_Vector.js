const TIPOD = require("../../Controller/Principales/Tipos")
const Operacion = require("./Operacion")

function accesoVector(_instuccion, _ambito){
    var cadena = { cadena: "", retorno: null, err: null}
    const id = _instuccion.id;
    var simbol = _ambito.getSimbol(id);
    if(simbol){
        var pos = Operacion(_instuccion.posicion, _ambito);
        if(pos.err) { cadena.err = pos.err; return cadena }
        if(pos.retorno) pos = pos.retorno;
        if(simbol.tipo != TIPOD.VECTOR){
            return { err: `Error: la variable '${String(id)}' de tipo '${String(simbol.tipo)}' no corresponde a un vector.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
        }
        if (pos.valor < 0 || pos.valor >= simbol.valor.length) {
            return { err: `Error: el índice '${String(pos.valor)}' se encuentra fuera del tamaño del vector.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` };
        }
        if (pos.cadena) cadena.cadena = pos.cadena;
        cadena.retorno = simbol.valor[pos.valor];
        return cadena;
    }
    return { err: `Error: el vector '${String(id)}' no existe.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
}

function accesoLista(_instuccion, _ambito){
    var cadena = { cadena: "", retorno: null, err: null}
    const id = _instuccion.id;
    var simbol = _ambito.getSimbol(id);
    if(simbol){
        var pos = Operacion(_instuccion.posicion, _ambito);
        if(pos.err) { cadena.err = pos.err; return cadena }
        if(pos.retorno) pos = pos.retorno;
        if(simbol.tipo != TIPOD.LISTA){
            return { err: `Error: La variable '${String(id)}' de tipo '${String(simbol.tipo)}' no corresponde a una lista.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
        }
        if (pos.valor < 0 || pos.valor >= simbol.valor.length) {
            return { err: `Error: El índice '${String(pos.valor)}' se encuentra fuera del tamaño de la lista.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` };
        }
        if (simbol.valor[0].valor === 'EMPTY'){
            return { err: `Error: La lista '${String(id)}' no contiene elementos.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` };
        }
        if (pos.cadena) cadena.cadena = pos.cadena;
        cadena.retorno = simbol.valor[pos.valor];
        return cadena;
    }
    return { err: `Error: La lista '${String(id)}' no existe.\nLínea: ${_instuccion.linea} Columna: ${_instuccion.columna}\n` }
}

module.exports = {
    AccesoVector: accesoVector,
    AccesoLista: accesoLista
};