%lex
%options case-insensitive

identificador [A-ZÑa-zñ]+["_"0-9A-ZÑa-zñ]* 
num [0-9]+

//--> Cadena
escapechar  [\'\"\\ntr]
escape      \\{escapechar}
aceptacion  [^\"\\]+
cadena      (\"({escape} | {aceptacion})*\")  

//--> Caracter
escapechar2  [\\ntr]
escape2      \\{escapechar2}
aceptada2    [^\'\\]
caracter     (\'({escape2}|{aceptada2})\')

%%
//Definicion de Tokens
//Palabras del programa
"="     {console.log("Igual : "+yytext);return 'Igual'}
";"     return 'PuntoYComa';
","     return 'Coma';
":"     return 'DosPuntos';
"("     return 'ParIzquierdo';
")"     return 'PDerecho';
"{"     return 'LIzquierda';
"}"     return 'LDerecha';
"["     return 'CIzquierda';
"]"     return 'CDerecha';

//Tipos de Datos
"int"   return 'INT';
"double"    return 'DOUBLE';
"boolean"   return 'BOOLEAN';
"char"      return 'CHAR';
"string"    return 'STRING';
"new"       return 'NEW';

//Secuencias de Escape
"\n"    return 'SaltoLinea';
"\\"    return 'BarrasI';
"\""    return 'ComillaD';
"\t"    return 'Tabulacion';
"\'"    return 'ComillaS';

// Operadores Aritmeticos
"+"     return 'Suma';
"-"     return 'Resta';
"*"     return 'Multiplicacion';
"/"     return 'Division';
"%"     return 'Modulo';
"^"     return 'Potencia';
"++"    return 'Aumento';
"--"    return 'Decremento';

//Operadores Relacionales
"=="    return 'Comparacion';
"!="    return 'DiferenteA';
"<"     return 'Mayor';
">"     return 'Menor';
"<="    return 'MayorIgual';
"=>"    return 'MenorIgual';
"?"     return 'OpTernario';

//Operadores Logicos
"||"    return 'OR';
"&&"    return 'AND';
"!"     return 'NOT';

//Reservadas
"if"    return 'IF';
"else"  return 'ELSE;
"writeline"     return 'WRITELINE';
"swith"     return 'SWITCH';
"case"      return 'CASE';
"break"     return 'BREAK';
"while"     return 'WHILE';
"for"       return 'FOR';
"do"        return 'DO';
"true"      return 'TRUE';
"false"     return 'FALSE';
"continue'  return 'CONTINUE';
"return"    return 'RETURN';
"void"      return 'VOID';
"tolower"   return 'TOLOWER';       //Minusculas
"toupper"   return 'TOUPPER';       //Mayusculas
"length"    return 'LENGTH';
"truncate"  return 'TRUNCATE';      //Retorna un entero al ingresar un decimal
"round"     return 'ROUND';         //Redondea un decimal ej 8.6 = 9, 8.4 = 8
"typeof"    return 'TYPEOF';        //Retorna el tipado
"tostring"  return 'TOSTRING';      
"tochararray"   return 'TOCHARARRAY';      //Convierte una cadena a un arreglo de caracteres
"start"     return 'START';         //Para saber con que metodo iniciar
"with"      return 'WITH';          //Complemento de Start
"dynamiclist"       return 'DYNAMICLIST';   //Listas dinamicas
"append"    return 'APPEND';
"getValue"  return 'GETVALUE';
"setValue"  return 'SETVALUE';

[0-9]+("."[0-9]+)\b         return 'DECI';
[0-9]+                      return 'ENTERO';
{identificador}             return 'IDENTIFICADOR';
{cadena}                    return 'CADENA';
{caracter}                  return 'CHARACTER';

[\s\r\t\n]+     {/*Pasar*/}    //Espacios en Blanco


<<EOF>>     return 'EOF';

.                       {console.log("Error Lexico: ", yytext, " en la linea ", yyloc.first_line, " y en la columna ", yyloc.first_column);}

/lex

//Imports
%{
%}

//Precedencias
%right 'ULTIM'
%right 'OpTernario'
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'Comparacion' 'DiferenteA' 'Menor' 'MenorIgual' 'Mayor' 'MayorIgual'
%left 'Suma' 'Resta'
%left 'Division' 'Multiplicacion' 'Modulo'
%left 'Potencia'
%right 'Unario'

%start init

%%  /* Producciones Jejeje */

init: instrucciones EOF {/*console.log($1); $$= new AST.default($1); return $$;*/};

instrucciones: instrucciones contenido  {}
              |contenido                {}
              ;

contenido: declaraciones { $$ = $1; }
        | asignaciones   { $$ = $1; }
        | wirte          { $$ = $1; }
        | st_If          { $$ = $1; }
        | st_Switch      { $$ = $1; }
        | st_While       { $$ = $1; }
        | st_DoWhile     { $$ = $1; }
        | st_For         { $$ = $1; }
        | funciones      { $$ = $1; }
        | llamado PuntoYComa     { $$ = $1; }
        | START WITH llamado PuntoYComa     {}
        | BREAK PuntoYComa           {}
        | RETURN op PuntoYComa       {}
        | RETURN PuntoYComa          {}
        | CONTINUE PuntoYComa        {}
        | error             {console.log("Error Sintactico :" +yytext + " en la linea " +this.$.first_line + " y en la columna " +this.$.first_column);
                            /*new Errores.default("Lexico", "Caracter invalido" + yytext + " en la linea " + this.$.first_line " y en la columna " + this.$first_column);*/}
                            ;

declaraciones: tipo ids PuntoYComa {}
              | tipo CIzquierda CDerecha IDENTIFICADOR Igual NEW tipo CIzquierda op CDerecha PuntoYComa {}  //Numeros 
              | tipo CIzquierda CDerecha IDENTIFICADOR Igual LIzquierda vector LDerecha PuntoYComa      {}   //Cadenas
              ;

vector: vector Coma op {}
        |op {}
        ;

tipo : INT      { /*$$ = new Tipo.default('ENTERO');*/ }
     |DOUBLE    { /*$$ = new Tipo.default('DOUBLE');*/ }
     |STRING    { /*$$ = new Tipo.default('STRING');*/ }
     |CHAR      { /*$$ = new Tipo.default('CARACTER');*/ }
     |BOOLEAN   { /*$$ = new Tipo.default('BOOLEAN');*/ }
     ;

ids: ids Coma IDENTIFICADOR             { $$ = $1; $$.push(new Simbolos.default(1, null, $3, null)); }
   | ids Coma IDENTIFICADOR Igual op    { $$ = $1; $$.push(new Simbolos.default(1, null, $3, $5)); }
   | IDENTIFICADOR                      { $$ = new Array(); $$.push(new Simbolos.default(1, null, $1, null)); }
   | IDENTIFICADOR Igual op             { $$ = new Array(); $$.push(new Simbolos.default(1, null, $1, $3)); }
   ;

asignaciones: IDENTIFICADOR Igual op PuntoYComa                         {}
            |IDENTIFICADOR incrementar PuntoYComa                       {}
            |IDENTIFICADOR CIzquierda op CDerecha Igual op PuntoYComa   {}
            ;

incrementar: Aumento          {}
            |Decremento       {}
    ;

