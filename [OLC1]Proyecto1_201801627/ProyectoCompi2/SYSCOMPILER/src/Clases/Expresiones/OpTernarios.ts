import Errores from "../ArbolSintactico/Errores";
import Node from "../ArbolSintactico/NodeAST";
import Controlador from "../Controlador";
import { Expresiones } from "../Interfaces/Expresiones";
import { TablaSimbols } from "../Tabla_de_Simbolos/TablaSimbols";
import { TipoEnum }  from "../Tabla_de_Simbolos/Tipo";


export default class OpTernarios implements Expresiones{

    public condicion : Expresiones;
    public verdad : Expresiones;
    public falso : Expresiones;
    public fila : number;
    public columna : number;

    /**
     * 
     * @param condicion 
     * @param verdad 
     * @param falso 
     * @param fila 
     * @param columuna 
     */

    constructor(condicion:any, verdad:any, falso:any, fila:number, columuna:any){
        this.condicion = condicion
        this.verdad = verdad
        this.falso = falso
        this.fila = fila
        this.columna = columuna
    }

    
    /**
     * 
     * @param controlador 
     * @param Tabla 
     */

    getTipo(controlador: Controlador, Tabla: TablaSimbols): TipoEnum {
        let varCondicion = this.condicion.getValor(controlador, Tabla);

        if (typeof varCondicion == 'boolean') {
            return varCondicion ? this.verdad.getTipo(controlador, Tabla) : this.falso.getTipo(controlador, Tabla)
        }else{
            let error = new Errores('Semantico', `Error al obtener el tipo en la operacion ternaria, el valor no es buleano`, this.fila, this.columna);
            controlador.errores.push(error);
            controlador.append(`Error al obtener el tipo en la operacion ternaria, el valor no es buleano`+ "Linea: " +this.fila );
            return TipoEnum.null;
        }
    }

    getValor(controlador: Controlador, Tabla: TablaSimbols) {
        let varCondicion = this.condicion.getValor(controlador, Tabla);

        if (typeof varCondicion == 'boolean') {
            return varCondicion ? this.verdad.getValor(controlador, Tabla) : this.falso.getValor(controlador, Tabla)
        }else{
            let error = new Errores('Semantico', `Error al obtener el valor en la operacion ternaria, el valor no es buleano`, this.fila, this.columna);
            controlador.errores.push(error);
            controlador.append(`Error al obtener el valor en la operacion ternaria, el valor no es buleano`+ "Linea: " +this.fila );
            return null;
        }
    }
    recorrer(): Node {
        let padre = new Node("Ternario","");
        let HijoCondicion = new Node("condicion","");
        HijoCondicion.AddHijo(this.condicion.recorrer())
        padre.AddHijo(HijoCondicion);
        padre.AddHijo(new Node("?",""))
        padre.AddHijo(new Node(":","")) 
       return padre;
    }
    
}