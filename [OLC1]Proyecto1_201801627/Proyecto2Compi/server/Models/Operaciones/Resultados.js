const TIPOD = require("../../Controller/Principales/Tipos")
const TOPERACIONES  = require("../../Controller/Principales/TOperaciones")

function Resultados(tipo1, tipo2, ope){
    switch(ope){
        case TOPERACIONES.SUMA:
            if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.BOOLEAN){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CADENA){ return TIPOD.CADENA }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CARACTER){ return TIPOD.ENTERO }

            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.BOOLEAN){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CADENA){ return TIPOD.CADENA }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CARACTER){ return TIPOD.DOUBLE }

            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.CADENA){ return TIPOD.CADENA }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CADENA){ return TIPOD.CADENA }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CARACTER){ return TIPOD.CADENA }

            else if((tipo1 === TIPOD.CADENA || tipo2 === TIPOD.CADENA) && tipo1 != null &&  tipo2 != null ){ return TIPOD.CADENA }

            else return null;

        case TOPERACIONES.RESTA:
            if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.BOOLEAN){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CARACTER){ return TIPOD.ENTERO }

            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.BOOLEAN){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CARACTER){ return TIPOD.DOUBLE }

            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CARACTER){ return null }

            else if (tipo1 === TIPOD.CADENA || tipo2 === TIPOD.CADENA) {return null}
            
            else return null;
        
        case TOPERACIONES.MULTIPLICACION:
            if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CARACTER){ return TIPOD.ENTERO }

            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CADENA){ return TIPOD.CADENA }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.BOOLEAN){ return null }

            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CADENA){ null }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CARACTER){ null }

            else if(tipo1 === TIPOD.CADENA || tipo2 === TIPOD.CADENA) { return null }

            else return null;

        case TOPERACIONES.DIVISION:
            if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.BOOLEAN){ return null}
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CARACTER){ return TIPOD.DOUBLE }

            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CARACTER){ return TIPOD.DOUBLE }

            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.BOOLEAN){ return null }

            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CADENA){ null }
            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CARACTER){ null }

            else if(tipo1 === TIPOD.CADENA || tipo2 === TIPOD.CADENA) { return null }
            
            else return null;

        case TOPERACIONES.POTENCIA:
            if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.ENTERO){ return TIPOD.ENTERO }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.BOOLEAN){ return null }

            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.CADENA || tipo2 === TIPOD.CADENA){ return null }

            else return null;

        case TOPERACIONES.MODULO:
            if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.ENTERO && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.ENTERO){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.BOOLEAN){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CADENA){ return null }
            else if(tipo1 === TIPOD.DOUBLE && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.BOOLEAN && tipo2 === TIPOD.BOOLEAN){ return null }

            else if(tipo1 === TIPOD.CARACTER && tipo2 === TIPOD.CARACTER){ return null }

            else if(tipo1 === TIPOD.CADENA || tipo2 === TIPOD.CADENA){ return null }

            else return null;

        case TOPERACIONES.NEGACION:
            if(tipo1 === TIPOD.ENTERO){ return TIPOD.ENTERO }

            else if(tipo1 === TIPOD.DOUBLE){ return TIPOD.DOUBLE }

            else return null;
        
        default:
            return null;
    }
}

module.exports = Resultados