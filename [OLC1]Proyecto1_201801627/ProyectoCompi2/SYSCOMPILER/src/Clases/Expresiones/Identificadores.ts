import Errores from "../ArbolSintactico/Errores";
import Node from "../ArbolSintactico/NodeAST";
import Controlador from "../Controlador";
import { Expresiones } from "../Interfaces/Expresiones";
import { TablaSimbols } from "../Tabla_de_Simbolos/TablaSimbols";
import  { TipoEnum }  from "../Tabla_de_Simbolos/Tipo";

export default class Identificadores implements Expresiones{

    public Id : string;
    public fila : number;
    public columna : number;

    constructor(id:string, fila:number, columna:number){
        this.Id = id;
        this.fila = fila;
        this.columna = columna;
    }


    getTipo(controlador : Controlador, tabla : TablaSimbols):TipoEnum{
        let existente = tabla.getSimbolo(this.Id.toLowerCase());

        if (existente != null){
            return existente.tipo.type;
        }else{
            let error = new Errores('Semantico',`No existe la variable ${this.Id} en la tabla de simbolos.`, this.fila, this.columna);
            controlador.errores.push(error);
            controlador.append(`No existe la variable ${this.Id} en la tabla de simbolos.` + ' en la linea: ' + this.fila);
            return TipoEnum.null;
        }
    }

    getValor(controlador : Controlador, tabla : TablaSimbols){
        let existente = tabla.getSimbolo(this.Id.toLowerCase());

        if (existente != null){
            return existente.tipo.type;
        }else{
            let error = new Errores('Semantico',`No existe la variable ${this.Id} en la tabla de simbolos.`, this.fila, this.columna);
            controlador.errores.push(error);
            controlador.append(`No existe la variable ${this.Id} en la tabla de simbolos.` + ' en la linea: ' + this.fila);
            return TipoEnum.null;
        }
    }

    recorrer():Node{
        let padre = new Node("Identificador", "");
        padre.AddHijo(new Node(this.Id.toString(), ""));
        return padre;
    }

}