const TIPO_DATO = require("../../Controller/Principales/Tipos");
const TIPO_VALOR = require("../../Controller/Principales/TValores");

function ValorExpresion(_expresion, _ambito) {

    if (_expresion.tipo === TIPO_VALOR.DOBLE) {
        return {
            valor: parseFloat(_expresion.valor),
            tipo: TIPO_DATO.DOBLE,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }

    else if (_expresion.tipo === TIPO_VALOR.ENTERO) {
        return {
            valor: parseInt(_expresion.valor),
            tipo: TIPO_DATO.ENTERO,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }

    else if (_expresion.tipo === TIPO_VALOR.BOOLEANO) {
        return {
            valor: _expresion.valor.toString() == 'true',
            tipo: TIPO_DATO.BOOLEANO,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }

    else if (_expresion.tipo === TIPO_VALOR.CADENA) {
        return {
            valor: String(_expresion.valor),
            tipo: TIPO_DATO.CADENA,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }

    else if (_expresion.tipo === TIPO_VALOR.CARACTER) {
        return {
            valor: String(_expresion.valor),
            tipo: TIPO_DATO.CARACTER,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }

    else if (_expresion.tipo === TIPO_VALOR.IDENTIFICADOR) {
        var simbolo;
        if (_ambito.isParam)
            simbolo = _ambito.ambito.getParam(_expresion.valor);
        else
            simbolo = _ambito.getSimbolo(_expresion.valor)
        if (simbolo != null) {
            if (simbolo.tipo === TIPO_DATO.VECTOR) {
                var val = '[ '
                for (let i = 0; i < simbolo.valor.length; i++) {
                    val += simbolo.valor[i].valor + ", ";
                }
                val = val.substring(0, val.length - 2) + ' ]'
                return {
                    valor: simbolo.valor,
                    print_val: val,
                    tipo: simbolo.tipo,
                    linea: simbolo.linea,
                    columna: simbolo.columna
                }
            }
            else if (simbolo.tipo === TIPO_DATO.LISTA) {
                var val = '[[ '
                for (let i = 0; i < simbolo.valor.length; i++) {
                    val += simbolo.valor[i].valor + ", ";
                }
                val = val.substring(0, val.length - 2) + ' ]]'
                return {
                    valor: simbolo.valor,
                    print_val: val,
                    tipo: simbolo.tipo,
                    linea: simbolo.linea,
                    columna: simbolo.columna
                }
            }
            return {
                valor: simbolo.valor,
                tipo: simbolo.tipo,
                linea: simbolo.linea,
                columna: simbolo.columna
            }
        }
        return {
            err: "Error: la variable '" + _expresion.valor + "' no existe.\nLínea: " + _expresion.linea + " Columna: " + _expresion.columna + "\n",
            tipo: null,
            linea: _expresion.linea,
            columna: _expresion.columna
        }

    }
}

module.exports = ValorExpresion