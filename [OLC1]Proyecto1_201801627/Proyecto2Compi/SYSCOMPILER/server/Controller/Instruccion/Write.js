const procesarCadena = require("../../Model/Operacion/Cadena")

function Wirteline(_instruccion, _ambito) {
    const cadena = procesarCadena(_instruccion.expresion, _ambito);
    return cadena;
}

module.exports = Wirteline