import Errores from "src/Clases/ArbolSintactico/Errores";
import Node from "src/Clases/ArbolSintactico/NodeAST";
import Controlador from "src/Clases/Controlador";
import { Expresiones } from "src/Clases/Interfaces/Expresiones";
import { TablaSimbols } from "src/Clases/Tabla_de_Simbolos/TablaSimbols";
import { TipoEnum } from "src/Clases/Tabla_de_Simbolos/Tipo";
import Operaciones, { OperadorEnum } from "./Operaciones";

export default class Relacionales extends Operaciones implements Expresiones{

    public constructor(exp1:Expresiones, op:string, exp2:Expresiones, fila:number, columna:number, expU:boolean){
        super(exp1, exp2, expU, fila, columna, op)
    }

    getTipo(controlador: Controlador, Tabla: TablaSimbols):TipoEnum{
        let valor = this.getValor(controlador, Tabla)

        if (typeof valor == 'number') {
            return TipoEnum.DOUBLE
        }else if (typeof valor == 'string'){
            return TipoEnum.CADENA
        }else if (typeof valor == 'boolean') {
            return TipoEnum.BOOLEANO
        }
        return TipoEnum.null
    }

    /**
     * 
     * @param controlador 
     * @param Tabla 
     * @returns 
     */

    getValor(controlador:Controlador, Tabla:TablaSimbols):any{
        let val1;
        let val2;
        let valBol;

        if (this.expresionBulenana == false) {
            val1 = this.expresion1.getValor(controlador, Tabla)
            val2 = this.expresion2.getValor(controlador, Tabla)
        }else{
            valBol = this.expresion1.getValor(controlador, Tabla)
        }

        /**
         * Validaciones segun la tabla presentada en el enunciado
         */

        switch (this.operador) {
            case OperadorEnum.MENORQUE:
                if (typeof val1 == 'number') {
                    if (typeof val2 == 'number') {
                        return val1 < val2;
                    }else if(this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                        let ascii = val2.charCodeAt(0)
                        return val1 < ascii
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion "<" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion "<" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else if(this.expresion1.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                    let ascii = val1.charCodeAt(0)
                    if (typeof val2 == 'number') {
                        return ascii < val2
                    }else if (this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER) {
                        let ascii2 = val2.charCodeAt(0);
                        return ascii < ascii2
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion "<" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion "<" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion "<" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion "<" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                }
                break;
            case OperadorEnum.MAYORQUE:
                if (typeof val1 == 'number') {
                    if (typeof val2 == 'number') {
                        return val1 > val2;
                    }else if(this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                        let ascii = val2.charCodeAt(0)
                        return val1 > ascii
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion ">" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion ">" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else if(this.expresion1.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                    let ascii = val1.charCodeAt(0)
                    if (typeof val2 == 'number') {
                        return ascii > val2
                    }else if (this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER) {
                        let ascii2 = val2.charCodeAt(0);
                        return ascii > ascii2
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion ">" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion ">" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else{
                    let error = new Errores('Semantico', `No se puede ejecutar la operacion ">" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append(`No se puede ejecutar la operacion ">" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                }
                break;
            case OperadorEnum.IGUALIGUAL:
                if (this.expresion1.getTipo(controlador, Tabla) == this.expresion2.getTipo(controlador, Tabla)) {
                    return val1 == val2
                }else{
                    let error = new Errores('Semantico', `No se puede ejecutar la operacion "==" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append(`No se puede ejecutar la operacion "==" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                }
                break;
            case OperadorEnum.DIFERENTEA:
                if (this.expresion1.getTipo(controlador, Tabla) == this.expresion2.getTipo(controlador, Tabla)) {
                    return val1 != val2
                }else{
                    let error = new Errores('Semantico', `No se puede ejecutar la operacion "!=" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append(`No se puede ejecutar la operacion "!=" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                }
                break;
            case OperadorEnum.MAYORIGUAL:
                if (typeof val1 == 'number') {
                    if (typeof val2 == 'number') {
                        return val1 >= val2;
                    }else if(this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                        let ascii = val2.charCodeAt(0)
                        return val1 >= ascii
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion ">=" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion ">=" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else if(this.expresion1.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                    let ascii = val1.charCodeAt(0)
                    if (typeof val2 == 'number') {
                        return ascii >= val2
                    }else if (this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER) {
                        let ascii2 = val2.charCodeAt(0);
                        return ascii >= ascii2
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion ">=" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion ">=" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else{
                    let error = new Errores('Semantico', `No se puede ejecutar la operacion ">=" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append(`No se puede ejecutar la operacion ">=" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                }
                break;
            case OperadorEnum.MENORIGUAL:
                if (typeof val1 == 'number') {
                    if (typeof val2 == 'number') {
                        return val1 <= val2;
                    }else if(this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                        let ascii = val2.charCodeAt(0)
                        return val1 <= ascii
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion "<=" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion "<=" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else if(this.expresion1.getTipo(controlador, Tabla) == TipoEnum.CARACTER){
                    let ascii = val1.charCodeAt(0)
                    if (typeof val2 == 'number') {
                        return ascii <= val2
                    }else if (this.expresion2.getTipo(controlador, Tabla) == TipoEnum.CARACTER) {
                        let ascii2 = val2.charCodeAt(0);
                        return ascii <= ascii2
                    }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion "<=" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion "<=" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                    }
                }else{
                        let error = new Errores('Semantico', `No se puede ejecutar la operacion "<=" ${val1} y ${val2}, ya que no son de tipos validos`, this.fila, this.columna);
                        controlador.errores.push(error);
                        controlador.append(`No se puede ejecutar la operacion "<=" ${val1} y ${val2}, ya que no son de tipos validos`+ "Linea: " +this.fila );
                }
                break;
            default:
                break;
        }
    }

    /**
     * 
     * @returns 
     */

    recorrer():Node{
        let padre = new Node("Expresion", "")

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