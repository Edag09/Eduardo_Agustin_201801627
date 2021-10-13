import Tipo from "./Tipo";

/**
 * @class Se definen los simbolos del lenguaje (variables, funciones / metodos)
 */

export default class Simbolos{

    public simbolo : number;
    
    // ---> Variables <---
    public tipo : Tipo;
    public identificador : string;
    public valor : any;

    // ---> Funcion/Metodo <---
    public parametros : Array<Simbolos>;
    public metodo : boolean;

    /**
     * @constructor
     * @param sim indita el tipo del simbolo que entra
     * @param tipo indica el tipo de la varibale
     * @param identificador indica el nombre de la varibale
     * @param valor valor de la variable 
     * @param parametros indica la lista de los parametros que pueda pasar
     */

    constructor(simbolo : number, tipo : Tipo, identificador : string, valor : any, parametros : Array<Simbolos>, metodo : boolean){
        this.simbolo = simbolo;
        /**
         * Simbolos que pueden venir
         * 1 - Variable
         * 2 - Funcion
         * 3 - Metodo
         * 4 - Vector
         * 5 - Lista
         * 6 - parametros
         */
        this.tipo = tipo
        this.identificador = identificador;
        this.parametros = parametros;
        this.valor = valor;
        this.metodo = metodo;
    }

    setValue(valor : any): void{
        this.valor = valor;
    }
}