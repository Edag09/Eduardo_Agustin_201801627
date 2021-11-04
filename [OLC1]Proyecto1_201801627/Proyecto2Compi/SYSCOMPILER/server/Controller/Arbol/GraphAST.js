const TIPO_DATO = require("../Principales/Tipos");
const TIPO_INSTRUCCION = require("../Principales/TInstrucciones");
const TIPO_OPERACION = require("../Principales/TOperaciones");
const TIPO_VALOR = require("../Principales/TValores");

class Graph {
    constructor(_root) {
        this.grafo = '';
        this.root = _root;
        this.count = 1;
    }

    getDot() {
        this.grafo = `digraph AST {
            graph[bgcolor=cadetblue]
            node [shape=egg style=filled color=forestgreen fontname= \"Ubuntu\" fontsize=\"14\"];
            edge[color=maroon penwidth=\"1.5\"];`
        this.to_Run_AST("RAÍZ", this.root);
        this.grafo += '}';
        return this.grafo;
    }

    to_Run_AST(_up, _down) {
        _down.forEach(inst => {
            this.graph_Instruccion(_up, inst);
        });
    }

    graph_Instruccion(_up, _instruccion) {
        if (_instruccion.tipo === TIPO_INSTRUCCION.PRINT) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"WRITE LINE\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Print(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"DECLARACIÓN\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Declaracion(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
            var child = 'Node' + this.count;
            this.count++;
            if (_instruccion.posicion)
                this.grafo += child + '[label = \"MODIFICACIÓN:\n' + _instruccion.tipo_dato + '\"];\n';
            else
                this.grafo += child + '[label = \"ASIGNACIÓN\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Asignacion(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.WHILE) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"CICLO WHILE\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_While(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.DOWHILE) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"CICLO DO WHILE\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_doWhile(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.FOR) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"CICLO FOR\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_For(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.IF) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"SENTENCIA IF\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_If(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.IF_ELSE) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"SENTENCIA IF ELSE\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_IfElse(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.ELSE_IF) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"SENTENCIA ELSE IF\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_ElseIf(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.SWITCH) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"SENTENCIA SWITCH\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Switch(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.LLAMADA) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"LLAMADA\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Llamada(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.BREAK) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"SENTENCIA BREAK\"];\n';
            this.grafo += _up + '->' + child + ';\n';
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.CONTINUE) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"SENTENCIA CONTINUE\"];\n';
            this.grafo += _up + '->' + child + ';\n';
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.RETURN) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"SENTENCIA RETURN\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Return(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.NUEVO_METODO) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"DECLARACIÓN MÉTODO\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Metodo(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.NUEVA_FUNCION) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"DECLARACIÓN FUNCIÓN\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Funcion(child, _instruccion);
        }
        else if (_instruccion.tipo === TIPO_INSTRUCCION.START_WITH) {
            var child = 'Node' + this.count;
            this.count++;
            this.grafo += child + '[label = \"START WITH\"];\n';
            this.grafo += _up + '->' + child + ';\n';
            this.graph_Llamada(child, _instruccion);
        }
    }

    graph_Print(_up, _instruccion) {
        this.graph_Operacion(_up, _instruccion.expresion);
    }

    graph_Declaracion(_up, _instruccion) {
        // Nodo Tipo
        var type1 = 'Node' + this.count;
        this.count++;
        this.grafo += type1 + '[label = \"TIPO\"];\n';
        var type2 = 'Node' + this.count;
        this.count++;
        var tipo = _instruccion.tipo_dato;
        if (_instruccion.tipo_dato1) {
            tipo = tipo + ':\n' + _instruccion.tipo_dato1;
        }
        this.grafo += type2 + '[label = \"' + tipo + '\"];\n';
        this.grafo += _up + '->' + type1 + '->' + type2 + ';\n';
        // Nodo Id
        var name1 = 'Node' + this.count;
        this.count++;
        this.grafo += name1 + '[label = \"IDENTIFICADOR\"];\n';
        var name2 = 'Node' + this.count;
        this.count++;
        this.grafo += name2 + '[label = \"' + _instruccion.id + '\"];\n';
        this.grafo += _up + '->' + name1 + '->' + name2 + ';\n';
        // Nodo asignación
        if (_instruccion.valor != null) {
            this.graph_Operacion(_up, _instruccion.valor);
        }
        if (_instruccion.valores != null) {
            var val1 = 'Node' + this.count;
            this.count++;
            this.grafo += val1 + '[label = \"VALORES\"];\n';
            this.grafo += _up + '->' + val1 + ';\n';
            for (let i = 0; i < _instruccion.valores.length; i++) {
                const val = _instruccion.valores[i];
                this.graph_Operacion(val1, val);
            }
        }
    }

    graph_Asignacion(_up, _instruccion) {
        // Nodo Id
        var name1 = 'Node' + this.count;
        this.count++;
        this.grafo += name1 + '[label = \"IDENTIFICADOR\"];\n';
        var name2 = 'Node' + this.count;
        this.count++;
        this.grafo += name2 + '[label = \"' + _instruccion.id + '\"];\n';
        this.grafo += _up + '->' + name1 + '->' + name2 + ';\n';
        // Nodo asignación
        if (_instruccion.posicion === null && _instruccion.tipo_dato === TIPO_DATO.LISTA) {
            var add = 'Node' + this.count;
            this.count++;
            this.grafo += add + '[label = \"ADD\"];\n';
            this.grafo += _up + '->' + add + ';\n';
            this.graph_Operacion(add, _instruccion.valor);
        }
        else if (_instruccion.posicion) {
            var pos = 'Node' + this.count;
            this.count++;
            this.grafo += pos + '[label = \"ÍNDICE\"];\n';
            this.grafo += _up + '->' + pos + ';\n';
            this.graph_Operacion(pos, _instruccion.posicion);
            this.graph_Operacion(_up, _instruccion.valor);
        }
        else
            this.graph_Operacion(_up, _instruccion.expresion);
    }

    graph_While(_up, _instruccion) {
        // Nodo condición
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + exp1 + ';\n';
        this.graph_Operacion(exp1, _instruccion.expresion);
        // Nodo instrucciones
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += exp1 + '->' + exp2 + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.graph_Instruccion(exp2, inst);
            }
        }
    }

    graph_doWhile(_up, _instruccion) {
        // Nodo instrucciones
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"DO\"];\n';
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += _up + '->' + exp1 + '->' + exp2 + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.graph_Instruccion(exp2, inst);
            }
        }
        // Nodo condición
        var exp3 = 'Node' + this.count;
        this.count++;
        this.grafo += exp3 + '[label = \"WHILE\"];\n';
        var exp4 = 'Node' + this.count;
        this.count++;
        this.grafo += exp4 + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + exp3 + '->' + exp4 + ';\n';
        this.grafo += exp1 + '->' + exp3 + ';\n';
        this.graph_Operacion(exp4, _instruccion.expresion);
    }

    graph_For(_up, _instruccion) {
        // Nodo variable
        this.graph_Instruccion(_up, _instruccion.variable);
        // Nodo condición
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + exp1 + ';\n';
        this.graph_Operacion(exp1, _instruccion.expresion);
        // Nodo actualización
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"ACTUALIZACIÓN\"];\n';
        this.grafo += _up + '->' + exp2 + ';\n';
        this.graph_Instruccion(exp2, _instruccion.instrucciones.pop());
        // Nodo instrucciones
        var exp3 = 'Node' + this.count;
        this.count++;
        this.grafo += exp3 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += _up + '->' + exp3 + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.graph_Instruccion(exp3, inst);
            }
        }
    }

    graph_If(_up, _instruccion) {
        // Nodo condición
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + exp1 + ';\n';
        this.graph_Operacion(exp1, _instruccion.expresion);
        // Nodo instrucciones
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += exp1 + '->' + exp2 + ';\n';
        if (_instruccion.instrucciones != null) {
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.graph_Instruccion(exp2, inst);
            }
        }
    }

    graph_IfElse(_up, _instruccion) {
        // Nodo condición
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + exp1 + ';\n';
        this.graph_Operacion(exp1, _instruccion.expresion);
        // Nodo instrucciones
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += exp1 + '->' + exp2 + ';\n';
        if (_instruccion.instruccionesIF != null) {
            for (let i = 0; i < _instruccion.instruccionesIF.length; i++) {
                const inst = _instruccion.instruccionesIF[i];
                this.graph_Instruccion(exp2, inst);
            }
        }
        // Nodo else
        var exp3 = 'Node' + this.count;
        this.count++;
        this.grafo += exp3 + '[label = \"ELSE\"];\n';
        this.grafo += _up + '->' + exp3 + ';\n';
        // Nodo instrucciones
        var exp4 = 'Node' + this.count;
        this.count++;
        this.grafo += exp4 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += exp3 + '->' + exp4 + ';\n';
        if (_instruccion.instruccionesELSE != null) {
            for (let i = 0; i < _instruccion.instruccionesELSE.length; i++) {
                const inst = _instruccion.instruccionesELSE[i];
                this.graph_Instruccion(exp4, inst);
            }
        }
    }

    graph_ElseIf(_up, _instruccion) {
        // Nodo condición
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"CONDICION\"];\n';
        this.grafo += _up + '->' + exp1 + ';\n';
        this.graph_Operacion(exp1, _instruccion.expresion);
        // Nodo instrucciones
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"INSTRUCCIONES\"];\n';
        this.grafo += exp1 + '->' + exp2 + ';\n';
        if (_instruccion.instruccionesIF != null) {
            for (let i = 0; i < _instruccion.instruccionesIF.length; i++) {
                const inst = _instruccion.instruccionesIF[i];
                this.graph_Instruccion(exp2, inst);
            }
        }
        if (_instruccion.instruccionesELSEIF) {
            this.graph_Instruccion(_up, _instruccion.instruccionesELSEIF);
        }
    }

    graph_Switch(_up, _instruccion) {
        // Nodo condición
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"EXPRESION EVALUAR\"];\n';
        this.grafo += _up + '->' + exp1 + ';\n';
        this.graph_Operacion(exp1, _instruccion.expresionEvaluar);
        if (_instruccion.casosComparar != null) {
            for (let i = 0; i < _instruccion.casosComparar.length; i++) {
                const caso = _instruccion.casosComparar[i];
                var exp2 = 'Node' + this.count;
                this.count++;
                this.grafo += exp2 + '[label = \"CASO\"];\n';
                this.grafo += _up + '->' + exp2 + ';\n';
                this.graph_Operacion(exp2, caso.expresion);
                if (caso.instrucciones != null) {
                    for (let i = 0; i < caso.instrucciones.length; i++) {
                        const inst = caso.instrucciones[i];
                        this.graph_Instruccion(exp2, inst);
                    }
                }
            }
        }
        if (_instruccion.casoDefault != null) {
            var exp3 = 'Node' + this.count;
            this.count++;
            this.grafo += exp3 + '[label = \"DEFAULT\"];\n';
            this.grafo += _up + '->' + exp3 + ';\n';
            this.graph_Operacion(exp3, _instruccion.casoDefault.expresion);
            if (_instruccion.casoDefault.instrucciones != null) {
                for (let i = 0; i < _instruccion.casoDefault.instrucciones.length; i++) {
                    const inst = _instruccion.casoDefault.instrucciones[i];
                    this.graph_Instruccion(exp3, inst);
                }
            }
        }
    }

    graph_Llamada(_up, _instruccion) {
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"NOMBRE\"];\n';
        this.grafo += _up + '->' + exp2 + ';\n';
        var exp3 = 'Node' + this.count;
        this.count++;
        this.grafo += exp3 + '[label = \"' + _instruccion.nombre + '\"];\n';
        this.grafo += exp2 + '->' + exp3 + ';\n';
        if (_instruccion.lista_valores != null) {
            var exp4 = 'Node' + this.count;
            this.count++;
            this.grafo += exp4 + '[label = \"PARAMETROS\"];\n';
            this.grafo += _up + '->' + exp4 + ';\n';
            for (let i = 0; i < _instruccion.lista_valores.length; i++) {
                const param = _instruccion.lista_valores[i];
                this.graph_Operacion(exp4, param);
            }
        }
    }

    graph_Return(_up, _instruccion) {
        if (_instruccion.expresion) {
            var exp2 = 'Node' + this.count;
            this.count++;
            this.grafo += exp2 + '[label = \"EXPRESION\"];\n';
            this.grafo += _up + '->' + exp2 + ';\n';
            this.graph_Operacion(exp2, _instruccion.expresion);
        }
    }

    graph_Metodo(_up, _instruccion) {
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"NOMBRE\"];\n';
        this.grafo += _up + '->' + exp2 + ';\n';
        var exp3 = 'Node' + this.count;
        this.count++;
        this.grafo += exp3 + '[label = \"' + _instruccion.nombre + '\"];\n';
        this.grafo += exp2 + '->' + exp3 + ';\n';
        if (_instruccion.lista_parametros != null) {
            var exp4 = 'Node' + this.count;
            this.count++;
            this.grafo += exp4 + '[label = \"PARAMETROS\"];\n';
            this.grafo += _up + '->' + exp4 + ';\n';
            for (let i = 0; i < _instruccion.lista_parametros.length; i++) {
                const param = _instruccion.lista_parametros[i];
                this.graph_Operacion(exp4, param);
            }
        }
        if (_instruccion.instrucciones != null) {
            var exp5 = 'Node' + this.count;
            this.count++;
            this.grafo += exp5 + '[label = \"INSTRUCCIONES\"];\n';
            this.grafo += _up + '->' + exp5 + ';\n';
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.graph_Instruccion(exp5, inst);
            }
        }
    }

    graph_Funcion(_up, _instruccion) {
        var exp1 = 'Node' + this.count;
        this.count++;
        this.grafo += exp1 + '[label = \"TIPO DE RETORNO\"];\n';
        this.grafo += _up + '->' + exp1 + ';\n';
        this.graph_Operacion(exp1, { tipo_dato: _instruccion.retorno });
        var exp2 = 'Node' + this.count;
        this.count++;
        this.grafo += exp2 + '[label = \"NOMBRE\"];\n';
        this.grafo += _up + '->' + exp2 + ';\n';
        var exp3 = 'Node' + this.count;
        this.count++;
        this.grafo += exp3 + '[label = \"' + _instruccion.nombre + '\"];\n';
        this.grafo += exp2 + '->' + exp3 + ';\n';
        if (_instruccion.lista_parametros != null) {
            var exp4 = 'Node' + this.count;
            this.count++;
            this.grafo += exp4 + '[label = \"PARAMETROS\"];\n';
            this.grafo += _up + '->' + exp4 + ';\n';
            for (let i = 0; i < _instruccion.lista_parametros.length; i++) {
                const param = _instruccion.lista_parametros[i];
                this.graph_Operacion(exp4, param);
            }
        }
        if (_instruccion.instrucciones != null) {
            var exp5 = 'Node' + this.count;
            this.count++;
            this.grafo += exp5 + '[label = \"INSTRUCCIONES\"];\n';
            this.grafo += _up + '->' + exp5 + ';\n';
            for (let i = 0; i < _instruccion.instrucciones.length; i++) {
                const inst = _instruccion.instrucciones[i];
                this.graph_Instruccion(exp5, inst);
            }
        }
    }

    graph_Operacion(_up, _expresion) {
        if (_expresion === null) return;
        if (_expresion.tipo === TIPO_VALOR.DOBLE || _expresion.tipo === TIPO_VALOR.BOOLEANO ||
            _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR ||
            _expresion.tipo === TIPO_VALOR.CARACTER || _expresion.tipo === TIPO_VALOR.ENTERO) {
            var exp = String(_expresion.valor).replace(/\"/gi, '\\\"');
            var tipo = _expresion.tipo;
            if (tipo.vector)
                tipo = "VECTOR: " + tipo.vector;
            if (tipo.lista)
                tipo = "DYNAMIC LIST: " + tipo.lista;
            var exp1 = 'Node' + this.count;
            this.count++;
            this.grafo += exp1 + '[label = \"' + tipo + '\"];\n';
            var exp2 = 'Node' + this.count;
            this.count++;
            this.grafo += exp2 + '[label = \"' + exp + '\"];\n';
            this.grafo += _up + '->' + exp1 + '->' + exp2 + ';\n';
        }

        else if (_expresion.tipo === TIPO_OPERACION.SUMA || _expresion.tipo === TIPO_OPERACION.RESTA
            || _expresion.tipo === TIPO_OPERACION.MULTIPLICACION || _expresion.tipo === TIPO_OPERACION.DIVISION
            || _expresion.tipo === TIPO_OPERACION.POTENCIA || _expresion.tipo === TIPO_OPERACION.MODULO || _expresion.tipo === TIPO_OPERACION.NEGACION
            || _expresion.tipo === TIPO_OPERACION.IGUALIGUAL || _expresion.tipo === TIPO_OPERACION.DIFERENTE
            || _expresion.tipo === TIPO_OPERACION.MENOR || _expresion.tipo === TIPO_OPERACION.MENORIGUAL
            || _expresion.tipo === TIPO_OPERACION.MAYOR || _expresion.tipo === TIPO_OPERACION.MAYORIGUAL
            || _expresion.tipo === TIPO_OPERACION.OR || _expresion.tipo === TIPO_OPERACION.AND || _expresion.tipo === TIPO_OPERACION.NOT) {
            var tipo = _expresion.tipo;
            if (tipo.vector)
                tipo = "VECTOR: " + tipo.vector;
            if (tipo.lista)
                tipo = "LISTA: " + tipo.lista;
            var exp1 = 'Node' + this.count;
            this.count++;
            this.grafo += exp1 + '[label = \"' + tipo + '\"];\n';
            this.grafo += _up + '->' + exp1 + ';\n';
            this.graph_Operacion(exp1, _expresion.opIzq);
            if (_expresion.tipo !== TIPO_OPERACION.NOT && _expresion.tipo !== TIPO_OPERACION.NEGACION)
                this.graph_Operacion(exp1, _expresion.opDer);
        }
        else if (_expresion.tipo === TIPO_INSTRUCCION.TERNARIO) {
            var exp1 = 'Node' + this.count;
            this.count++;
            this.grafo += exp1 + '[label = \"' + _expresion.tipo + '\"];\n';
            this.grafo += _up + '->' + exp1 + ';\n';
            var exp2 = 'Node' + this.count;
            this.count++;
            this.grafo += exp2 + '[label = \"CONDICION\"];\n';
            this.grafo += exp1 + '->' + exp2 + ';\n';
            this.graph_Operacion(exp2, _expresion.condicion);
            var exp3 = 'Node' + this.count;
            this.count++;
            this.grafo += exp3 + '[label = \"EXPRESIÓN A\"];\n';
            this.grafo += exp1 + '->' + exp3 + ';\n';
            this.graph_Operacion(exp3, _expresion.expresionA);
            var exp4 = 'Node' + this.count;
            this.count++;
            this.grafo += exp4 + '[label = \"EXPRESIÓN B\"];\n';
            this.grafo += exp1 + '->' + exp4 + ';\n';
            this.graph_Operacion(exp4, _expresion.expresionA);
        }
        else if (_expresion.tipo === TIPO_INSTRUCCION.CASTEO) {
            var exp1 = 'Node' + this.count;
            this.count++;
            this.grafo += exp1 + '[label = \"' + _expresion.tipo + '\"];\n';
            this.grafo += _up + '->' + exp1 + ';\n';
            var exp2 = 'Node' + this.count;
            this.count++;
            this.grafo += exp2 + '[label = \"NUEVO TIPO\"];\n';
            this.grafo += exp1 + '->' + exp2 + ';\n';
            var exp3 = 'Node' + this.count;
            this.count++;
            this.grafo += exp3 + '[label = \"' + _expresion.nuevoTipo + '\"];\n';
            this.grafo += exp2 + '->' + exp3 + ';\n';
            var exp4 = 'Node' + this.count;
            this.count++;
            this.grafo += exp4 + '[label = \"EXPRESIÓN\"];\n';
            this.grafo += exp1 + '->' + exp4 + ';\n';
            this.graph_Operacion(exp4, _expresion.expresion);
        }
        else if (_expresion.tipo === TIPO_INSTRUCCION.ACCESO) {
            switch (_expresion.tipo_dato) {
                case TIPO_DATO.VECTOR:
                    var exp1 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp1 + '[label = \"ACCESO VECTOR\"];\n';
                    this.grafo += _up + '->' + exp1 + ';\n';
                    var exp2 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp2 + '[label = \"IDENTIFICADOR\"];\n';
                    this.grafo += exp1 + '->' + exp2 + ';\n';
                    var exp3 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp3 + '[label = \"' + _expresion.id + '\"];\n';
                    this.grafo += exp2 + '->' + exp3 + ';\n';
                    var exp4 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp4 + '[label = \"POSICIÓN\"];\n';
                    this.grafo += exp1 + '->' + exp4 + ';\n';
                    this.graph_Operacion(exp4, _expresion.posicion);
                    break;
                case TIPO_DATO.LISTA:
                    var exp1 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp1 + '[label = \"ACCESO LISTA\"];\n';
                    this.grafo += _up + '->' + exp1 + ';\n';
                    var exp2 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp2 + '[label = \"IDENTIFICADOR\"];\n';
                    this.grafo += exp1 + '->' + exp2 + ';\n';
                    var exp3 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp3 + '[label = \"' + _expresion.id + '\"];\n';
                    this.grafo += exp2 + '->' + exp3 + ';\n';
                    var exp4 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp4 + '[label = \"POSICIÓN\"];\n';
                    this.grafo += exp1 + '->' + exp4 + ';\n';
                    this.graph_Operacion(exp4, _expresion.posicion);
                    break;
            }
        }
        else if (_expresion.tipo === TIPO_INSTRUCCION.TO_LOWER || _expresion.tipo === TIPO_INSTRUCCION.TO_UPPER
            || _expresion.tipo === TIPO_INSTRUCCION.LENGTH || _expresion.tipo === TIPO_INSTRUCCION.TRUNCATE
            || _expresion.tipo === TIPO_INSTRUCCION.ROUND || _expresion.tipo === TIPO_INSTRUCCION.TYPEOF
            || _expresion.tipo === TIPO_INSTRUCCION.TOSTRING || _expresion.tipo === TIPO_INSTRUCCION.TOCHARLIST) {
            var exp1 = 'Node' + this.count;
            this.count++;
            this.grafo += exp1 + '[label = \"' + _expresion.tipo + '\"];\n';
            this.grafo += _up + '->' + exp1 + ';\n';
            var exp2 = 'Node' + this.count;
            this.count++;
            this.grafo += exp2 + '[label = \"VALOR\"];\n';
            this.grafo += exp1 + '->' + exp2 + ';\n';
            this.graph_Operacion(exp2, _expresion.expresion);
        }
        else if (_expresion.tipo === TIPO_INSTRUCCION.LLAMADA) {
            var exp1 = 'Node' + this.count;
            this.count++;
            this.grafo += exp1 + '[label = \"LLAMADA A FUNCIÓN\"];\n';
            this.grafo += _up + '->' + exp1 + ';\n';
            var exp2 = 'Node' + this.count;
            this.count++;
            this.grafo += exp2 + '[label = \"NOMBRE\"];\n';
            this.grafo += exp1 + '->' + exp2 + ';\n';
            var exp3 = 'Node' + this.count;
            this.count++;
            this.grafo += exp3 + '[label = \"' + _expresion.nombre + '\"];\n';
            this.grafo += exp2 + '->' + exp3 + ';\n';
            if (_expresion.lista_valores != null) {
                var exp4 = 'Node' + this.count;
                this.count++;
                this.grafo += exp4 + '[label = \"PARAMETROS\"];\n';
                this.grafo += exp1 + '->' + exp4 + ';\n';
                for (let i = 0; i < _expresion.lista_valores.length; i++) {
                    const param = _expresion.lista_valores[i];
                    this.graph_Operacion(exp4, param);
                }
            }
        }
        else if (_expresion.tipo_dato) {
            if (_expresion.tipo_dato === TIPO_DATO.DOBLE || _expresion.tipo_dato === TIPO_DATO.BOOLEANO ||
                _expresion.tipo_dato === TIPO_DATO.CADENA ||
                _expresion.tipo_dato === TIPO_DATO.CARACTER || _expresion.tipo_dato === TIPO_DATO.ENTERO ||
                _expresion.tipo_dato.vector || _expresion.tipo_dato.lista) {
                var tipo = _expresion.tipo_dato;
                if (tipo.vector)
                    tipo = "VECTOR: " + tipo.vector;
                if (tipo.lista)
                    tipo = "LISTA: " + tipo.lista;
                var exp1 = 'Node' + this.count;
                this.count++;
                this.grafo += exp1 + '[label = \"TIPO\"];\n';
                this.grafo += _up + '->' + exp1 + ';\n';
                var exp2 = 'Node' + this.count;
                this.count++;
                this.grafo += exp2 + '[label = \"' + tipo + '\"];\n';
                this.grafo += exp1 + '->' + exp2 + ';\n';
                if (_expresion.id) {
                    var id = _expresion.id;
                    var exp3 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp3 + '[label = \"IDENTIFICADOR\"];\n';
                    this.grafo += _up + '->' + exp3 + ';\n';
                    var exp4 = 'Node' + this.count;
                    this.count++;
                    this.grafo += exp4 + '[label = \"' + id + '\"];\n';
                    this.grafo += exp3 + '->' + exp4 + ';\n';
                }
            }
        }
    }

}

module.exports = Graph;