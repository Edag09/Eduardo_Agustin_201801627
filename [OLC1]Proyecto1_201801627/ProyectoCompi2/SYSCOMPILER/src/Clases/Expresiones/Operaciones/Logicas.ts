import Errores from "src/Clases/ArbolSintactico/Errores";
import Node from "src/Clases/ArbolSintactico/NodeAST";
import Controlador from "src/Clases/Controlador";
import { Expresiones } from "src/Clases/Interfaces/Expresiones";
import { TablaSimbols } from "src/Clases/Tabla_de_Simbolos/TablaSimbols";
import { TipoEnum } from "src/Clases/Tabla_de_Simbolos/Tipo";
import Operaciones, {OperadorEnum} from "./Operaciones";

export default class Logicas extends Operaciones implements Expresiones{

    public constructor(exp1:Expresiones, op:string, exp2:Expresiones, fila:number, columna:number, expB:boolean){
        super(exp1, exp2, expB, fila, columna, op)
    }

    getTipo(controlador:Controlador, Tabla:TablaSimbols):TipoEnum{
        let valor = this.getValor(controlador, Tabla);

        if (typeof valor == 'number') {
            return TipoEnum.DOUBLE
        }else if (typeof valor == 'string') {
            return TipoEnum.CADENA
        }else if(typeof valor == 'boolean'){
            return TipoEnum.BOOLEANO
        }
        return TipoEnum.null
    }

    getValor(controlador:Controlador, Tabla:TablaSimbols){
        let val1
        let val2
        let valBulean

        if (this.expresionBulenana == false) {
            val1 = this.expresion1.getValor(controlador, Tabla)
            val2 = this.expresion2.getValor(controlador, Tabla)
        }else{
            valBulean = this.expresion1.getValor(controlador, Tabla)
        }

        switch(this.operador){
            case OperadorEnum.AND:
                if (this.expresion1.getTipo(controlador, Tabla) == TipoEnum.BOOLEANO) {
                    if (typeof val2 == 'boolean') {
                        return val1 && val2
                    }else{
                        return val1 && true
                    }
                }else{
                    if (typeof val2 == 'boolean') {
                        return true && val2
                    }else{
                        return true && true
                    }
                }
                break;
            case OperadorEnum.NOT:
                if (typeof valBulean == 'boolean') {
                    return !valBulean
                }else{
                    let error = new Errores('Semantico', `No se puede negar ${valBulean} ya que el valor no es booleano.`, this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append(`No se puede negar ${valBulean} ya que el valor no es booleano.`+ "Linea: " +this.fila );
            return null
                }
                break;
            case OperadorEnum.OR:
                if (typeof val1 == 'boolean') {
                    if (typeof val2 == 'boolean') {
                        return val1 || val2
                    }else{
                        return val1 || true
                    }
                }else{
                    if (typeof val2 == 'boolean') {
                        return true || val2
                    }else{
                        return true || true
                    }
                }
                break;
            default:
                let error = new Errores('Semantico', `Error critico, no se uso ningun operador logico reconocido`, this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append(`Error critico, no se uso ningun operador logico reconocido`+ "Linea: " +this.fila );
                break;
        }
    }

    recorrer():Node{
        let padre = new Node("Operador", "")

        if (this.expresionBulenana) {
            padre.AddHijo(new Node(this.operacion, ""));
            padre.AddHijo(this.expresion1.recorrer());
        }else{
            padre.AddHijo(this.expresion1.recorrer());
            padre.AddHijo(new Node(this.operacion, ""));
            padre.AddHijo(this.expresion2.recorrer());
        }
        return padre
    }

}