const TIPO_DATO = require("../../Controller/Principales/Tipos");
const TIPO_OPERACION = require("../../Controller/Principales/TOperaciones");

function TipoResultado(_tipo1, _tipo2, operacion) {
    switch (operacion) {
        case TIPO_OPERACION.SUMA:
            if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.BOOLEANO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CADENA) { return TIPO_DATO.CADENA }

            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.BOOLEANO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CADENA) { return TIPO_DATO.CADENA }

            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.CARACTER) { return null }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.CADENA) { return TIPO_DATO.CADENA }

            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.CADENA }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CADENA) { return TIPO_DATO.CADENA }

            else if ((_tipo1 === TIPO_DATO.CADENA || _tipo2 === TIPO_DATO.CADENA) && _tipo1 !== null && _tipo2 !== null) { return TIPO_DATO.CADENA }

            else return null;

        case TIPO_OPERACION.RESTA:
            if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.BOOLEANO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.BOOLEANO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.CARACTER) { return null }
            else if (_tipo1 === TIPO_DATO.BOOLEANO && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CARACTER) { return null }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.CADENA || _tipo2 === TIPO_DATO.CADENA) { return null }

            else return null;

        case TIPO_OPERACION.MULTIPLICACION:
            if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.BOOLEANO || _tipo2 === TIPO_DATO.BOOLEANO) { return null }

            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CARACTER) { null }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CADENA) { null }

            else if (_tipo1 === TIPO_DATO.CADENA || _tipo2 === TIPO_DATO.CADENA) { return null }

            else return null;

        case TIPO_OPERACION.DIVISION:
            if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CARACTER) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.BOOLEANO || _tipo2 === TIPO_DATO.BOOLEANO) { return null }

            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CARACTER) { null }
            else if (_tipo1 === TIPO_DATO.CARACTER && _tipo2 === TIPO_DATO.CADENA) { null }

            else if (_tipo1 === TIPO_DATO.CADENA || _tipo2 === TIPO_DATO.CADENA) { return null }

            else return null;

        case TIPO_OPERACION.POTENCIA:
            if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CARACTER) { return null }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CARACTER) { return null }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.BOOLEANO || _tipo2 === TIPO_DATO.BOOLEANO) { return null }

            else if (_tipo1 === TIPO_DATO.CARACTER || _tipo2 === TIPO_DATO.CARACTER) { return null }

            else if (_tipo1 === TIPO_DATO.CADENA || _tipo2 === TIPO_DATO.CADENA) { return null }

            else return null;

        case TIPO_OPERACION.MODULO:
            if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CARACTER) { return null }
            else if (_tipo1 === TIPO_DATO.ENTERO && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.ENTERO) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.BOOLEANO) { return null }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CARACTER) { return null }
            else if (_tipo1 === TIPO_DATO.DOBLE && _tipo2 === TIPO_DATO.CADENA) { return null }

            else if (_tipo1 === TIPO_DATO.BOOLEANO || _tipo2 === TIPO_DATO.BOOLEANO) { return null }

            else if (_tipo1 === TIPO_DATO.CARACTER || _tipo2 === TIPO_DATO.CARACTER) { return null }

            else if (_tipo1 === TIPO_DATO.CADENA || _tipo2 === TIPO_DATO.CADENA) { return null }

            return null;

        case TIPO_OPERACION.NEGACION:
            if (_tipo1 === TIPO_DATO.ENTERO) { return TIPO_DATO.ENTERO }

            else if (_tipo1 === TIPO_DATO.DOBLE) { return TIPO_DATO.DOBLE }

            else return null;

        default:
            return null;
    }
}

module.exports = TipoResultado