import Node from "../ArbolSintactico/NodeAST";
import Controlador from "../Controlador";
import { TablaSimbols } from "../Tabla_de_Simbolos/TablaSimbols";

export interface Instrucciones{

    /**
     * @function ejecutar activa las instrucciones
     * @param controlador controla el programa
     * @param ts tabla de simbolos
     */

    ejecutar(controlador : Controlador, ts : TablaSimbols):any;

    getTipo(controlador : Controlador, ts : TablaSimbols):any;

    /**
     * @function recorrer retorna los subarboles
     */
    recorrer():Node;
}