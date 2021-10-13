import Node from "../ArbolSintactico/NodeAST";
import Controlador from "../Controlador";
import { TablaSimbols } from "../Tabla_de_Simbolos/TablaSimbols";
import  { TipoEnum }  from "../Tabla_de_Simbolos/Tipo";

export interface Expresiones{

    /**
     * 
     * @param controlador 
     * @param Tabla 
     */
    getTipo(controlador : Controlador, Tabla : TablaSimbols):TipoEnum;

    /**
     * 
     * @param controlador 
     * @param Tabla 
     */

    getValor(controlador : Controlador, Tabla : TablaSimbols):any;

    /**
     * 
     */

    recorrer():Node;
}