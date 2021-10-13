import Node from "../ArbolSintactico/NodeAST";
import Controlador from "../Controlador";
import { Expresiones } from "../Interfaces/Expresiones";
import { TablaSimbols } from "../Tabla_de_Simbolos/TablaSimbols";
import  { TipoEnum }  from "../Tabla_de_Simbolos/Tipo";

export default class Primitivos implements Expresiones{

    public primitivo : any; 
    public tipo : any; 
    public fila : number;
    public columna : number;

    
    constructor(primitivo:any, tipo:any, fila:number, columna:number){
        this.primitivo = primitivo;
        this.tipo = tipo;
        this.fila = fila;
        this.columna = columna;
    }

    getTipo(controlador : Controlador, tabla:TablaSimbols):TipoEnum{
        return this.tipo
    }


    getValor(controlador : Controlador, tabal:TablaSimbols){
        return this.primitivo;
    }

    recorrer(): Node {
        let padre = new Node("Primitivo","");
         padre.AddHijo(new Node(this.primitivo.toString(),""));
 
        return padre;
     }

}