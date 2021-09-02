package AnalizadorJS;
import java_cup.runtime.Symbol;


public class Lexico implements java_cup.runtime.Scanner {
	private final int YY_BUFFER_SIZE = 512;
	private final int YY_F = -1;
	private final int YY_NO_STATE = -1;
	private final int YY_NOT_ACCEPT = 0;
	private final int YY_START = 1;
	private final int YY_END = 2;
	private final int YY_NO_ANCHOR = 4;
	private final int YY_BOL = 65536;
	private final int YY_EOF = 65537;
	private java.io.BufferedReader yy_reader;
	private int yy_buffer_index;
	private int yy_buffer_read;
	private int yy_buffer_start;
	private int yy_buffer_end;
	private char yy_buffer[];
	private int yychar;
	private int yyline;
	private boolean yy_at_bol;
	private int yy_lexical_state;

	public Lexico (java.io.Reader reader) {
		this ();
		if (null == reader) {
			throw (new Error("Error: Bad input stream initializer."));
		}
		yy_reader = new java.io.BufferedReader(reader);
	}

	public Lexico (java.io.InputStream instream) {
		this ();
		if (null == instream) {
			throw (new Error("Error: Bad input stream initializer."));
		}
		yy_reader = new java.io.BufferedReader(new java.io.InputStreamReader(instream));
	}

	private Lexico () {
		yy_buffer = new char[YY_BUFFER_SIZE];
		yy_buffer_read = 0;
		yy_buffer_index = 0;
		yy_buffer_start = 0;
		yy_buffer_end = 0;
		yychar = 0;
		yyline = 0;
		yy_at_bol = true;
		yy_lexical_state = YYINITIAL;
 
    yyline = 1; 
    yychar = 1;
	}

	private boolean yy_eof_done = false;
	private final int YYINITIAL = 0;
	private final int yy_state_dtrans[] = {
		0
	};
	private void yybegin (int state) {
		yy_lexical_state = state;
	}
	private int yy_advance ()
		throws java.io.IOException {
		int next_read;
		int i;
		int j;

		if (yy_buffer_index < yy_buffer_read) {
			return yy_buffer[yy_buffer_index++];
		}

		if (0 != yy_buffer_start) {
			i = yy_buffer_start;
			j = 0;
			while (i < yy_buffer_read) {
				yy_buffer[j] = yy_buffer[i];
				++i;
				++j;
			}
			yy_buffer_end = yy_buffer_end - yy_buffer_start;
			yy_buffer_start = 0;
			yy_buffer_read = j;
			yy_buffer_index = j;
			next_read = yy_reader.read(yy_buffer,
					yy_buffer_read,
					yy_buffer.length - yy_buffer_read);
			if (-1 == next_read) {
				return YY_EOF;
			}
			yy_buffer_read = yy_buffer_read + next_read;
		}

		while (yy_buffer_index >= yy_buffer_read) {
			if (yy_buffer_index >= yy_buffer.length) {
				yy_buffer = yy_double(yy_buffer);
			}
			next_read = yy_reader.read(yy_buffer,
					yy_buffer_read,
					yy_buffer.length - yy_buffer_read);
			if (-1 == next_read) {
				return YY_EOF;
			}
			yy_buffer_read = yy_buffer_read + next_read;
		}
		return yy_buffer[yy_buffer_index++];
	}
	private void yy_move_end () {
		if (yy_buffer_end > yy_buffer_start &&
		    '\n' == yy_buffer[yy_buffer_end-1])
			yy_buffer_end--;
		if (yy_buffer_end > yy_buffer_start &&
		    '\r' == yy_buffer[yy_buffer_end-1])
			yy_buffer_end--;
	}
	private boolean yy_last_was_cr=false;
	private void yy_mark_start () {
		int i;
		for (i = yy_buffer_start; i < yy_buffer_index; ++i) {
			if ('\n' == yy_buffer[i] && !yy_last_was_cr) {
				++yyline;
			}
			if ('\r' == yy_buffer[i]) {
				++yyline;
				yy_last_was_cr=true;
			} else yy_last_was_cr=false;
		}
		yychar = yychar
			+ yy_buffer_index - yy_buffer_start;
		yy_buffer_start = yy_buffer_index;
	}
	private void yy_mark_end () {
		yy_buffer_end = yy_buffer_index;
	}
	private void yy_to_mark () {
		yy_buffer_index = yy_buffer_end;
		yy_at_bol = (yy_buffer_end > yy_buffer_start) &&
		            ('\r' == yy_buffer[yy_buffer_end-1] ||
		             '\n' == yy_buffer[yy_buffer_end-1] ||
		             2028/*LS*/ == yy_buffer[yy_buffer_end-1] ||
		             2029/*PS*/ == yy_buffer[yy_buffer_end-1]);
	}
	private java.lang.String yytext () {
		return (new java.lang.String(yy_buffer,
			yy_buffer_start,
			yy_buffer_end - yy_buffer_start));
	}
	private int yylength () {
		return yy_buffer_end - yy_buffer_start;
	}
	private char[] yy_double (char buf[]) {
		int i;
		char newbuf[];
		newbuf = new char[2*buf.length];
		for (i = 0; i < buf.length; ++i) {
			newbuf[i] = buf[i];
		}
		return newbuf;
	}
	private final int YY_E_INTERNAL = 0;
	private final int YY_E_MATCH = 1;
	private java.lang.String yy_error_string[] = {
		"Error: Internal error.\n",
		"Error: Unmatched input.\n"
	};
	private void yy_error (int code,boolean fatal) {
		java.lang.System.out.print(yy_error_string[code]);
		java.lang.System.out.flush();
		if (fatal) {
			throw new Error("Fatal Error.\n");
		}
	}
	private int[][] unpackFromString(int size1, int size2, String st) {
		int colonIndex = -1;
		String lengthString;
		int sequenceLength = 0;
		int sequenceInteger = 0;

		int commaIndex;
		String workString;

		int res[][] = new int[size1][size2];
		for (int i= 0; i < size1; i++) {
			for (int j= 0; j < size2; j++) {
				if (sequenceLength != 0) {
					res[i][j] = sequenceInteger;
					sequenceLength--;
					continue;
				}
				commaIndex = st.indexOf(',');
				workString = (commaIndex==-1) ? st :
					st.substring(0, commaIndex);
				st = st.substring(commaIndex+1);
				colonIndex = workString.indexOf(':');
				if (colonIndex == -1) {
					res[i][j]=Integer.parseInt(workString);
					continue;
				}
				lengthString =
					workString.substring(colonIndex+1);
				sequenceLength=Integer.parseInt(lengthString);
				workString=workString.substring(0,colonIndex);
				sequenceInteger=Integer.parseInt(workString);
				res[i][j] = sequenceInteger;
				sequenceLength--;
			}
		}
		return res;
	}
	private int yy_acpt[] = {
		/* 0 */ YY_NOT_ACCEPT,
		/* 1 */ YY_NO_ANCHOR,
		/* 2 */ YY_NO_ANCHOR,
		/* 3 */ YY_NO_ANCHOR,
		/* 4 */ YY_NO_ANCHOR,
		/* 5 */ YY_NO_ANCHOR,
		/* 6 */ YY_NO_ANCHOR,
		/* 7 */ YY_NO_ANCHOR,
		/* 8 */ YY_NO_ANCHOR,
		/* 9 */ YY_NO_ANCHOR,
		/* 10 */ YY_NO_ANCHOR,
		/* 11 */ YY_NO_ANCHOR,
		/* 12 */ YY_NO_ANCHOR,
		/* 13 */ YY_NO_ANCHOR,
		/* 14 */ YY_NO_ANCHOR,
		/* 15 */ YY_NO_ANCHOR,
		/* 16 */ YY_NO_ANCHOR,
		/* 17 */ YY_NO_ANCHOR,
		/* 18 */ YY_NO_ANCHOR,
		/* 19 */ YY_NO_ANCHOR,
		/* 20 */ YY_NO_ANCHOR,
		/* 21 */ YY_NO_ANCHOR,
		/* 22 */ YY_NO_ANCHOR,
		/* 23 */ YY_NO_ANCHOR,
		/* 24 */ YY_NO_ANCHOR,
		/* 25 */ YY_NO_ANCHOR,
		/* 26 */ YY_NO_ANCHOR,
		/* 27 */ YY_NO_ANCHOR,
		/* 28 */ YY_NO_ANCHOR,
		/* 29 */ YY_NO_ANCHOR,
		/* 30 */ YY_NO_ANCHOR,
		/* 31 */ YY_NO_ANCHOR,
		/* 32 */ YY_NO_ANCHOR,
		/* 33 */ YY_NO_ANCHOR,
		/* 34 */ YY_NO_ANCHOR,
		/* 35 */ YY_NO_ANCHOR,
		/* 36 */ YY_NO_ANCHOR,
		/* 37 */ YY_NO_ANCHOR,
		/* 38 */ YY_NO_ANCHOR,
		/* 39 */ YY_NO_ANCHOR,
		/* 40 */ YY_NO_ANCHOR,
		/* 41 */ YY_NO_ANCHOR,
		/* 42 */ YY_NO_ANCHOR,
		/* 43 */ YY_NO_ANCHOR,
		/* 44 */ YY_NO_ANCHOR,
		/* 45 */ YY_NO_ANCHOR,
		/* 46 */ YY_NO_ANCHOR,
		/* 47 */ YY_NO_ANCHOR,
		/* 48 */ YY_NO_ANCHOR,
		/* 49 */ YY_NO_ANCHOR,
		/* 50 */ YY_NO_ANCHOR,
		/* 51 */ YY_NO_ANCHOR,
		/* 52 */ YY_NO_ANCHOR,
		/* 53 */ YY_NO_ANCHOR,
		/* 54 */ YY_NOT_ACCEPT,
		/* 55 */ YY_NO_ANCHOR,
		/* 56 */ YY_NO_ANCHOR,
		/* 57 */ YY_NO_ANCHOR,
		/* 58 */ YY_NO_ANCHOR,
		/* 59 */ YY_NO_ANCHOR,
		/* 60 */ YY_NOT_ACCEPT,
		/* 61 */ YY_NO_ANCHOR,
		/* 62 */ YY_NO_ANCHOR,
		/* 63 */ YY_NOT_ACCEPT,
		/* 64 */ YY_NO_ANCHOR,
		/* 65 */ YY_NO_ANCHOR,
		/* 66 */ YY_NOT_ACCEPT,
		/* 67 */ YY_NO_ANCHOR,
		/* 68 */ YY_NOT_ACCEPT,
		/* 69 */ YY_NO_ANCHOR,
		/* 70 */ YY_NOT_ACCEPT,
		/* 71 */ YY_NO_ANCHOR,
		/* 72 */ YY_NOT_ACCEPT,
		/* 73 */ YY_NO_ANCHOR,
		/* 74 */ YY_NOT_ACCEPT,
		/* 75 */ YY_NO_ANCHOR,
		/* 76 */ YY_NOT_ACCEPT,
		/* 77 */ YY_NO_ANCHOR,
		/* 78 */ YY_NOT_ACCEPT,
		/* 79 */ YY_NO_ANCHOR,
		/* 80 */ YY_NOT_ACCEPT,
		/* 81 */ YY_NO_ANCHOR,
		/* 82 */ YY_NOT_ACCEPT,
		/* 83 */ YY_NO_ANCHOR,
		/* 84 */ YY_NO_ANCHOR,
		/* 85 */ YY_NO_ANCHOR,
		/* 86 */ YY_NO_ANCHOR,
		/* 87 */ YY_NO_ANCHOR,
		/* 88 */ YY_NO_ANCHOR,
		/* 89 */ YY_NO_ANCHOR,
		/* 90 */ YY_NOT_ACCEPT,
		/* 91 */ YY_NO_ANCHOR,
		/* 92 */ YY_NOT_ACCEPT,
		/* 93 */ YY_NO_ANCHOR,
		/* 94 */ YY_NO_ANCHOR,
		/* 95 */ YY_NO_ANCHOR,
		/* 96 */ YY_NO_ANCHOR,
		/* 97 */ YY_NO_ANCHOR,
		/* 98 */ YY_NO_ANCHOR,
		/* 99 */ YY_NO_ANCHOR,
		/* 100 */ YY_NO_ANCHOR,
		/* 101 */ YY_NO_ANCHOR,
		/* 102 */ YY_NO_ANCHOR,
		/* 103 */ YY_NO_ANCHOR,
		/* 104 */ YY_NO_ANCHOR,
		/* 105 */ YY_NO_ANCHOR,
		/* 106 */ YY_NO_ANCHOR,
		/* 107 */ YY_NO_ANCHOR,
		/* 108 */ YY_NO_ANCHOR,
		/* 109 */ YY_NO_ANCHOR,
		/* 110 */ YY_NO_ANCHOR,
		/* 111 */ YY_NO_ANCHOR,
		/* 112 */ YY_NO_ANCHOR,
		/* 113 */ YY_NO_ANCHOR,
		/* 114 */ YY_NO_ANCHOR,
		/* 115 */ YY_NO_ANCHOR,
		/* 116 */ YY_NO_ANCHOR,
		/* 117 */ YY_NO_ANCHOR,
		/* 118 */ YY_NO_ANCHOR,
		/* 119 */ YY_NO_ANCHOR,
		/* 120 */ YY_NO_ANCHOR,
		/* 121 */ YY_NO_ANCHOR,
		/* 122 */ YY_NO_ANCHOR,
		/* 123 */ YY_NO_ANCHOR,
		/* 124 */ YY_NO_ANCHOR,
		/* 125 */ YY_NO_ANCHOR,
		/* 126 */ YY_NO_ANCHOR,
		/* 127 */ YY_NO_ANCHOR
	};
	private int yy_cmap[] = unpackFromString(1,65538,
"8:9,4,5,8:2,1,8:18,4,7,49,8:2,42,44,8,32,33,41,39,34,40,24,2,46:10,31,30,6," +
"43,3,8:2,11,28,9,23,15,20,25,22,19,47,29,10,47,18,17,47,26,14,12,16,27,13,2" +
"1,47:3,37,8,38,8,48,8,11,28,9,23,15,20,25,22,19,47,29,10,47,18,17,47,26,14," +
"12,16,27,13,21,47:3,35,45,36,8:65410,0:2")[0];

	private int yy_rmap[] = unpackFromString(1,128,
"0,1,2,3,4,5,6,1,7,1:10,8,9,10,1,11,12,1:3,13:2,1:7,14,13:3,15,13:11,1,16,17" +
",18,19,1:2,20,21,22,19,23,24,23,25,15,26,27,28,29,30,31,32,33,34,35,36,37,3" +
"8,39,40,41,42,43,44,45,46,29,47,48,49,50,51,13,52,53,54,55,56,57,58,59,60,6" +
"1,62,63,64,65,66,67,68,69,70,71,72,73,13,74,75,76,77,78,79,80,81")[0];

	private int yy_nxt[][] = unpackFromString(82,50,
"1,2,3,4,2:2,5,6,7,8,89,119,121,91,122,123,124,119:2,56,93,125,119,62,9,119:" +
"3,126,119,10,11,12,13,14,15,16,17,18,19,20,21,22,23,55,61,24,119,7,64,-1:51" +
",2,-1:2,2:2,-1:46,54,-1:90,25,-1:13,60,-1:35,26,-1:49,27,-1:15,119,127,94,1" +
"19:5,95,119:6,-1,119:5,-1:16,96,119,96,-1:40,30,-1:50,31,-1:50,32,-1:51,33," +
"-1:30,63,-1:21,24,-1:12,119:15,-1,119:5,-1:16,96,119,96,-1:6,58,-1:47,92,-1" +
":47,37,54:3,58,54:44,-1:44,34,-1:14,119:11,28,119:3,-1,119:5,-1:16,96,119,9" +
"6,-1:47,57,-1:4,90:2,68,90:3,70,90:42,-1:45,35,-1:13,119:6,102,119,29,119:6" +
",-1,119:5,-1:16,96,119,96,-1:2,66:4,-1,66:43,36,-1:9,119:7,38,119:7,-1,119:" +
"5,-1:16,96,119,96,-1:10,119:5,39,119:9,-1,119:5,-1:16,96,119,96,-1:10,119:5" +
",40,119:9,-1,119:5,-1:16,96,119,96,-1:2,90:2,41,90:3,70,90:42,-1:9,119:6,42" +
",119:8,-1,119:5,-1:16,96,119,96,-1:2,90:2,72,90:3,74,90:42,-1:9,119:6,43,11" +
"9:8,-1,119:5,-1:16,96,119,96,-1:2,92:2,59,92:3,76,92:42,-1:9,119:6,44,119:8" +
",-1,119:5,-1:16,96,119,96,-1:2,90:2,41,90:3,74,90:42,-1:9,119:3,45,119:11,-" +
"1,119:5,-1:16,96,119,96,-1:11,80,-1:48,119:7,46,115,119:6,-1,119:5,-1:16,96" +
",119,96,-1:18,82,-1:41,119:6,47,119:8,-1,119:5,-1:16,96,119,96,-1:26,53,-1:" +
"33,119:6,48,119:8,-1,119:5,-1:16,96,119,96,-1:10,119:15,-1,119:4,49,-1:16,9" +
"6,119,96,-1:10,119:13,50,119,-1,119:5,-1:16,96,119,96,-1:10,119:6,51,119:8," +
"-1,119:5,-1:16,96,119,96,-1:10,119:7,52,119:7,-1,119:5,-1:16,96,119,96,-1:1" +
"0,119:15,78,119:5,-1:16,96,119,96,-1:10,119:6,65,119:8,-1,119:5,-1:16,96,11" +
"9,96,-1:10,119:2,67,119:12,-1,119:5,-1:16,96,119,96,-1:2,90:2,68,90:3,74,90" +
":42,-1:9,119:2,101,119:5,69,119:6,-1,119:5,-1:16,96,119,96,-1:10,119:3,71,1" +
"19:11,-1,119:5,-1:16,96,119,96,-1:10,119:9,105,119:5,-1,119:5,-1:16,96,119," +
"96,-1:10,119:10,106,119:4,-1,119:5,-1:16,96,119,96,-1:10,119:15,-1,119,107," +
"119:3,-1:16,96,119,96,-1:10,119:3,73,119:11,-1,119:5,-1:16,96,119,96,-1:10," +
"119:15,-1,119:2,75,119:2,-1:16,96,119,96,-1:10,119,108,119:13,-1,119:5,-1:1" +
"6,96,119,96,-1:10,119:11,110,119:3,-1,119:5,-1:16,96,119,96,-1:10,119:6,111" +
",119:8,-1,119:5,-1:16,96,119,96,-1:10,119:3,77,119:11,-1,119:5,-1:16,96,119" +
",96,-1:10,119:3,79,119:11,-1,119:5,-1:16,96,119,96,-1:10,119:7,112,119:7,-1" +
",119:5,-1:16,96,119,96,-1:10,119:15,-1,119:2,113,119:2,-1:16,96,119,96,-1:1" +
"0,119:3,81,119:11,-1,119:5,-1:16,96,119,96,-1:10,119,83,119:13,-1,119:5,-1:" +
"16,96,119,96,-1:10,119:2,114,119:12,-1,119:5,-1:16,96,119,96,-1:10,119:2,84" +
",119:12,-1,119:5,-1:16,96,119,96,-1:10,85,119:14,-1,119:5,-1:16,96,119,96,-" +
"1:10,119:10,116,119:4,-1,119:5,-1:16,96,119,96,-1:10,119:15,-1,119:2,117,11" +
"9:2,-1:16,96,119,96,-1:10,119,118,119:13,-1,119:5,-1:16,96,119,96,-1:10,119" +
":5,86,119:9,-1,119:5,-1:16,96,119,96,-1:10,119,87,119:13,-1,119:5,-1:16,96," +
"119,96,-1:10,119:6,88,119:8,-1,119:5,-1:16,96,119,96,-1:10,119:10,109,119:4" +
",-1,119:5,-1:16,96,119,96,-1:10,119:12,97,119:2,-1,119:5,-1:16,96,119,96,-1" +
":10,119:6,98,119:8,-1,119:5,-1:16,96,119,96,-1:10,119,99,119:13,-1,119:5,-1" +
":16,96,119,96,-1:10,119:5,100,119:9,-1,119:5,-1:16,96,119,96,-1:10,119:13,1" +
"20,119,-1,119:5,-1:16,96,119,96,-1:10,119:5,103,119:9,-1,119:5,-1:16,96,119" +
",96,-1:10,119:2,104,119:12,-1,119:5,-1:16,96,119,96,-1");

	public java_cup.runtime.Symbol next_token ()
		throws java.io.IOException {
		int yy_lookahead;
		int yy_anchor = YY_NO_ANCHOR;
		int yy_state = yy_state_dtrans[yy_lexical_state];
		int yy_next_state = YY_NO_STATE;
		int yy_last_accept_state = YY_NO_STATE;
		boolean yy_initial = true;
		int yy_this_accept;

		yy_mark_start();
		yy_this_accept = yy_acpt[yy_state];
		if (YY_NOT_ACCEPT != yy_this_accept) {
			yy_last_accept_state = yy_state;
			yy_mark_end();
		}
		while (true) {
			if (yy_initial && yy_at_bol) yy_lookahead = YY_BOL;
			else yy_lookahead = yy_advance();
			yy_next_state = YY_F;
			yy_next_state = yy_nxt[yy_rmap[yy_state]][yy_cmap[yy_lookahead]];
			if (YY_EOF == yy_lookahead && true == yy_initial) {
				return null;
			}
			if (YY_F != yy_next_state) {
				yy_state = yy_next_state;
				yy_initial = false;
				yy_this_accept = yy_acpt[yy_state];
				if (YY_NOT_ACCEPT != yy_this_accept) {
					yy_last_accept_state = yy_state;
					yy_mark_end();
				}
			}
			else {
				if (YY_NO_STATE == yy_last_accept_state) {
					throw (new Error("Lexical Error: Unmatched Input."));
				}
				else {
					yy_anchor = yy_acpt[yy_last_accept_state];
					if (0 != (YY_END & yy_anchor)) {
						yy_move_end();
					}
					yy_to_mark();
					switch (yy_last_accept_state) {
					case 1:
						
					case -2:
						break;
					case 2:
						{}
					case -3:
						break;
					case 3:
						{return new Symbol(sym.E_DIVIDIR,yyline,yychar, yytext());}
					case -4:
						break;
					case 4:
						{return new Symbol(sym.E_MAYOR,yyline,yychar, yytext());}
					case -5:
						break;
					case 5:
						{return new Symbol(sym.E_MENOR,yyline,yychar, yytext());}
					case -6:
						break;
					case 6:
						{return new Symbol(sym.E_NEGAR,yyline,yychar, yytext());}
					case -7:
						break;
					case 7:
						{
    System.out.println("Este es un error lexico: " + yytext()+ " , en la linea: "+yyline+", en la columna: "+yychar);
}
					case -8:
						break;
					case 8:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -9:
						break;
					case 9:
						{return new Symbol(sym.E_PUNTO,yyline,yychar, yytext());}
					case -10:
						break;
					case 10:
						{return new Symbol(sym.E_PYC,yyline,yychar, yytext());}
					case -11:
						break;
					case 11:
						{return new Symbol(sym.E_DOSPUNTOS,yyline,yychar, yytext());}
					case -12:
						break;
					case 12:
						{return new Symbol(sym.E_PARENTESISIZQ,yyline,yychar, yytext());}
					case -13:
						break;
					case 13:
						{return new Symbol(sym.E_PARENTESISDER,yyline,yychar, yytext());}
					case -14:
						break;
					case 14:
						{return new Symbol(sym.E_COMA,yyline,yychar, yytext());}
					case -15:
						break;
					case 15:
						{return new Symbol(sym.E_KEYIZQ,yyline,yychar, yytext());}
					case -16:
						break;
					case 16:
						{return new Symbol(sym.E_KEYDER,yyline,yychar, yytext());}
					case -17:
						break;
					case 17:
						{return new Symbol(sym.E_CORIZQ,yyline,yychar, yytext());}
					case -18:
						break;
					case 18:
						{return new Symbol(sym.E_CORDER,yyline,yychar, yytext());}
					case -19:
						break;
					case 19:
						{return new Symbol(sym.E_MAS,yyline,yychar, yytext());}
					case -20:
						break;
					case 20:
						{return new Symbol(sym.E_MENOS,yyline,yychar, yytext());}
					case -21:
						break;
					case 21:
						{return new Symbol(sym.E_POR,yyline,yychar, yytext());}
					case -22:
						break;
					case 22:
						{return new Symbol(sym.E_MODULO,yyline,yychar, yytext());}
					case -23:
						break;
					case 23:
						{return new Symbol(sym.E_EQUALS,yyline,yychar, yytext());}
					case -24:
						break;
					case 24:
						{return new Symbol(sym.DECI,yyline,yychar, yytext());}
					case -25:
						break;
					case 25:
						{return new Symbol(sym.E_MAYORQUE,yyline,yychar, yytext());}
					case -26:
						break;
					case 26:
						{return new Symbol(sym.E_MENORQUE,yyline,yychar, yytext());}
					case -27:
						break;
					case 27:
						{return new Symbol(sym.E_NOEQUALS,yyline,yychar, yytext());}
					case -28:
						break;
					case 28:
						{return new Symbol(sym.E_IF,yyline,yychar,yytext());}
					case -29:
						break;
					case 29:
						{return new Symbol(sym.E_DO,yyline,yychar,yytext());}
					case -30:
						break;
					case 30:
						{return new Symbol(sym.E_AUMENTO,yyline,yychar, yytext());}
					case -31:
						break;
					case 31:
						{return new Symbol(sym.E_DISMINUIR,yyline,yychar, yytext());}
					case -32:
						break;
					case 32:
						{return new Symbol(sym.E_POTENCIA,yyline,yychar, yytext());}
					case -33:
						break;
					case 33:
						{return new Symbol(sym.E_COMPARAR,yyline,yychar, yytext());}
					case -34:
						break;
					case 34:
						{return new Symbol(sym.E_AND,yyline,yychar, yytext());}
					case -35:
						break;
					case 35:
						{return new Symbol(sym.E_OOR,yyline,yychar, yytext());}
					case -36:
						break;
					case 36:
						{return new Symbol(sym.E_CADENA,yyline,yychar, yytext());}
					case -37:
						break;
					case 37:
						{}
					case -38:
						break;
					case 38:
						{return new Symbol(sym.E_LET,yyline,yychar,yytext());}
					case -39:
						break;
					case 39:
						{return new Symbol(sym.E_VAR,yyline,yychar,yytext());}
					case -40:
						break;
					case 40:
						{return new Symbol(sym.E_FOR,yyline,yychar,yytext());}
					case -41:
						break;
					case 41:
						{}
					case -42:
						break;
					case 42:
						{return new Symbol(sym.E_CASE,yyline,yychar,yytext());}
					case -43:
						break;
					case 43:
						{return new Symbol(sym.E_ELSE,yyline,yychar,yytext());}
					case -44:
						break;
					case 44:
						{return new Symbol(sym.E_TRUE,yyline,yychar, yytext());}
					case -45:
						break;
					case 45:
						{return new Symbol(sym.E_CLASS,yyline,yychar,yytext());}
					case -46:
						break;
					case 46:
						{return new Symbol(sym.E_CONST,yyline,yychar,yytext());}
					case -47:
						break;
					case 47:
						{return new Symbol(sym.E_FALSE,yyline,yychar, yytext());}
					case -48:
						break;
					case 48:
						{return new Symbol(sym.E_WHILE,yyline,yychar,yytext());}
					case -49:
						break;
					case 49:
						{return new Symbol(sym.E_BREAK,yyline,yychar,yytext());}
					case -50:
						break;
					case 50:
						{return new Symbol(sym.E_SWITCH,yyline,yychar,yytext());}
					case -51:
						break;
					case 51:
						{return new Symbol(sym.E_REQUIRE,yyline,yychar,yytext());}
					case -52:
						break;
					case 52:
						{return new Symbol(sym.E_DEFAULT,yyline,yychar,yytext());}
					case -53:
						break;
					case 53:
						{return new Symbol(sym.E_CONSOLE,yyline,yychar,yytext());}
					case -54:
						break;
					case 55:
						{
    System.out.println("Este es un error lexico: " + yytext()+ " , en la linea: "+yyline+", en la columna: "+yychar);
}
					case -55:
						break;
					case 56:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -56:
						break;
					case 57:
						{return new Symbol(sym.DECI,yyline,yychar, yytext());}
					case -57:
						break;
					case 58:
						{}
					case -58:
						break;
					case 59:
						{}
					case -59:
						break;
					case 61:
						{
    System.out.println("Este es un error lexico: " + yytext()+ " , en la linea: "+yyline+", en la columna: "+yychar);
}
					case -60:
						break;
					case 62:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -61:
						break;
					case 64:
						{
    System.out.println("Este es un error lexico: " + yytext()+ " , en la linea: "+yyline+", en la columna: "+yychar);
}
					case -62:
						break;
					case 65:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -63:
						break;
					case 67:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -64:
						break;
					case 69:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -65:
						break;
					case 71:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -66:
						break;
					case 73:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -67:
						break;
					case 75:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -68:
						break;
					case 77:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -69:
						break;
					case 79:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -70:
						break;
					case 81:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -71:
						break;
					case 83:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -72:
						break;
					case 84:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -73:
						break;
					case 85:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -74:
						break;
					case 86:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -75:
						break;
					case 87:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -76:
						break;
					case 88:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -77:
						break;
					case 89:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -78:
						break;
					case 91:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -79:
						break;
					case 93:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -80:
						break;
					case 94:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -81:
						break;
					case 95:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -82:
						break;
					case 96:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -83:
						break;
					case 97:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -84:
						break;
					case 98:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -85:
						break;
					case 99:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -86:
						break;
					case 100:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -87:
						break;
					case 101:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -88:
						break;
					case 102:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -89:
						break;
					case 103:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -90:
						break;
					case 104:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -91:
						break;
					case 105:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -92:
						break;
					case 106:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -93:
						break;
					case 107:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -94:
						break;
					case 108:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -95:
						break;
					case 109:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -96:
						break;
					case 110:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -97:
						break;
					case 111:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -98:
						break;
					case 112:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -99:
						break;
					case 113:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -100:
						break;
					case 114:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -101:
						break;
					case 115:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -102:
						break;
					case 116:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -103:
						break;
					case 117:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -104:
						break;
					case 118:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -105:
						break;
					case 119:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -106:
						break;
					case 120:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -107:
						break;
					case 121:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -108:
						break;
					case 122:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -109:
						break;
					case 123:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -110:
						break;
					case 124:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -111:
						break;
					case 125:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -112:
						break;
					case 126:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -113:
						break;
					case 127:
						{return new Symbol(sym.IDENTIFICADOR,yyline,yychar, yytext());}
					case -114:
						break;
					default:
						yy_error(YY_E_INTERNAL,false);
					case -1:
					}
					yy_initial = true;
					yy_state = yy_state_dtrans[yy_lexical_state];
					yy_next_state = YY_NO_STATE;
					yy_last_accept_state = YY_NO_STATE;
					yy_mark_start();
					yy_this_accept = yy_acpt[yy_state];
					if (YY_NOT_ACCEPT != yy_this_accept) {
						yy_last_accept_state = yy_state;
						yy_mark_end();
					}
				}
			}
		}
	}
}
