import { TablaSimbols } from "./TablaSimbols";

export class GraphSimbol{
    public TablaSimbols : TablaSimbols;
    public entorno : string;

    constructor(Tabla : any , tipo : any){
        this.TablaSimbols = Tabla;
        this.entorno = tipo
    }
}