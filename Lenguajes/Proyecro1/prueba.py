import ErrorPDF
import TokensPDF
import GRuta
import pre2

'''Entry = input('Ingresa la ruta del archivo: ')
file = open(Entry, "r")
lines = file.readlines()
Row = 0
Column = -1
state = 0
chain = ''
concatenar = ''
# -----------------------------------------------
# Errores
desc = 'Desconocido'
charStack = []
rowStack = []
columnStack = []
descStack = []
# -----------------------------------------------
# Tokens
lblStack = []
valStack = []
pesStack = []
colorStack = []
Label = 'Etiqueta'
Value = 'Valor'
Peso = 'Peso'
Color = 'Color'
lStack = []
eStack = []
vStack = []
pStack = []
cStack = []
fStack = []
colStack = []
# -------------------------------------------------
for line in lines:
    Row = Row + 1
    cad = line.replace(' ', '')
    c = cad.replace('\n', '')
    f = c.replace('<', ' <')
    g = f.replace('>', '> ')
    t = g.replace('\n', '')
    for character in t:
        Column = Column + 1
        if character == '\n' or character == ' ':
            if state == 2 or state == 1 or state == 3 or state == 4:
                if state == 1:
                    print('T_Label: ', chain, 'Fila :', Row, 'Columna', Column)
                    lStack.append(chain)
                    fStack.append(Row)
                    colStack.append(Column)
                    lblStack.append(Label)
                    TokensPDF.Tokens(lStack, fStack, colStack, lblStack)
                elif state == 2:
                    if 'ruta' in chain.lower():
                        print('T_Ruta:', chain, 'Fila :', Row, 'Columna', Column)
                    elif 'estacion' in chain.lower():
                        print('T_Station:', chain, 'Fila :', Row, 'Columna', Column)
                        eStack.append(chain.lower())

                    elif 'disponible' in chain.lower() or 'cerrada' in chain.lower():
                        print('T_Status:', chain, 'Fila :', Row, 'Columna', Column)

                    elif 'mapa' in chain.lower():
                        concatenar = concatenar + chain
                        concatenar = concatenar + " "

                    if 'central' in chain.lower():
                        concatenar = concatenar + chain
                        print('T_Mapa:', concatenar, 'Fila :', Row, 'Columna', Column)

                elif state == 3:
                    print('T_Peso: ', chain, 'Fila :', Row, 'Columna', Column)
                elif state == 4:
                    print('T_Color: ', chain, 'Fila :', Row, 'Columna', Column)
                print('')
            else:
                print('')
            state = 0
            chain = ''
            Column = 0
            continue
        chain = chain + character

        if state == 0:
            if 65 <= ord(character) <= 122:  # es letter
                state = 2
            elif 48 <= ord(character) <= 57:  # es Digit
                state = 3
            elif character == '<' or character == '>':
                state = 1
            elif character == '#':
                state = 4
            else:
                print('')

        if state == 1:
            if 65 <= ord(character) <= 122:  # es letter
                state = 1
            elif character == '<' or character == '>':
                state = 1
            elif character == '/':
                state = 1
            else:
                print('')

        elif state == 2:
            if 65 <= ord(character) <= 122:  # es letter
                state = 2
            elif 48 <= ord(character) <= 57:  # es digit
                state = 2
            elif character == '_':
                state = 2
            else:
                print('')

        elif state == 4:
            if 65 <= ord(character) <= 122:  # es letter
                state = 4
            elif 48 <= ord(character) <= 57:  # es digit
                state = 4
            else:
                print('')

    if state == 2 or state == 1 or state == 3 or state == 4:
        if state == 1:
            print('T_Label: ', chain, 'Fila :', Row, 'Columna', Column)
            lStack.append(chain)
            fStack.append(Row)
            colStack.append(Column)
            lblStack.append(Label)
            TokensPDF.Tokens(lStack, fStack, colStack, lblStack)
        elif state == 2:
            if 'ruta' in chain.lower():
                print('T_Ruta:', chain, 'Fila :', Row, 'Columna', Column)

            if 'estacion' in chain.lower():
                print('T_Station:', chain, 'Fila :', Row, 'Columna', Column)
                eStack.append(chain.lower())

            if 'disponible' in chain.lower() or 'cerrada' in chain.lower():
                print('T_Status:', chain, 'Fila :', Row, 'Columna', Column)

        elif state == 3:
            print('T_Peso: ', chain, 'Fila :', Row, 'Columna', Column)
        elif state == 4:
            print('T_Color: ', chain, 'Fila :', Row, 'Columna', Column)
        print(' ')
    else:
        print('--> Cadena:', chain, 'invalida, Fila :', Row, 'Columna', Column, 'Descipcion: ', desc)
        charStack.append(chain)
        rowStack.append(Row)
        columnStack.append(Column)
        descStack.append(desc)
        ErrorPDF.Error(rowStack, columnStack, charStack, descStack)

    state = 0
    chain = ''
    Column = 0
    GRuta.value = eStack'''
