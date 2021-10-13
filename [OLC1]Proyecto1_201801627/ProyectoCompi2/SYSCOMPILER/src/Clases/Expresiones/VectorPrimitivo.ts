import Errores from "../ArbolSintactico/Errores";
import Node from "../ArbolSintactico/NodeAST";
import Controlador from "../Controlador";
import { Expresiones } from "../Interfaces/Expresiones";
import { TablaSimbols } from "../Tabla_de_Simbolos/TablaSimbols";
import { TipoEnum }  from "../Tabla_de_Simbolos/Tipo";


export default class VectorPrimitivo implements Expresiones{

    public id : string;
    public cont : Expresiones;
    public fila : number;
    public columna : number;

    /**
     * 
     * @param id 
     * @param index 
     * @param fila 
     * @param columna 
     */

    constructor(id: string, index:any, fila: number, columna: number){
        this.id = id;
        this.cont = index;
        this.fila = fila;
        this.columna = columna;
    }

    /**
     * 
     * @param controlador 
     * @param Tabla 
     */
    getTipo(controlador: Controlador, Tabla: TablaSimbols): TipoEnum {
        let existe = Tabla.getSimbolo(this.id.toLowerCase());
        if (existe != null) {
            let local : TipoEnum
            if (existe.tipo.type == TipoEnum.VECTOR_BOOLEANO) {
                return local = TipoEnum.BOOLEANO
            }else if (existe.tipo.type == TipoEnum.VECTOR_CADENA) {
                return local = TipoEnum.CADENA
            }else if (existe.tipo.type == TipoEnum.VECTOR_CARACTER) {
                return local = TipoEnum.CARACTER
            }else if (existe.tipo.type == TipoEnum.VECTOR_DOUBLE){
                return local = TipoEnum.DOUBLE
            }else if (existe.tipo.type == TipoEnum.VECTOR_ENTERO) {
                return local = TipoEnum.ENTERO
            }
                return TipoEnum.null
            
        }else{
            let error = new Errores('Semantico', `No existe la variable ${this.id} en la tabla de simbolos.`, this.fila, this.columna);
            controlador.errores.push(error);
            controlador.append(`No existe la variable ${this.id} en la tabla de simbolos.`+ "Linea: " +this.fila );
            return TipoEnum.null;
        }
    }

    /**
     * 
     * @param controlador 
     * @param Tabla 
     */
    getValor(controlador: Controlador, Tabla: TablaSimbols) {
        let existente = Tabla.getSimbolo(this.id.toLowerCase());
        let index = this.cont.getValor(controlador, Tabla);

        if (existente != null) {
            let arreglo = new Array<any>()
            arreglo = Tabla.getSimbolo(this.id.toLowerCase())?.valor;

            if (this.cont.getTipo(controlador, Tabla) == TipoEnum.ENTERO) {
                if (arreglo.length-1 >= index) {
                    console.log(arreglo[index])
                    return arreglo[index]
                }else{
                    let error = new Errores('Semantico', `El indice del vector  ${this.id} solo puede ser entero!. `, this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append(`El indice del vector  ${this.id} solo puede ser entero!. `+ "Linea: " +this.fila );
                    return null;
                }
            }else{
                let error = new Errores('Semantico', `El indice del vector  ${this.id} solo puede ser entero!. `, this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append(`El indice del vector  ${this.id} solo puede ser entero!. `+ "Linea: " +this.fila );
                return null;
            }
        }else{
            let error = new Errores('Semantico', `No existe la variable ${this.id} en la tabla de simbolos.`, this.fila, this.columna);
            controlador.errores.push(error);
            controlador.append(`No existe la variable ${this.id} en la tabla de simbolos.`+ "Linea: " +this.fila );
            return null;
        }
    }

    /**
     * 
     */
    recorrer(): Node {
        let padre = new Node("Identificador Vector", "");
        let hijo = new Node("Expresion", "");

        padre.AddHijo(new Node(this.id.toString(), ""));
        padre.AddHijo(new Node("[", ""));
        hijo.AddHijo(this.cont.recorrer())
        padre.AddHijo(hijo)
        padre.AddHijo(new Node("]", ""));
        return padre
    }

    
}