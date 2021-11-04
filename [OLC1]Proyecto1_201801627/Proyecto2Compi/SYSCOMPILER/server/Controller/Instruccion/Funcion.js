const { Funcion } = require("../../Model/Ambito/FunMet");

function DecFuncion(_instruccion, _ambito) {
    const nuevaFuncion = new Funcion(_instruccion.nombre, _instruccion.lista_parametros, _instruccion.instrucciones, _instruccion.retorno, _instruccion.linea, _instruccion.columna)
    if (_ambito.existeSimbolo(nuevaFuncion.id) != false) {
        return `Error: Ya existe una variable con el mismo identificador '${nuevaFuncion.id}'\nLínea: ${nuevaFuncion.linea} Columna: ${nuevaFuncion.columna}\n`
    }
    else if (_ambito.existeFuncion(nuevaFuncion.id) != false) {
        return `Error: La función '${nuevaFuncion.id}' ya existe.\nLínea: ${nuevaFuncion.linea} Columna: ${nuevaFuncion.columna}\n`
    }
    _ambito.addFuncion(nuevaFuncion.id, nuevaFuncion)
    return null
}

module.exports = DecFuncion