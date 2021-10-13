export default class Evaluar {
    public resultado : any;

    constructor(resultado: any){
        this.resultado = resultado
    }

    getResultado():number{
        return this.resultado
    }
}