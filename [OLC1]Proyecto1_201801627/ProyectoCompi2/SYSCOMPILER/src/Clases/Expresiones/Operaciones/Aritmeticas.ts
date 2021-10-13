import Errores from "src/Clases/ArbolSintactico/Errores";
import Node from "src/Clases/ArbolSintactico/NodeAST";
import Controlador from "src/Clases/Controlador";
import { Expresiones } from "src/Clases/Interfaces/Expresiones";
import { TablaSimbols } from "src/Clases/Tabla_de_Simbolos/TablaSimbols";
import { TipoEnum } from "src/Clases/Tabla_de_Simbolos/Tipo";
import Operaciones, {OperadorEnum} from "./Operaciones";

export default class Aritmeticas extends Operaciones implements Expresiones{
    
    public tipo : any
    public constructor(exp1:Expresiones, op:string, exp2:Expresiones, fila:number, columna:number, expB:boolean){
        super(exp1, exp2, expB, fila, columna, op)
    }

    getTipo(controlador:Controlador, Tabla:TablaSimbols):TipoEnum{
        return this.tipo
    }

    getValor(controlador:Controlador, Tabla:TablaSimbols){
        let val1
        let val2
        let valBulean
        
        
    }


}