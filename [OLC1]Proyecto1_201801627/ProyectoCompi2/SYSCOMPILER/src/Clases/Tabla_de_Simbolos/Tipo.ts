/**
 * @enum Clase enumerad de los tipos
 */

export enum TipoEnum{
    ENTERO,
    DOUBLE,
    BOOLEANO,
    CARACTER,
    CADENA,
    VOID,
    VECTOR_ENTERO,
    VECTOR_DOUBLE,
    VECTOR_BOOLEANO,
    VECTOR_CARACTER,
    VECTOR_CADENA,
    null
}

/**
 * @class Es para llevar el control de los tipos en los sibolos
 */

export default class Tipo{
    public type : TipoEnum;
    public tipos : string;

    constructor( tipos : string){
        this.tipos = tipos
        this.type = this.getType(tipos);
    }

    getType(tipos: string): TipoEnum{
        if(tipos == 'ENTERO'){
            return TipoEnum.ENTERO;

        }else if( tipos == 'CADENA'){
            return TipoEnum.CADENA;

        }else if( tipos == 'DOUBLE'){
            return TipoEnum.DOUBLE;

        }else if( tipos == 'BOOLEAN'){
            return TipoEnum.BOOLEANO;

        }else if( tipos == 'VOID'){
            return TipoEnum.VOID;

        }else if( tipos == 'CARACTER'){
            return TipoEnum.CARACTER;
        }
        else if( tipos == 'VECTOR_ENTERO'){
            return TipoEnum.VECTOR_ENTERO;

        }else if( tipos == 'VECTOR_CADENA'){
            return TipoEnum.VECTOR_CADENA;

        }else if( tipos == 'VECTOR_DOUBLE'){
            return TipoEnum.VECTOR_DOUBLE;

        }else if( tipos == 'VECTOR_BOOLEAN'){
            return TipoEnum.VECTOR_BOOLEANO;

        }else if( tipos == 'VECTOR_CARACTER'){
            return TipoEnum.VECTOR_CARACTER;
        }
        return TipoEnum.null;
    }

    getTipos():string{
        return this.tipos;
    }

}