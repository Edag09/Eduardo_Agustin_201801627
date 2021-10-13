import Node from "src/Clases/ArbolSintactico/NodeAST";
import Controlador from "src/Clases/Controlador";
import { Expresiones } from "src/Clases/Interfaces/Expresiones";
import { TablaSimbols } from "src/Clases/Tabla_de_Simbolos/TablaSimbols";
import { TipoEnum } from "src/Clases/Tabla_de_Simbolos/Tipo";


export enum OperadorEnum{
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    POTENCIA,
    MODULO,
    MENORQUE,
    MAYORQUE,
    MENORIGUAL,
    MAYORIGUAL,
    AND,
    OR,
    NOT,
    UNARIO,
    IGUALIGUAL,
    DIFERENTEA,
    null
}


export default class Operaciones implements Expresiones{

    public expresion1 : Expresiones
    public expresion2 : Expresiones
    public expresionBulenana : boolean
    public operador : OperadorEnum
    public fila : number
    public columna : number
    public operacion : string

    constructor(exp1:Expresiones, exp2:Expresiones, expB:boolean, fila:number, columna:number, op:string){
        this.expresion1 = exp1
        this.expresion2 = exp2
        this.columna = columna
        this.fila = fila
        this.expresionBulenana = expB
        this.operacion = op
        this.operador = this.getOperador(op)
    }

    getOperador(op:string):OperadorEnum{
        if(op == '+'){
            return OperadorEnum.SUMA;
        }else if(op == '-'){
            return OperadorEnum.RESTA;
        }else if(op == '<'){
            return OperadorEnum.MENORQUE;
        }else if(op == '*'){
            return OperadorEnum.MULTIPLICACION;
        }else if(op == '/'){
            return OperadorEnum.DIVISION;
        }else if(op == '>'){
            return OperadorEnum.MAYORQUE;
        }else if(op == '&&'){
            return OperadorEnum.AND;
        }else if(op == '!'){
            return OperadorEnum.NOT;
        }else if(op == 'UNARIO'){
            return OperadorEnum.UNARIO;
        }else if(op == '=='){
            return OperadorEnum.IGUALIGUAL;
        }else if(op == '>='){
            return OperadorEnum.MAYORIGUAL;
        }else if(op == '<='){
            return OperadorEnum.MENORIGUAL;
        }else if(op == '||'){
            return OperadorEnum.OR;
        }else if (op=='!='){
            return OperadorEnum.DIFERENTEA;
        }else if (op=='^'){
            return OperadorEnum.POTENCIA;
        }else if (op=='%'){
            return OperadorEnum.MODULO;
        }
        return OperadorEnum.null
    }

    getTipo(controlador: Controlador, Tabla: TablaSimbols): TipoEnum {
        throw new Error("Method not implemented.");
    }
    getValor(controlador: Controlador, Tabla: TablaSimbols) {
        throw new Error("Method not implemented.");
    }
    recorrer(): Node {
        throw new Error("Method not implemented.");
    }
    
}