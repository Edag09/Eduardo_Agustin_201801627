const TIPO_DATO = require("../Principales/Tipos");
const TIPO_INSTRUCCION = require("../Principales/TInstrucciones");
const TIPO_OPERACION = require("../Principales/TOperaciones");
const TIPO_VALOR = require("../Principales/TValores");

class Graph {
    constructor(_root) {
        this.grafo = '';
        this.root = _root;
        this.contador = 1;
    }

    getDot() {
        this.grafo = `digraph AST {
            graph[bgcolor=cadetblue]
            node [shape=egg style=filled color=forestgreen fontname= \"Ubuntu\" fontsize=\"14\"];
            edge[color=maroon penwidth=\"1.5\"];`
        this.InicioGrafo("RAÍZ", this.root);
        this.grafo += '}';
        return this.grafo;
    }

    InicioGrafo(RootAST, _down) {
        _down.forEach(inst => {
            this.InstruccionesGrafo(RootAST, inst);
        });
    }

    InstruccionesGrafo(_up, _instruccion) {
        if (_instruccion.tipo === TIPO_INSTRUCCION.PRINT) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"WRITE LINE\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.WriteGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"DECLARACIÓN\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.DeclaracionGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            if (_instruccion.posicion)
                this.grafo += hijoAST + '[label = \"MODIFICACIÓN:\n' + _instruccion.tipo_dato + '\"];\n';
            else
                this.grafo += hijoAST + '[label = \"ASIGNACIÓN\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.AsignacionGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.WHILE) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"CICLO WHILE\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.WhileGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.DOWHILE) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"CICLO DO WHILE\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.do_WhileGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.FOR) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"CICLO FOR\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.ForGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.IF) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"SENTENCIA IF\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.IfGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.IF_ELSE) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"SENTENCIA IF ELSE\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.IfElseGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.ELSE_IF) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"SENTENCIA ELSE IF\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.ElseIfGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.SWITCH) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"SENTENCIA SWITCH\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.SwitchGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.LLAMADA) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"LLAMADA\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.LlamadaGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.BREAK) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"SENTENCIA BREAK\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.CONTINUE) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"SENTENCIA CONTINUE\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.RETURN) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"SENTENCIA RETURN\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.ReturnGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.NUEVO_METODO) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"DECLARACIÓN MÉTODO\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.MetodoGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.NUEVA_FUNCION) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"DECLARACIÓN FUNCIÓN\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.FuncionGrafo(hijoAST, _instruccion);
        }else if (_instruccion.tipo === TIPO_INSTRUCCION.START_WITH) {
            var hijoAST = 'Node' + this.contador;
            this.contador++;
            this.grafo += hijoAST + '[label = \"START WITH\"];\n';
            this.grafo += _up + '->' + hijoAST + ';\n';
            this.LlamadaGrafo(hijoAST, _instruccion);
        }
    }

    WriteGrafo(_up, _instruccion) {
        this.OperacionesGrafo(_up, _instruccion.expresion);
    }

    DeclaracionGrafo(_up, _instruccion) {
        var t1 = 'Node' + this.contador;
        this.contador++;
        this.grafo += t1 + '[label = \"TIPO\"];\n';
        var t2 = 'Node' + this.contador;
        this.contador++;
        var tipo = _instruccion.tipo_dato;
        if (_instruccion.tipo_dato1) {
            tipo = tipo + ':\n' + _instruccion.tipo_dato1;
        }
        this.grafo += t2 + '[label = \"' + tipo + '\"];\n';
        this.grafo += _up + '->' + t1 + '->' + t2 + ';\n';
        var Identificador1 = 'Node' + this.contador;
        this.contador++;
        this.grafo += Identificador1 + '[label = \"IDENTIFICADOR\"];\n';
        var identificador2 = 'Node' + this.contador;
        this.contador++;
        this.grafo += identificador2 + '[label = \"' + _instruccion.id + '\"];\n';
        this.grafo += _up + '->' + Identificador1 + '->' + identificador2 + ';\n';
        if (_instruccion.valor != null) {
            this.OperacionesGrafo(_up, _instruccion.valor);
        }
        if (_instruccion.valores != null) {
            var valoridentificador = 'Node' + this.contador;
            this.contador++;
            this.grafo += valoridentificador + '[label = \"VALORES\"];\n';
            this.grafo += _up + '->' + valoridentificador + ';\n';
            for (let i = 0; i < _instruccion.valores.length; i++) {
                const val = _instruccion.valores[i];
                this.OperacionesGrafo(valoridentificador, val);
            }
        }
    }

    AsignacionGrafo(_up, _instruccion) {
        var asignarID = 'Node' + this.contador;
        this.contador++;
        this.grafo += asignarID + '[label = \"IDENTIFICADOR\"];\n';
        var Asignarid2 = 'Node' + this.contador;
        this.contador++;
        this.grafo += Asignarid2 + '[label = \"' + _instruccion.id + '\"];\n';
        this.grafo += _up + '->' + asignarID + '->' + Asignarid2 + ';\n';
        if (_instruccion.posicion === null && _instruccion.tipo_dato === TIPO_DATO.LISTA) {
            var add = 'Node' + this.contador;
            this.contador++;
            this.grafo += add + '[label = \"ADD\"];\n';
            this.grafo += _up + '->' + add + ';\n';
            this.OperacionesGrafo(add, _instruccion.valor);
        }
        else if (_instruccion.posicion) {
            var pos = 'Node' + this.contador;
            this.contador++;
            this.grafo += pos + '[label = \"ÍNDICE\"];\n';
            this.grafo += _up + '->' + pos + ';\n';
            this.OperacionesGrafo(pos, _instruccion.posicion);
            this.OperacionesGrafo(_up, _instruccion.valor);
        }
        else
            this.OperacionesGrafo(_up, _instruccion.expresion);
    }

    WhileGrafo(_up, _instruccion) {
        var condicionWhile = 'Node' + this.contador;
        this.contador++;
        this.grafo += condicionWhile + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + condicionWhile + ';\n';
        this.OperacionesGrafo(condicionWhile, _instruccion.expresion);
        var instruccionWhile = 'Node' + this.contador;
        this.contador++;
        this.grafo += instruccionWhile + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += condicionWhile + '->' + instruccionWhile + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.InstruccionesGrafo(instruccionWhile, inst);
            }
        }
    }

    do_WhileGrafo(_up, _instruccion) {
        var doinstruccion = 'Node' + this.contador;
        this.contador++;
        this.grafo += doinstruccion + '[label = \"DO\"];\n';
        var doinstuccion2 = 'Node' + this.contador;
        this.contador++;
        this.grafo += doinstuccion2 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += _up + '->' + doinstruccion + '->' + doinstuccion2 + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.InstruccionesGrafo(doinstuccion2, inst);
            }
        }
        var dowhilegr = 'Node' + this.contador;
        this.contador++;
        this.grafo += dowhilegr + '[label = \"WHILE\"];\n';
        var dowhilecondicion = 'Node' + this.contador;
        this.contador++;
        this.grafo += dowhilecondicion + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + dowhilegr + '->' + dowhilecondicion + ';\n';
        this.grafo += doinstruccion + '->' + dowhilegr + ';\n';
        this.OperacionesGrafo(dowhilecondicion, _instruccion.expresion);
    }

    ForGrafo(_up, _instruccion) {
        this.InstruccionesGrafo(_up, _instruccion.variable);
        var Forcondicion = 'Node' + this.contador;
        this.contador++;
        this.grafo += Forcondicion + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + Forcondicion + ';\n';
        this.OperacionesGrafo(Forcondicion, _instruccion.expresion);
        var foractualizacion = 'Node' + this.contador;
        this.contador++;
        this.grafo += foractualizacion + '[label = \"ACTUALIZACIÓN\"];\n';
        this.grafo += _up + '->' + foractualizacion + ';\n';
        this.InstruccionesGrafo(foractualizacion, _instruccion.instrucciones.pop());
        var forinstuccion = 'Node' + this.contador;
        this.contador++;
        this.grafo += forinstuccion + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += _up + '->' + forinstuccion + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.InstruccionesGrafo(forinstuccion, inst);
            }
        }
    }

    IfGrafo(_up, _instruccion) {
        var ifcondicion = 'Node' + this.contador;
        this.contador++;
        this.grafo += ifcondicion + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + ifcondicion + ';\n';
        this.OperacionesGrafo(ifcondicion, _instruccion.expresion);
        var ifinstruccion = 'Node' + this.contador;
        this.contador++;
        this.grafo += ifinstruccion + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += ifcondicion + '->' + ifinstruccion + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.InstruccionesGrafo(ifinstruccion, inst);
            }
        }
    }

    IfElseGrafo(_up, _instruccion) {
        var ifelsecondicion = 'Node' + this.contador;
        this.contador++;
        this.grafo += ifelsecondicion + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + ifelsecondicion + ';\n';
        this.OperacionesGrafo(ifelsecondicion, _instruccion.expresion);
        var ifelseinstuccion = 'Node' + this.contador;
        this.contador++;
        this.grafo += ifelseinstuccion + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += ifelsecondicion + '->' + ifelseinstuccion + ';\n';
        if (_instruccion.instruccionesIF != null) {
            for (let i = 0; i < _instruccion.instruccionesIF.length; i++) {
                const inst = _instruccion.instruccionesIF[i];
                this.InstruccionesGrafo(ifelseinstuccion, inst);
            }
        }
        var elsebai = 'Node' + this.contador;
        this.contador++;
        this.grafo += elsebai + '[label = \"ELSE\"];\n';
        this.grafo += _up + '->' + elsebai + ';\n';
        var elseinstuccion = 'Node' + this.contador;
        this.contador++;
        this.grafo += elseinstuccion + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += elsebai + '->' + elseinstuccion + ';\n';
        if (_instruccion.instruccionesELSE != null) {
            for (let i = 0; i < _instruccion.instruccionesELSE.length; i++) {
                const inst = _instruccion.instruccionesELSE[i];
                this.InstruccionesGrafo(elseinstuccion, inst);
            }
        }
    }

    ElseIfGrafo(_up, _instruccion) {
        var elseifcondicion = 'Node' + this.contador;
        this.contador++;
        this.grafo += elseifcondicion + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + elseifcondicion + ';\n';
        this.OperacionesGrafo(elseifcondicion, _instruccion.expresion);
        var elseifinstuccion = 'Node' + this.contador;
        this.contador++;
        this.grafo += elseifinstuccion + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += elseifcondicion + '->' + elseifinstuccion + ';\n';
        if (_instruccion.instruccionesIF != null) {
            for (let i = 0; i < _instruccion.instruccionesIF.length; i++) {
                const inst = _instruccion.instruccionesIF[i];
                this.InstruccionesGrafo(elseifinstuccion, inst);
            }
        }
        if (_instruccion.instruccionesELSEIF) {
            this.InstruccionesGrafo(_up, _instruccion.instruccionesELSEIF);
        }
    }

    SwitchGrafo(_up, _instruccion) {
        var nintendoSwitch = 'Node' + this.contador;
        this.contador++;
        this.grafo += nintendoSwitch + '[label = \"EXPRESION EVALUAR\"];\n';
        this.grafo += _up + '->' + nintendoSwitch + ';\n';
        this.OperacionesGrafo(nintendoSwitch, _instruccion.expresionEvaluar);
        if (_instruccion.casosComparar != null) {
            for (let i = 0; i < _instruccion.casosComparar.length; i++) {
                const caso = _instruccion.casosComparar[i];
                var casonintendo = 'Node' + this.contador;
                this.contador++;
                this.grafo += casonintendo + '[label = \"CASO\"];\n';
                this.grafo += _up + '->' + casonintendo + ';\n';
                this.OperacionesGrafo(casonintendo, caso.expresion);
                if (caso.instrucciones != null) {
                    for (let i = 0; i < caso.instrucciones.length; i++) {
                        const inst = caso.instrucciones[i];
                        this.InstruccionesGrafo(casonintendo, inst);
                    }
                }
            }
        }
        if (_instruccion.casoDefault != null) {
            var defaultnintendo = 'Node' + this.contador;
            this.contador++;
            this.grafo += defaultnintendo + '[label = \"DEFAULT\"];\n';
            this.grafo += _up + '->' + defaultnintendo + ';\n';
            this.OperacionesGrafo(defaultnintendo, _instruccion.casoDefault.expresion);
            if (_instruccion.casoDefault.instrucciones != null) {
                for (let i = 0; i < _instruccion.casoDefault.instrucciones.length; i++) {
                    const inst = _instruccion.casoDefault.instrucciones[i];
                    this.InstruccionesGrafo(defaultnintendo, inst);
                }
            }
        }
    }

    LlamadaGrafo(_up, _instruccion) {
        var llamadadeemergenicababy = 'Node' + this.contador;
        this.contador++;
        this.grafo += llamadadeemergenicababy + '[label = \"NOMBRE\"];\n';
        this.grafo += _up + '->' + llamadadeemergenicababy + ';\n';
        var llamdainstuccion = 'Node' + this.contador;
        this.contador++;
        this.grafo += llamdainstuccion + '[label = \"' + _instruccion.nombre + '\"];\n';
        this.grafo += llamadadeemergenicababy + '->' + llamdainstuccion + ';\n';
        if (_instruccion.lista_valores != null) {
            var llamadaparametros = 'Node' + this.contador;
            this.contador++;
            this.grafo += llamadaparametros + '[label = \"PARAMETROS\"];\n';
            this.grafo += _up + '->' + llamadaparametros + ';\n';
            for (let i = 0; i < _instruccion.lista_valores.length; i++) {
                const param = _instruccion.lista_valores[i];
                this.OperacionesGrafo(llamadaparametros, param);
            }
        }
    }

    ReturnGrafo(_up, _instruccion) {
        if (_instruccion.expresion) {
            var vueltotortillas = 'Node' + this.contador;
            this.contador++;
            this.grafo += vueltotortillas + '[label = \"EXPRESION\"];\n';
            this.grafo += _up + '->' + vueltotortillas + ';\n';
            this.OperacionesGrafo(vueltotortillas, _instruccion.expresion);
        }
    }

    MetodoGrafo(_up, _instruccion) {
        var nombremetodo = 'Node' + this.contador;
        this.contador++;
        this.grafo += nombremetodo + '[label = \"NOMBRE\"];\n';
        this.grafo += _up + '->' + nombremetodo + ';\n';
        var metodos = 'Node' + this.contador;
        this.contador++;
        this.grafo += metodos + '[label = \"' + _instruccion.nombre + '\"];\n';
        this.grafo += nombremetodo + '->' + metodos + ';\n';
        if (_instruccion.lista_parametros != null) {
            var metodosparametros = 'Node' + this.contador;
            this.contador++;
            this.grafo += metodosparametros + '[label = \"PARAMETROS\"];\n';
            this.grafo += _up + '->' + metodosparametros + ';\n';
            for (let i = 0; i < _instruccion.lista_parametros.length; i++) {
                const param = _instruccion.lista_parametros[i];
                this.OperacionesGrafo(metodosparametros, param);
            }
        }
        if (_instruccion.instrucciones != null) {
            var metodoinstrucciones = 'Node' + this.contador;
            this.contador++;
            this.grafo += metodoinstrucciones + '[label = \"INSTRUCCIONES\"];\n';
            this.grafo += _up + '->' + metodoinstrucciones + ';\n';
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.InstruccionesGrafo(metodoinstrucciones, inst);
            }
        }
    }

    FuncionGrafo(_up, _instruccion) {
        var funcionretorno = 'Node' + this.contador;
        this.contador++;
        this.grafo += funcionretorno + '[label = \"TIPO DE RETORNO\"];\n';
        this.grafo += _up + '->' + funcionretorno + ';\n';
        this.OperacionesGrafo(funcionretorno, { tipo_dato: _instruccion.retorno });
        var funcionnombre = 'Node' + this.contador;
        this.contador++;
        this.grafo += funcionnombre + '[label = \"NOMBRE\"];\n';
        this.grafo += _up + '->' + funcionnombre + ';\n';
        var functione = 'Node' + this.contador;
        this.contador++;
        this.grafo += functione + '[label = \"' + _instruccion.nombre + '\"];\n';
        this.grafo += funcionnombre + '->' + functione + ';\n';
        if (_instruccion.lista_parametros != null) {
            var funcionparametros = 'Node' + this.contador;
            this.contador++;
            this.grafo += funcionparametros + '[label = \"PARAMETROS\"];\n';
            this.grafo += _up + '->' + funcionparametros + ';\n';
            for (let i = 0; i < _instruccion.lista_parametros.length; i++) {
                const param = _instruccion.lista_parametros[i];
                this.OperacionesGrafo(funcionparametros, param);
            }
        }
        if (_instruccion.instrucciones != null) {
            var funcitoninstrucciones = 'Node' + this.contador;
            this.contador++;
            this.grafo += funcitoninstrucciones + '[label = \"INSTRUCCIONES\"];\n';
            this.grafo += _up + '->' + funcitoninstrucciones + ';\n';
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.InstruccionesGrafo(funcitoninstrucciones, inst);
            }
        }
    }

    OperacionesGrafo(_up, _expresion) {
        if (_expresion === null) return;
        if (_expresion.tipo === TIPO_VALOR.DOBLE || _expresion.tipo === TIPO_VALOR.BOOLEANO || _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CARACTER || _expresion.tipo === TIPO_VALOR.ENTERO) {
            var opG = String(_expresion.valor).replace(/\"/gi, '\\\"');
            var tipo = _expresion.tipo;
            if (tipo.vector)
                tipo = "VECTOR: " + tipo.vector;
            if (tipo.lista)
                tipo = "DYNAMIC LIST: " + tipo.lista;
            var listavector = 'Node' + this.contador;
            this.contador++;
            this.grafo += listavector + '[label = \"' + tipo + '\"];\n';
            var listavector2 = 'Node' + this.contador;
            this.contador++;
            this.grafo += listavector2 + '[label = \"' + opG + '\"];\n';
            this.grafo += _up + '->' + listavector + '->' + listavector2 + ';\n';
        }else if (_expresion.tipo === TIPO_OPERACION.SUMA || _expresion.tipo === TIPO_OPERACION.RESTA || _expresion.tipo === TIPO_OPERACION.MULTIPLICACION || _expresion.tipo === TIPO_OPERACION.DIVISION || _expresion.tipo === TIPO_OPERACION.POTENCIA || _expresion.tipo === TIPO_OPERACION.MODULO || _expresion.tipo === TIPO_OPERACION.NEGACION || _expresion.tipo === TIPO_OPERACION.IGUALIGUAL || _expresion.tipo === TIPO_OPERACION.DIFERENTE || _expresion.tipo === TIPO_OPERACION.MENOR || _expresion.tipo === TIPO_OPERACION.MENORIGUAL || _expresion.tipo === TIPO_OPERACION.MAYOR || _expresion.tipo === TIPO_OPERACION.MAYORIGUAL || _expresion.tipo === TIPO_OPERACION.OR || _expresion.tipo === TIPO_OPERACION.AND || _expresion.tipo === TIPO_OPERACION.NOT) {
            var tipo = _expresion.tipo;
            if (tipo.vector)
                tipo = "VECTOR: " + tipo.vector;
            if (tipo.lista)
                tipo = "LISTA: " + tipo.lista;
            var listveco = 'Node' + this.contador;
            this.contador++;
            this.grafo += listveco + '[label = \"' + tipo + '\"];\n';
            this.grafo += _up + '->' + listveco + ';\n';
            this.OperacionesGrafo(listveco, _expresion.opIzq);
            if (_expresion.tipo !== TIPO_OPERACION.NOT && _expresion.tipo !== TIPO_OPERACION.NEGACION)
                this.OperacionesGrafo(listveco, _expresion.opDer);
        }else if (_expresion.tipo === TIPO_INSTRUCCION.TERNARIO) {
            var opternario = 'Node' + this.contador;
            this.contador++;
            this.grafo += opternario + '[label = \"' + _expresion.tipo + '\"];\n';
            this.grafo += _up + '->' + opternario + ';\n';
            var ternariocondicion = 'Node' + this.contador;
            this.contador++;
            this.grafo += ternariocondicion + '[label = \"CONDICION\"];\n';
            this.grafo += opternario + '->' + ternariocondicion + ';\n';
            this.OperacionesGrafo(ternariocondicion, _expresion.condicion);
            var expresionternario = 'Node' + this.contador;
            this.contador++;
            this.grafo += expresionternario + '[label = \"EXPRESIÓN A\"];\n';
            this.grafo += opternario + '->' + expresionternario + ';\n';
            this.OperacionesGrafo(expresionternario, _expresion.expresionA);
            var expresionternarioB = 'Node' + this.contador;
            this.contador++;
            this.grafo += expresionternarioB + '[label = \"EXPRESIÓN B\"];\n';
            this.grafo += opternario + '->' + expresionternarioB + ';\n';
            this.OperacionesGrafo(expresionternarioB, _expresion.expresionA);
        }else if (_expresion.tipo === TIPO_INSTRUCCION.CASTEO) {
            var castear = 'Node' + this.contador;
            this.contador++;
            this.grafo += castear + '[label = \"' + _expresion.tipo + '\"];\n';
            this.grafo += _up + '->' + castear + ';\n';
            var casteoidentidad1 = 'Node' + this.contador;
            this.contador++;
            this.grafo += casteoidentidad1 + '[label = \"NUEVO TIPO\"];\n';
            this.grafo += castear + '->' + casteoidentidad1 + ';\n';
            var casteoidentidad2 = 'Node' + this.contador;
            this.contador++;
            this.grafo += casteoidentidad2 + '[label = \"' + _expresion.nuevoTipo + '\"];\n';
            this.grafo += casteoidentidad1 + '->' + casteoidentidad2 + ';\n';
            var casteoexpresion = 'Node' + this.contador;
            this.contador++;
            this.grafo += casteoexpresion + '[label = \"EXPRESIÓN\"];\n';
            this.grafo += castear + '->' + casteoexpresion + ';\n';
            this.OperacionesGrafo(casteoexpresion, _expresion.expresion);
        }else if (_expresion.tipo === TIPO_INSTRUCCION.ACCESO) {
            switch (_expresion.tipo_dato) {
                case TIPO_DATO.VECTOR:
                    var vectorcito = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += vectorcito + '[label = \"ACCESO VECTOR\"];\n';
                    this.grafo += _up + '->' + vectorcito + ';\n';
                    var idvectorciot = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += idvectorciot + '[label = \"IDENTIFICADOR\"];\n';
                    this.grafo += vectorcito + '->' + idvectorciot + ';\n';
                    var expresionvectorcito = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += expresionvectorcito + '[label = \"' + _expresion.id + '\"];\n';
                    this.grafo += idvectorciot + '->' + expresionvectorcito + ';\n';
                    var posicionvecotrcito = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += posicionvecotrcito + '[label = \"POSICIÓN\"];\n';
                    this.grafo += vectorcito + '->' + posicionvecotrcito + ';\n';
                    this.OperacionesGrafo(posicionvecotrcito, _expresion.posicion);
                    break;
                case TIPO_DATO.LISTA:
                    var listita = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += listita + '[label = \"ACCESO LISTA\"];\n';
                    this.grafo += _up + '->' + listita + ';\n';
                    var listitaacceso = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += listitaacceso + '[label = \"IDENTIFICADOR\"];\n';
                    this.grafo += listita + '->' + listitaacceso + ';\n';
                    var listaitaID = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += listaitaID + '[label = \"' + _expresion.id + '\"];\n';
                    this.grafo += listitaacceso + '->' + listaitaID + ';\n';
                    var posicionlistita = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += posicionlistita + '[label = \"POSICIÓN\"];\n';
                    this.grafo += listita + '->' + posicionlistita + ';\n';
                    this.OperacionesGrafo(posicionlistita, _expresion.posicion);
                    break;
            }
        }else if (_expresion.tipo === TIPO_INSTRUCCION.TO_LOWER || _expresion.tipo === TIPO_INSTRUCCION.TO_UPPER || _expresion.tipo === TIPO_INSTRUCCION.LENGTH || _expresion.tipo === TIPO_INSTRUCCION.TRUNCATE || _expresion.tipo === TIPO_INSTRUCCION.ROUND || _expresion.tipo === TIPO_INSTRUCCION.TYPEOF || _expresion.tipo === TIPO_INSTRUCCION.TOSTRING || _expresion.tipo === TIPO_INSTRUCCION.TOCHARLIST) {
            var nativo1 = 'Node' + this.contador;
            this.contador++;
            this.grafo += nativo1 + '[label = \"' + _expresion.tipo + '\"];\n';
            this.grafo += _up + '->' + nativo1 + ';\n';
            var nativo2 = 'Node' + this.contador;
            this.contador++;
            this.grafo += nativo2 + '[label = \"VALOR\"];\n';
            this.grafo += nativo1 + '->' + nativo2 + ';\n';
            this.OperacionesGrafo(nativo2, _expresion.expresion);
        }else if (_expresion.tipo === TIPO_INSTRUCCION.LLAMADA) {
            var llamadababydeemergencia = 'Node' + this.contador;
            this.contador++;
            this.grafo += llamadababydeemergencia + '[label = \"LLAMADA A FUNCIÓN\"];\n';
            this.grafo += _up + '->' + llamadababydeemergencia + ';\n';
            var llamdanombre = 'Node' + this.contador;
            this.contador++;
            this.grafo += llamdanombre + '[label = \"NOMBRE\"];\n';
            this.grafo += llamadababydeemergencia + '->' + llamdanombre + ';\n';
            var llamdaexpresion = 'Node' + this.contador;
            this.contador++;
            this.grafo += llamdaexpresion + '[label = \"' + _expresion.nombre + '\"];\n';
            this.grafo += llamdanombre + '->' + llamdaexpresion + ';\n';
            if (_expresion.lista_valores != null) {
                var parametrosllamada = 'Node' + this.contador;
                this.contador++;
                this.grafo += parametrosllamada + '[label = \"PARAMETROS\"];\n';
                this.grafo += llamadababydeemergencia + '->' + parametrosllamada + ';\n';
                for (let i = 0; i < _expresion.lista_valores.length; i++) {
                    const param = _expresion.lista_valores[i];
                    this.OperacionesGrafo(parametrosllamada, param);
                }
            }
        }else if (_expresion.tipo_dato) {
            if (_expresion.tipo_dato === TIPO_DATO.DOBLE || _expresion.tipo_dato === TIPO_DATO.BOOLEANO || _expresion.tipo_dato === TIPO_DATO.CADENA || _expresion.tipo_dato === TIPO_DATO.CARACTER || _expresion.tipo_dato === TIPO_DATO.ENTERO || _expresion.tipo_dato.vector || _expresion.tipo_dato.lista) {
                var tipo = _expresion.tipo_dato;
                if (tipo.vector)
                    tipo = "VECTOR: " + tipo.vector;
                if (tipo.lista)
                    tipo = "LISTA: " + tipo.lista;
                var tipes = 'Node' + this.contador;
                this.contador++;
                this.grafo += tipes + '[label = \"TIPO\"];\n';
                this.grafo += _up + '->' + tipes + ';\n';
                var tipeindetificador = 'Node' + this.contador;
                this.contador++;
                this.grafo += tipeindetificador + '[label = \"' + tipo + '\"];\n';
                this.grafo += tipes + '->' + tipeindetificador + ';\n';
                if (_expresion.id) {
                    var id = _expresion.id;
                    var identificadovector = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += identificadovector + '[label = \"IDENTIFICADOR\"];\n';
                    this.grafo += _up + '->' + identificadovector + ';\n';
                    var identificadorvecotr2 = 'Node' + this.contador;
                    this.contador++;
                    this.grafo += identificadorvecotr2 + '[label = \"' + id + '\"];\n';
                    this.grafo += identificadovector + '->' + identificadorvecotr2 + ';\n';
                }
            }
        }
    }

}
module.exports = Graph;