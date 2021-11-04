const TIPO_DATO = require("../Principales/Tipos")
const TIPO_INSTRUCCION = require("../Principales/TInstrucciones")

function nuevaOperacion(_opIzq, _opDer, _tipo, _linea, _columna) {
    return {
        opIzq: _opIzq,
        opDer: _opDer,
        tipo: _tipo,
        linea: _linea,
        columna: _columna
    }
}

const Instruccion = {
    nuevoImprimir: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.WRITELINE,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoValor: function (_valor, _tipo, _linea, _columna) {
        return {
            tipo: _tipo,
            valor: _valor,
            linea: _linea,
            columna: _columna
        }
    },

    nuevaOperacionBinaria: function (_opIzq, _opDer, _tipo, _linea, _columna) {
        return nuevaOperacion(_opIzq, _opDer, _tipo, _linea, _columna)
    },

    nuevaDeclaracion: function (_id, _valor, _tipo, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.DECLARACION,
            id: _id,
            valor: _valor,
            tipo_dato: _tipo,
            linea: _linea,
            columna: _columna
        }
    },

    nuevaAsignacion: function (_id, _expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            id: _id,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoWhile: function (_expresion, _instrucciones, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.WHILE,
            expresion: _expresion,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoFor: function (_variable, _expresion, _instrucciones, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.FOR,
            variable: _variable,
            expresion: _expresion,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoDoWhile: function (_expresion, _instrucciones, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.DOWHILE,
            expresion: _expresion,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoIf: function (_expresion, _instrucciones, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.IF,
            expresion: _expresion,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoIfElse: function (_expresion, _instruccionesIF, _instruccionesELSE, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.IF_ELSE,
            expresion: _expresion,
            instruccionesIF: _instruccionesIF,
            instruccionesELSE: _instruccionesELSE,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoElseIf: function (_expresion, _instruccionesIF, _instruccionesELSEIF, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ELSE_IF,
            expresion: _expresion,
            instruccionesIF: _instruccionesIF,
            instruccionesELSEIF: _instruccionesELSEIF,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoCaso: function (_expresion, _instrucciones, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.CASO,
            expresion: _expresion,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoSwitch: function (_expresionEvaluar, _casosComparar, _casoDefault, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.SWITCH,
            expresionEvaluar: _expresionEvaluar,
            casosComparar: _casosComparar, 
            casoDefault: _casoDefault,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoTernario: function (_condicion, _expresionA, _expresionB, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.TERNARIO,
            condicion: _condicion,
            expresionA: _expresionA,
            expresionB: _expresionB,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoCasteo: function (_tipo, _expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.CASTEO,
            nuevoTipo: _tipo,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoVector: function (_tipo1, _tipo2, _id, _tamaño, _valores, _expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.DECLARACION,
            tipo_dato: TIPO_DATO.VECTOR,
            id: _id,
            tamaño: _tamaño, 
            valores: _valores, 
            tipo_dato1: _tipo1, 
            tipo_dato2: _tipo2,  
            expresion: _expresion, 
            linea: _linea,
            columna: _columna
        }
    },

    modificacionVector: function (_id, _posicion, _valor, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            tipo_dato: TIPO_DATO.VECTOR,
            id: _id,
            posicion: _posicion,
            valor: _valor,
            linea: _linea,
            columna: _columna
        }
    },

    accesoVector: function (_id, _posicion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ACCESO,
            tipo_dato: TIPO_DATO.VECTOR,
            id: _id,
            posicion: _posicion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevaLista: function (_tipo1, _tipo2, _id, _expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.DECLARACION,
            tipo_dato: TIPO_DATO.LISTA,
            id: _id,
            expresion: _expresion,
            tipo_dato1: _tipo1,
            tipo_dato2: _tipo2,
            linea: _linea,
            columna: _columna
        }
    },

    modificacionLista: function (_id, _posicion, _valor, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            tipo_dato: TIPO_DATO.LISTA,
            id: _id,
            posicion: _posicion, 
            valor: _valor,
            linea: _linea,
            columna: _columna
        }
    },

    accesoLista: function (_id, _posicion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ACCESO,
            tipo_dato: TIPO_DATO.LISTA,
            id: _id,
            posicion: _posicion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoContinue: function (_linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.CONTINUE,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoBreak: function (_linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.BREAK,
            linea: _linea,
            columna: _columna
        }
    },

    toLower: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.TO_LOWER,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    toUpper: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.TO_UPPER,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoLength: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.LENGTH,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoTruncate: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.TRUNCATE,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoRound: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ROUND,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoTypeOf: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.TYPEOF,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoToString: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.TOSTRING,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoToCharArray: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.TOCHARLIST,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoMetodo: function (_nombre, _lista_parametros, _instrucciones, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.NUEVO_METODO,
            nombre: _nombre,
            lista_parametros: _lista_parametros,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoParametro: function (_id, _tipo, _linea, _columna) {
        return {
            id: _id,
            tipo_dato: _tipo,
            linea: _linea,
            columna: _columna
        }
    },

    nuevaFuncion: function (_nombre, _lista_parametros, _instrucciones, _tipo_retorno, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.NUEVA_FUNCION,
            nombre: _nombre,
            lista_parametros: _lista_parametros,
            instrucciones: _instrucciones,
            retorno: _tipo_retorno,
            linea: _linea,
            columna: _columna
        }
    },

    nuevaLlamada: function (_id, _lista_valores, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.LLAMADA,
            nombre: _id,
            lista_valores: _lista_valores, 
            linea: _linea,
            columna: _columna
        }
    },

    nuevoStart: function (_nombre, _lista_valores, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.START_WITH,
            nombre: _nombre,
            lista_valores: _lista_valores,
            linea: _linea,
            columna: _columna
        }
    },

    nuevoReturn: function (_expresion, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.RETURN,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    }
}

module.exports = Instruccion