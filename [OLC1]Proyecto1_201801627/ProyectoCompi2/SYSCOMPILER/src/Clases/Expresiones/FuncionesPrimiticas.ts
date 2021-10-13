import Errores from "../ArbolSintactico/Errores";
import Node from "../ArbolSintactico/NodeAST";
import Controlador from "../Controlador";
import { Expresiones } from "../Interfaces/Expresiones";
import { TablaSimbols } from "../Tabla_de_Simbolos/TablaSimbols";
import { TipoEnum }  from "../Tabla_de_Simbolos/Tipo";


export default class FuncionesPimiticas implements Expresiones{

    public selector: number;
    public valor : Expresiones; 
    public tipo : TipoEnum; 
    
    public fila : number;
    public columna : number;

    /**
     * @constructor 
     * @param selector 
     * @param valor 
     * @param tipo 
     * @param fila 
     * @param columna 
     */

    constructor(selector:number, valor:any, tipo:TipoEnum, fila:number, columna:number){
        this.selector = selector;
        this.valor = valor;
        this.tipo = tipo;
        this.fila = fila;
        this.columna = columna;
    }

    /**
     * 
     * @param controlador 
     * @param tabla 
     * @returns 
     */

    getTipo(controlador:Controlador, tabla:TablaSimbols):TipoEnum{
        return this.tipo;
    }

    /**
     * 
     * @param controlador 
     * @param tabla 
     * @returns 
     */

    getValor(controlador: Controlador, tabla: TablaSimbols):any{
        let valor = this.valor.getValor(controlador, tabla)
        let tipo = this.valor.getTipo(controlador, tabla)

        if(this.selector == 0){ //toLower
            if (typeof valor === 'string') {
                this.tipo = TipoEnum.CADENA
                return valor.toLowerCase()
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 1){//toUpper
            if (typeof valor === 'string') {
                this.tipo = TipoEnum.CADENA
                return valor.toUpperCase()
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 2){//int
            if (typeof valor === 'number') {
                this.tipo = TipoEnum.ENTERO
                return Math.trunc(valor)
            }else if (typeof valor === 'string'){
                if (tipo == TipoEnum.CARACTER) {
                    this.tipo = TipoEnum.ENTERO
                    return valor.charCodeAt(0)
                }else{
                    let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                    return null
                }
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 3){//double   
            if (typeof valor === 'number') {
                this.tipo = TipoEnum.DOUBLE
                return valor
            }else if(typeof valor === 'string'){
                if (tipo == TipoEnum.CARACTER) {
                    this.tipo = TipoEnum.DOUBLE
                    return valor.charCodeAt(0)
                }else{
                    let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                    return null
                }
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 4){//string
            if (typeof valor === 'number') {
                this.tipo = TipoEnum.CADENA
                return valor+""
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 5){//char
            if (typeof valor === 'number') {
                if (valor == TipoEnum.ENTERO) {
                    this.tipo = TipoEnum.CARACTER
                    return String.fromCharCode(valor)
                }else{
                    let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                    return null
                }
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 6){//lenght
            let vLenght : boolean = false
            let validar : boolean = false
            this.tipo = TipoEnum.ENTERO
            if (tipo == TipoEnum.VECTOR_BOOLEANO){
                vLenght = true
            }else if(tipo == TipoEnum.VECTOR_CADENA){
                vLenght = true
            }else if(tipo == TipoEnum.VECTOR_CARACTER){
                vLenght = true
            }else if(tipo == TipoEnum.VECTOR_DOUBLE){
                vLenght = true
            }else if(tipo == TipoEnum.VECTOR_ENTERO){
                vLenght = true
            }else if(tipo == TipoEnum.CADENA){
                validar = true
            }

            if(vLenght){
                let valorVector = Array<any>()
                valorVector = valor
                return valorVector.length
            }else if (validar){
                if (typeof valor == 'string') {
                    return valor.length
                }else{
                    let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                    controlador.errores.push(error);
                    controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                    return null
                }
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 7){//Truncate
            if (typeof valor === 'number') {
                this.tipo = TipoEnum.ENTERO
                return Math.trunc(valor)
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 8){//Round
            this.tipo = TipoEnum.ENTERO
            if (typeof valor === 'number') {
                this.tipo = TipoEnum.ENTERO
                return Math.round(valor);
            }else{
                let error = new Errores('Semantico','El tipo de la expresion no se ha podido convertir', this.fila, this.columna);
                controlador.errores.push(error);
                controlador.append('El tipo de la expresion no se ha podido convertir ' + ' en la linea: ' + this.fila);
                return null
            }
        }else if(this.selector == 9){//Typeof
            this.tipo = TipoEnum.CADENA
            if (tipo == TipoEnum.CADENA) {
                return "string"
            }else if(tipo == TipoEnum.ENTERO){
                return "int"
            }else if(tipo == TipoEnum.DOUBLE){
                return "double"
            }else if(tipo == TipoEnum.CARACTER){
                return "char"
            }else if(tipo == TipoEnum.BOOLEANO){
                return "boolean"
            }else if(tipo == TipoEnum.VECTOR_ENTERO){
                return "VectorEntero"
            }else if(tipo == TipoEnum.VECTOR_CADENA){
                return "VectorCadena"
            }else if(tipo == TipoEnum.VECTOR_DOUBLE){
                return "VectorDouble"
            }else if(tipo == TipoEnum.VECTOR_CARACTER){
                return "VectorCaracter"
            }else if(tipo == TipoEnum.VECTOR_BOOLEANO){
                return "VectorBolean"
            }
        }else if(this.selector == 10){//toString
            this.tipo = TipoEnum.CADENA
            if (tipo == TipoEnum.BOOLEANO) {
                if (valor == true) {
                    return "true";
                }
                return "false";
            }else{
                return valor+""
            }
        }
    }

    convertir(num : number){
        return num
        .toString()         //numero a string
        .split('')          //string a array de caracteres
        .map(Number)        //paseo de caracter a numeros
        .map(n => (n || 10) + 64)   //char
        .map(c => String.fromCharCode(c))   // char a string
        .join('');          //unir valores
    }

    recorrer():Node{
        let padre = new Node("Identificador", "");
        padre.AddHijo(new Node(this.valor.toString(), ""));
        return padre;
    }

}