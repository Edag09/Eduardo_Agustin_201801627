import * as Sintax from '../Analizadores/Prueba'
import Controlador from './Controlador'
import { TablaSimbols } from './Tabla_de_Simbolos/TablaSimbols'
import Node from './ArbolSintactico/NodeAST'
import { GraphSimbol } from './Tabla_de_Simbolos/GraphSimbol'


/**
 * @class analiza toda la entrada
 */

export class Analisis{

    public recorrer(input: any):any{
        try {
            let AST = Sintax.parse(input);
            let controlador = new Controlador();
            let tablaGlobal = new TablaSimbols(null);

            AST.ejecutar(controlador, tablaGlobal)

            let nodeAst = AST.recorrer();

            return nodeAst;
            
        } catch (error) {
            
        }
    }

    public ejecutar(input: any):any{
        let AST = Sintax.parse(input);
        let controlador = new Controlador();
        let tablaGlobal = new TablaSimbols(null);
        
        AST.ejecutar(controlador, tablaGlobal);

        controlador.ListaSimbolos.push(new GraphSimbol(tablaGlobal, "Global"));
        let tshtml = controlador.GraphTabla(controlador);

        let erroreshtml = controlador.GraphError();

        let retornar = {"Errores " : erroreshtml, "TablaSimbolos" : tshtml, "Consola" : controlador.consola}
        return retornar;
    }

}
