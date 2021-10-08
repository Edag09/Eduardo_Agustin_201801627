%lex
%options case-insensitive
%option yylineno

/* Expresiones regulares */
num     [0-9]+
id      [a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*
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

/* Comentarios */
"//".*              {/* Ignoro los comentarios simples */}
"/*"((\*+[^/*])|([^*]))*\**"*/"     {/*Ignorar comentarios con multiples lneas*/}  


/* Simbolos del programa */

"++"                    { console.log("INCRE : "+ yytext); return 'INCRE'}
"--"                    { console.log("DECRE : "+ yytext); return 'DECRE'}
"("                    { console.log("PARA : "+ yytext); return 'PARA'}
")"                    { console.log("PARC : "+ yytext); return 'PARC'}
"["                    { console.log("CORA : "+ yytext); return 'CORA'}
"]"                    { console.log("CORC : "+ yytext); return 'CORC'}

";"                    { console.log("PYC : "+ yytext); return 'PYC'}
","                    { console.log("COMA : "+ yytext); return 'COMA'}
"!="                    { console.log("NOTIGUAL : "+ yytext); return 'NOTIGUAL'}
"=="                    { console.log("IGUALIGUAL : "+ yytext); return 'IGUALIGUAL'}
"="                    { console.log("IGUAL : "+ yytext); return 'IGUAL'}
"?"                    { console.log("INTERROGACION : "+ yytext); return 'INTERROGACION'}
":"                    { console.log("DSPNTS : "+ yytext); return 'DSPNTS'}
"{"                    { console.log("LLAVA : "+ yytext); return 'LLAVA'}
"}"                    { console.log("LLAVC : "+ yytext); return 'LLAVC'}

/* Operadores Aritmeticos */
"+"                    { console.log("MAS : "+ yytext); return 'MAS'}
"^"                    { console.log("MAS : "+ yytext); return 'POTENCIA'}
"%"                    { console.log("MAS : "+ yytext); return 'MODULO'}
"-"                   { console.log("MENOS : "+ yytext); return 'MENOS'}
"*"                   { console.log("MULTI : "+ yytext); return 'MULTI'}
"/"                   { console.log("DIV : "+ yytext); return 'DIV'}

/* Operadores Relacionales */
"<="                   { console.log("MENORIGUAL : "+ yytext); return 'MENORIGUAL'}
"<"                    { console.log("MENORQUE : "+ yytext); return 'MENORQUE'}
">="                   { console.log("MAYORIGUAL : "+ yytext); return 'MAYORIGUAL'}
">"                   { console.log("MAYORQUE : "+ yytext); return 'MAYORQUE'}

/* Operadores Logicos */
"&&"                    { console.log("AND : "+ yytext); return 'AND'}
"||"                    { console.log("OR : "+ yytext); return 'OR'}
"!"                   { console.log("NOT : "+ yytext); return 'NOT'}

/* Palabras reservadas */
"evaluar"               { console.log("EVALUAR : "+ yytext); return 'EVALUAR'}
"true"               { console.log("TRUE : "+ yytext); return 'TRUE'}
"false"               { console.log("FALSE : "+ yytext); return 'FALSE'}
"int"               { console.log("INT : "+ yytext); return 'INT'}
"double"               { console.log("DOUBLE : "+ yytext); return 'DOUBLE'}
"string"               { console.log("STRING : "+ yytext); return 'STRING'}
"char"               { console.log("CHAR : "+ yytext); return 'CHAR'}
"boolean"               { console.log("BOOLEAN : "+ yytext); return 'BOOLEAN'}
"print"               { console.log("PRINT : "+ yytext); return 'PRINT'}
"toLower"             { console.log("PRINT : "+ yytext); return 'TOLOWER'}          
"toUpper"             { console.log("PRINT : "+ yytext); return 'TOUPPER'}
"length"             { console.log("PRINT : "+ yytext); return 'LENGTH'} 
"truncate"             { console.log("PRINT : "+ yytext); return 'TRUNCATE'} 
"round"             { console.log("PRINT : "+ yytext); return 'ROUND'} 
"typeof"             { console.log("PRINT : "+ yytext); return 'TYPEOF'} 
"toString"             { console.log("PRINT : "+ yytext); return 'TOSTRING'} 
"if"               { console.log("IF : "+ yytext); return 'IF'}
"switch"               { console.log("SWITCH : "+ yytext); return 'SWITCH'}
"case"               { console.log("CASE : "+ yytext); return 'CASE'}
"default"               { console.log("DEFAULT : "+ yytext); return 'DEFAULT'}
"do"               { console.log("DO : "+ yytext); return 'DO'}
"while"               { console.log("WHILE : "+ yytext); return 'WHILE'}
"for"               { console.log("FOR_CIC : "+ yytext); return 'FOR_CIC'}
"else"               { console.log("ELSE : "+ yytext); return 'ELSE'}
"void"               { console.log("VOID : "+ yytext); return 'VOID'}
"exec"               { console.log("EJECUTAR : "+ yytext); return 'EJECUTAR'}
"break"               { console.log("BREAK : "+ yytext); return 'BREAK'}
"return"               { console.log("RETURN : "+ yytext); return 'RETURN'}
"continue"               { console.log("CONTINUE : "+ yytext); return 'CONTINUE'}
"new"               { console.log("CONTINUE : "+ yytext); return 'NEW'}

/* SIMBOLOS ER */
[0-9]+("."[0-9]+)\b        { console.log("DECIMAL : "+ yytext); return 'DECIMAL'}
[0-9]+                    { console.log("ENTERO : "+ yytext); return 'ENTERO'}
{id}                    { console.log("ID : "+ yytext.toString()); return 'ID'}
{cadena}                    { console.log("CADENA : "+ yytext); return 'CADENA'}
{caracter}                    { console.log("CHARVAR : "+ yytext); return 'CHARVAR'}

/* Espacios */
[\s\r\n\t]                  {/* skip whitespace */}


<<EOF>>               return 'EOF'

/* Errores lexicos */
.                   { console.log("Error Lexico "+yytext
                        +" linea "+yylineno
                        +" columna "+(yylloc.last_column+1));
                    }

/lex

/* Precedencia de operadores de mayor a menor */
%right 'ULTIM'
%right 'INTERROGACION'
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'MENORQUE' 'MAYORQUE' 'IGUALIGUAL' 'MAYORIGUAL' 'NOTIGUAL' 'MENORIGUAL'
%left 'MAS' 'MENOS'
%left 'MULTI' 'DIV'
%left 'POTENCIA'
%left 'MODULO'
%right 'UNARIO'

%start inicio

%% /* Gramatica */


inicio
    : instrucciones EOF {}
    ;

instrucciones : instrucciones instruccion   {}
            | instruccion                   {}
            ;

instruccion : declaracion   {}
            | asignacion    {}
            | print         {}
            | sent_if       {}
            | sent_switch   {} 
            | sent_while    {}            
            | sent_doWhile  {} 
            | sent_for      {}
            | funciones     {}
            | llamada PYC   {}
            | EJECUTAR llamada PYC {}
            | BREAK PYC        {}
            | RETURN e PYC     {}
            | RETURN  PYC      {}
            | CONTINUE  PYC    {}
            | error         { console.log("Error Sintactico" + yytext 
                                    + "linea: " + this._$.first_line 
                                    + "columna: " + this._$.first_column);           
                            }
 
            ;

declaracion : tipo lista_simbolos PYC   {}
            | tipo CORA CORC ID IGUAL NEW tipo CORA e CORC PYC          {}    
            | tipo CORA CORC ID IGUAL LLAVA ListaVector LLAVC  PYC      {} 
            ; 

ListaVector : ListaVector COMA e {}
            | e {}
            ;

tipo : INT      {}
    | DOUBLE    {}
    | STRING    {}
    | CHAR      {}
    | BOOLEAN   {}
    ;
/**
    lista de simbolos
    p1, p2 =90, p3 =190
    p1 
    p2 = 19
**/
lista_simbolos : lista_simbolos COMA ID         {}
            | lista_simbolos COMA ID IGUAL e    {}
            | ID                                {}
            | ID IGUAL e                        {}
            ;

asignacion : ID IGUAL e PYC                     {}
            | ID incremento PYC                 {}
            | ID CORA e CORC IGUAL e PYC        {}
            ; 

asignacionFor: ID IGUAL e    {}
            |  devolverIncremento           {}
            ; 

devolverIncremento : ID incremento            {}
            ;

sent_if : IF PARA e PARC LLAVA instrucciones LLAVC                                  {}
        | IF PARA e PARC LLAVA instrucciones LLAVC ELSE LLAVA instrucciones LLAVC   {}
        | IF PARA e PARC LLAVA instrucciones LLAVC ELSE sent_if                     {}
        ;
 
sent_switch : SWITCH PARA e PARC LLAVA switch_case LLAVC {}
            ; 



switch_case : switch_case CASE e DSPNTS  instrucciones  BREAK PYC     {}
            | switch_case DEFAULT  DSPNTS  instrucciones  BREAK PYC   {}
            | DEFAULT  DSPNTS  instrucciones  BREAK PYC   {}
            | CASE e DSPNTS  instrucciones BREAK PYC      {}        
            ;            
        
sent_while : WHILE PARA e PARC LLAVA instrucciones LLAVC {}
            ; 

sent_doWhile : DO LLAVA instrucciones LLAVC WHILE PARA e PARC PYC {}
            ; 

sent_for :  FOR_CIC PARA declaracion e PYC asignacionFor  PARC LLAVA instrucciones LLAVC {}
            |FOR_CIC PARA asignacion e PYC asignacionFor  PARC LLAVA instrucciones LLAVC {}
            ;

print : PRINT PARA e PARC PYC {}
        ; 

funciones : VOID ID PARA PARC LLAVA instrucciones LLAVC                 {}
        | VOID ID PARA lista_parametros PARC LLAVA instrucciones LLAVC  {}
        | tipo ID PARA lista_parametros PARC LLAVA instrucciones LLAVC  {}
        | tipo ID PARA PARC LLAVA instrucciones LLAVC                   {}
        ;

lista_parametros : lista_parametros COMA tipo ID    {}
                | tipo ID                           {}
                ;

llamada : ID PARA PARC              {}
        | ID PARA lista_exp PARC    {}
        ;

lista_exp : lista_exp COMA e        {}
        | e                         {}
        ;

e :   e MAS e                   {}
    | e MENOS e                 {}
    | e MULTI e                 {}
    | e DIV e                   {}
    | e MODULO e                {}
    | e POTENCIA e              {}
    | e AND e                   {}
    | e OR e                    {}
    | NOT e                     {}
    | e MAYORQUE e              {}
    | e MENORIGUAL e            {}
    | e MAYORIGUAL e            {}
    | e MENORQUE e              {}
    | e IGUALIGUAL e            {}
    | e NOTIGUAL e              {}
    | MENOS e %prec UNARIO      {}
    | PARA e PARC               {}
    | DECIMAL                   {}
    | ENTERO                    {}
    | CADENA                    {}
    | CHARVAR                   {}
    | TRUE                      {}
    | FALSE                     {}
    | ID                        {}
    | e INTERROGACION e DSPNTS e {} 
    | devolverIncremento         {}
    //| DECRE          {$$ = new aritmetica.default(new primitivo.default(1, $1.first_line, $1.last_column), $1.first_line, $1.last_column, false), '-', new primitivo.default(1, $1.first_line, $1.last_column), $1.first_line, $1.last_column, false);}
    //| incremento        {$$ = $1}
    | llamada                   {}
    | ID CORA e CORC            {}
    | TOLOWER PARA e PARC       {}
    | TOUPPER PARA e PARC       {}
    | PARA INT PARC e  %prec ULTIM     {}
    | PARA DOUBLE PARC e   %prec ULTIM    {}
    | PARA STRING PARC e   %prec ULTIM    {}
    | PARA CHAR PARC e    %prec ULTIM   {}
    | LENGTH PARA e PARC                {}
    | TRUNCATE PARA e PARC              {}        
    | ROUND PARA e PARC                 {}
    | TYPEOF PARA e PARC                {}
    | TOSTRING PARA e PARC              {}
    ;

incremento:  INCRE          {}
            | DECRE         {}
    ;
