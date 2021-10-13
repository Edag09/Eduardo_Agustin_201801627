import Simbolos from "./Simbolos";

export class TablaSimbols{

    public table : TablaSimbols;
    public tabla : Map<string, Simbolos>;

    /**
     * @constructor se crea una nueva instancia
     * @param table indica quien es la tabla anterior
     */

    constructor(table : any){
        this.table = table;
        this.tabla = new Map<string, Simbolos>();
    }

    agregar(id : string, simbol : Simbolos){
        this.tabla.set(id.toLowerCase(), simbol); // se pasa todo a minusculas
    } 

    eliminar(id : string){
        this.tabla.delete(id.toLowerCase())
    }

    validar(id: string):boolean{
        let tablita : TablaSimbols = this;

        while (tablita != null) {
            let existe = tablita.tabla.get(id);
            if (existe != null) {
                return true;
            }
            tablita = tablita.table;
        }
        return false;
    }

    ValidarActual(id: string): boolean{
        let tablita : TablaSimbols = this;

        let existe = tablita.tabla.get(id);
        if (existe != null) {
            return true;
        }
        return false;
    }

    getSimbolo(id: string){
        let tablita : TablaSimbols = this;
        while (tablita != null) {
            let existente = tablita.tabla.get(id);
            if (existente != null) {
                return existente;
            }
            tablita = tablita.table;
        }
        return null;
    }
}