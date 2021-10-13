import Errores from "./ArbolSintactico/Errores";
import Simbolos from "./Tabla_de_Simbolos/Simbolos";
import { TablaSimbols } from "./Tabla_de_Simbolos/TablaSimbols";
import { GraphSimbol } from "./Tabla_de_Simbolos/GraphSimbol";

/**
 * @class Controla el programa
 */

export default class Controlador{
    public errores : Array<Errores>;
    public consola : string;
    public ListaSimbolos : Array<GraphSimbol>;

    constructor(){
        this.ListaSimbolos = new Array<GraphSimbol>();
        this.errores = new Array<Errores>();
        this.consola = "";
    }

    public append(consola : string){
        this.consola += consola + '\n';
    }

    /**
     * @function graphTabla grafica la tabla de simbolos
     * @param controlador controla el programa
     * @param tablasimbolos toma los simbolos de la tabla
     * @retuns retorna el cuerdo de la tabla
     */

    GraphTabla(controlador: Controlador):string{
        var graph = "<thead class=\"black white-text\"><tr><td colspan=\"6\">Tabla de Simbolos </td></tr><tr><th>Rol</th><th>Nombre</th><th>Tipo</th><th>Ambito</th><th>Valor</th><th>Parametros</th></tr></thead>";
        let cont : number = 0;
        
        for (let tablasimbolos of this.ListaSimbolos) {
            for (let sim of tablasimbolos.TablaSimbols.tabla.values()) {
                console.log('Simbolo');
                graph += "<tr mdbTableCol class=\"grey lighten-1 black-text\"><th scope=\"row\">" +  this.getRol(sim) + "</th><td>" + sim.identificador + 
                "</td><td>" + this.getType(sim) +"</td>"  +
                "</td><td>" + tablasimbolos.entorno +
                "</td><td>" + this.getValue(sim) + 
                "</td><td>" + this.getParametro(sim) +"</td>" +  "</tr>";
            }
        }
        return graph;
    }

    addTable(tabla : TablaSimbols, ambito : string){
        this.ListaSimbolos.push(new GraphSimbol(tabla, ambito));
    }

    GraphError(){
        var graphError = "<thead class=\"black white-text\"><tr><td colspan=\"6\">Tabla de Errores </td></tr><tr><th>#</th><th>Tipo De Error</th><th>Descripcion</th><th>Linea</th><th>Columna</th></tr></thead>";
        let contador : number = 0;
        for (const sim of this.errores) {
            console.log('Simbolo');
            graphError += "<tr mdbTableCol class=\"grey lighten-1 black-text\">"+
            "<td>" +  contador + "</td><th scope=\"row\">" + sim.tipo + 
            "</th><td>" + sim.descripcion +
            "</td><td>" + sim.fila +                 
            "</td><td>" + sim.columna +"</td>" +  "</tr>";
            contador++;
        }
        return graphError;
    }

    /**
     * @function getValue obtiene el valor del simbolo
     * @param sim simbolo
     * @returns devuelve el simbolo
     */

    getValue(sim : Simbolos):string{
        if(sim.valor != null){
            return sim.valor.toString();
        }else{
            return '...';
        }
    }

    /**
     * @function getType obtiene el tipo
     * @param sim simbolo
     * @returns retorna el simbolo
     */

    getType(sim: Simbolos):string{
        return sim.tipo.tipos.toLowerCase();
    }

    /**
     * 
     * @param sim 
     */

    getRol(sim : Simbolos):string{
        let rol : string = "";
        switch(sim.simbolo){
            case 1:
                rol = "Variable";
                break
            case 2:
                rol = "Funcion";
                break
            case 3:
                rol = "Metodo";
                break
            case 4:
                rol = "Vector";
                break
            case 5:
                rol = "Lista";
                break;
            case 6:
                rol = "Parametro";
                break
        }
        return rol;
    }
    

    /**
     * @function getAmbito indicamos el ambito
     * @returns muestra el ambito
     */

    getAmbito():string{
        return 'global';
    }

    /**
     * @function getParametro obtiene los parametros
     * @param sim simbolo
     * @returns retorna la cantidad de parametros
     */

    getParametro(sim : Simbolos){
        if (sim.parametros != undefined) {
            return sim.parametros.length
        }else{
            return "...";
        }
    }

}