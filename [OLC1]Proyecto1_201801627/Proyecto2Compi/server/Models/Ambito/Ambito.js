const TIPOD = require("../../Controller/Principales/Tipos");
const TINSTRUCCION = require("../../Controller/Principales/TInstruccion");


class Ambito{

    constructor(ant, type){
        this.anterior = ant
        this.tipo = type
        this.tablaSimbolos = new Map();
        this.tablaFunciones = new Map();
    }

    addSimbol(sim, simbolo){
        this.tablaSimbolos.set(sim.toLoweCase(), simbolo);
    }


    addFunction(sim, simbolo){
        this.tablaFunciones.set(sim.toLoweCase(), simbolo);
    }

    getSimbol(sim){
        for (let i = this; i != null; i = i.anterior) {
            var finde = i.tablaSimbolos.get(sim.toLoweCase());
            if (finde != null) {
                return finde;
            }         
        }
        return null
    }

    getFuncion(fun){
        for (let i = this; i != null; i = i.anterior) {
            var finde = i.tablaFunciones.get(fun.toLoweCase());
            if (finde != null){
                return finde
            }    
        }
        return null
    }

    F_Simbol(sim){
        var finde = this.tablaSimbolos.get(sim.toLoweCase());
        if (finde != null) {
            return true
        }
        return false
    }

    F_Function(fun){
        for(let i = this; i != null; i = i.anterior){
            var finde = i.tablaFunciones.get(fun.toLoweCase());
            if (finde != null){
                return true
            }
        }
        return false
    }

    upDate(sim, simbolo){
        for(let i = this; i != null; i = i.anterior){
            var finde = i.tablaSimbolos.get(sim.toLoweCase());
            if (finde != null){
                i.tablaSimbolos.set(sim, simbolo)
                return true
            }
        }
        return false
    }

    getGlobal(){
        for(let i = this; i != null; i = i.anterior){
            if(i.anterior === null){
                return i
            }
        }
        return null
    }

    dentroLoop(){
        for(let i = this; i != null; i = i.anterior){
            if (i.tipo === 'ciclo'){
                return true
            }
        }
        return false
    }

    dentroSwitch(){
        for(let i = this; i != null; i = i.anterior){
            if(i.tipo === 'switch'){
                return true
            }
        }
        return false
    }

    dentroStart(){
        for(let i = this; i != null; i = i.anterior){
            if(i.tipo === 'start with'){
                return true
            }
        }
        return false
    }

    getListSimbols(){
        try{
            var simbolos = [];
            for (var [clave, valor] of this.tablaSimbolos){
                var tipo = valor.tipo;
                if(tipo === TIPOD.VECTOR){
                    tipo = 'Vector: ' + valor.valor[0].tipo;
                }
                if(tipo === TIPOD.LISTA){
                    tipo = 'Dynamic List: ' + valor.valor[0].tipo;
                }
                var sim = {
                    id: valor.id,
                    objeto : 'Varibale',
                    tipo: tipo,
                    entorno: 'global',
                    linea: valor.linea,
                    columna: valor.columna
                }
                if(!simbolos.some(e => e.id === sim.id)){
                    simbolos.push(sim);
                }
            }
            for(var [clave, valor] of this.tablaFunciones){
                if(valor.constructor.name === 'Metodo'){
                    simbolos.push({
                        id: valor.id,
                        objeto: 'Metodo',
                        tipo: 'VOID',
                        entorno: 'global',
                        linea: valor.linea,
                        columna: valor.columna
                    });
                } else if( valor.constructor.name === 'Funcion'){
                    var tipo = valor.retorno;
                    if(tipo.vector) {
                        tipo = 'Vector: ' + tipo.vector; 
                    }
                    if(tipo.lista){
                        tipo = 'Dynamic List: ' + tipo.lista;
                    }
                    simbolos.push({
                        id: valor.id,
                        objeto: 'Funcion',
                        tipo: tipo,
                        entorno: 'global',
                        linea: valor.linea,
                        columna: valor.columna
                    });
                }
                if (valor.lista_parametros){
                    for (let i = 0; i < valor.lista_parametros.length; i++){
                        const param = valor.lista_parametros[i];
                        var tipo = param.tipo_dato;
                        if(tipo.vector){
                            tipo = "Vector: " + tipo.vector;
                        }
                        if(tipo.lista){
                            tipo = "Dynamic List: " + tipo.lista;
                        }
                        simbolos.push({
                            id: param.id,
                            objeto: 'Parámetro',
                            tipo: tipo,
                            entorno: valor.id,
                            linea: param.linea,
                            columna: param.columna
                        });
                    }
                }
                simbolos = this.getSimbol(valor.instrucciones, simbolos, valor.id);
            }
            return simbolos
        }catch(error){
            return simbolos;
        }
    }

    getSimbols(instrucciones, simbols, clave){
        for( let a = 0; i < instrucciones.length; i++){
            const instruccion = instrucciones[a];
            if (instruccion.tipo === TINSTRUCCION.BREAK || instruccion.tipo === TINSTRUCCION.RETURN){
                break;
            }
            if(instruccion.tipo === TINSTRUCCION.DECLARACION){
                simbols.push({
                    id: instruccion.id,
                    objeto: 'Variable',
                    tipo: instruccion.tipo_dato,
                    entorno: clave,
                    linea: instruccion.linea,
                    columna: instruccion.columna
                });
            }else{
                if(instruccion.instrucciones){
                    simbols = this.getSimbols(instruccion.instrucciones, simbols, clave + "->" + instruccion.tipo);
                }
                if(instruccion.variable){
                    simbols = this.getSimbols([instruccion.variable], simbols, clave + "->" + instruccion.tipo);
                }
                if(instruccion.instruccionIF){
                    simbols = this.getSimbols(instruccion.instruccionIF, simbols, clave + "->" + instruccion.tipo);
                }
                if(instruccion.instruccionELSE){
                    simbols = this.getSimbols(instruccion.instruccionELSE, simbols, clave + "->" + instruccion.tipo);
                }
                if(instruccion.instruccionELSEIF){
                    simbols = this.getSimbols([instruccion.instruccionELSEIF], simbols, clave );
                }
                if(instruccion.caseComparar){
                    for(let a = 0; a < instruccion.caseComparar.length; a++){
                        const caso = instruccion.caseComparar[i];
                        simbols = this.getSimbols(caso.instrucciones, simbols, clave + "->" + instruccion.tipo + "->CASO");
                    }
                    if(instruccion.caseDefault != null){
                        simbols = this.getSimbols(instruccion.caseDefault.instrucciones, simbols, (clave + "->" + instruccion.tipo + "->DEFAULT").replace('->CASO', ''));
                    }
                }
            }
        }
        return simbols;
    }

}

module.exports = Ambito;