const { Metodo } = require("../../Model/Ambito/FunMet");

function DecMetodo(_instruccion, _ambito) {
    const nuevoMetodo = new Metodo(_instruccion.nombre, _instruccion.lista_parametros, _instruccion.instrucciones, _instruccion.linea, _instruccion.columna)
    if (_ambito.existeSimbolo(nuevoMetodo.id) != false) {
        return `Error: Ya existe una variable con el mismo identificador '${nuevoMetodo.id}'\nLínea: ${nuevoMetodo.linea} Columna: ${nuevoMetodo.columna}\n`
    }
    else if (_ambito.existeFuncion(nuevoMetodo.id) != false) {
        return `Error: El método '${nuevoMetodo.id}' ya existe.\nLínea: ${nuevoMetodo.linea} Columna: ${nuevoMetodo.columna}\n`
    }
    _ambito.addFuncion(nuevoMetodo.id, nuevoMetodo)
    return null
}

module.exports = DecMetodo