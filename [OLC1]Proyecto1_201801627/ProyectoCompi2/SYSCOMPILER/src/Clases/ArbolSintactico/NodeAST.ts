/**
 * @class Clase para manejar los nodos de la grafica del AST
 */

export default class Node{
    public token : string;
    public lex : string;
    public hijos : Array<Node>;

    /**
     * @constructor Crea los nodos 
     * @param token Guarda el token
     * @param lex   Guarda el lexema
     */

    constructor(token : string, lexema : string){
        this.token = token;
        this.lex = lexema;
        this.hijos = new Array<Node>();
    }

    /**
     * @method addHijo Agrega los nodos a la lista
     * @param nuevo    Referencia al nuevo nodo
     */

    public AddHijo(nuevo : Node):void{
        this.hijos.push(nuevo);
    }
    /**
     * @function GraphSintactic Hace el arbol
     * @retunrns retorna la grafica
     */

    public GraphSintatic():string{
        let grafica: string = `digraph {\n\n${this.GraphNode(this, "0")} \n\n}`
        return grafica;
    }

    /**
     * @function GraphNode
     * @param node indicamos en donde nos posicionamos
     * @param IDnode identificador
     * @returns retorna el nodo
     */

    public GraphNode(node : Node, IDnode : string):string{
        let cont = 0;
        let cadena = "";
        let nodePrincipal : string = node.token;
        nodePrincipal = nodePrincipal.replace("\"", "");
        cadena = `node${IDnode}[label = \"${nodePrincipal}\"];\n`;

        for (let j = 0; j < node.hijos.length-1; j++) {
            cadena = `${cadena}node${IDnode} -> node${IDnode}${cont}\n`;
            cadena = cadena + this.GraphNode(node.hijos[j], "" + IDnode + cont);
            cont = cont + 1;
        }

        if ( !(node.lex.match('')) || !(node.lex.match("")) ){
            let TokenNode = node.lex;
            TokenNode = TokenNode.replace("\"", "");
            cadena = cadena + `node${IDnode}c[label = \"${TokenNode}\"];\n`;
            cadena = cadena + `node${IDnode} -> node${IDnode}c\n`;
        }
        return cadena;
    }

    /**
     * @function getToken obtiene el token
     * @returns retorna el token
     */
    
    getToken():string{
        return this.token;
    }
}