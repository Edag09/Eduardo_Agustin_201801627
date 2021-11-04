const procesarCadena = require("../../model/Operacion/procesarCadena")

function imprimir(_instruccion, _ambito) {
    const cadena = procesarCadena(_instruccion.expresion, _ambito);
    return cadena;
}

module.exports = imprimir