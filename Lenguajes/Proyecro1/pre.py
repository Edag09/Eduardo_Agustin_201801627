import PDFErrores
import PDFTokens

Entry = input('Ingresa la ruta del archivo: ')
file = open(Entry, "r")
lines = file.readlines()
Row = 0
Column = -1
state = 0
chain = ''
#Errores
desc = 'Desconocido'
charStack = []
rowStack = []
columnStack = []
descStack = []
#Tokens
lStack = []
vStack = []
pStack = []
cStack = []
label = 'Etiqueta'
val = 'Valor'
peso = 'Peso'
color = 'Color'
ftStack = []
ctStack = []
ltStack = []
for line in lines:
    Row = Row + 1
    for character in line:
        Column = Column + 1
        if character == '\n':
            continue
        elif character == ' ':
            if state == 0:
                continue
            if state == 2 or state == 1 or state == 3 or state == 4:
                if state == 1:
                    print('T_Label: ', chain, 'Fila :', Row, 'Columna', Column)
                    ltStack.append(chain.lower())
                    ftStack.append(Row)
                    ctStack.append(Column)
                    lStack.append(label)
                    PDFTokens.Tokens(ltStack, ftStack, ctStack, lStack)
                elif state == 2:
                    if 'ruta' in chain.lower():
                        print('T_Ruta:', chain, 'Fila :', Row, 'Columna', Column)

                    elif 'estacion' in chain.lower():
                        print('T_Estacion:', chain, 'Fila :', Row, 'Columna', Column)

                    elif 'disponible' in chain.lower() or 'cerrada' in chain.lower():
                        print('T_Estado:', chain, 'Fila :', Row, 'Columna', Column)

                    elif 'Mapa' in chain:
                        print('T_Mapa:', chain, 'Fila :', Row, 'Columna', Column)

                    else:
                        print('Error', chain)
                elif state == 3:
                    print('T_Peso: ', chain, 'Fila :', Row, 'Columna', Column)
                    #ltStack.append(chain.lower())
                    #ftStack.append(Row)
                    #ctStack.append(Column)
                    #PDFTokens.Tokens(ltStack, ftStack, ctStack, pStack)
                elif state == 4:
                    print('T_Color: ', chain, 'Fila :', Row, 'Columna', Column)
                    #ltStack.append(chain.lower())
                    #ftStack.append(Row)
                    #ctStack.append(Column)
                    #PDFTokens.Tokens(ltStack, ftStack, ctStack, cStack)
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

        elif state == 1:
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
            ltStack.append(chain.lower())
            ftStack.append(Row)
            ctStack.append(Column)
            lStack.append(label)
            PDFTokens.Tokens(ltStack, ftStack, ctStack, lStack)
        elif state == 2:
            if 'ruta' in chain.lower():
                print('T_Ruta:', chain, 'Fila :', Row, 'Columna', Column)

            elif 'estacion' in chain.lower():
                print('T_Estacion:', chain, 'Fila :', Row, 'Columna', Column)

            elif 'disponible' in chain.lower() or 'cerrada' in chain.lower():
                print('T_Estado:', chain, 'Fila :', Row, 'Columna', Column)

            elif 'Mapa' in chain:
                print('T_Mapa:', chain, 'Fila :', Row, 'Columna', Column)
            else:
                print('error', chain)
        elif state == 3:
            print('T_Peso: ', chain, 'Fila :', Row, 'Columna', Column)
            #ltStack.append(chain.lower())
            #ftStack.append(Row)
            #ctStack.append(Column)
            #PDFTokens.Tokens(ltStack, ftStack, ctStack, pStack)
        elif state == 4:
            print('T_Color: ', chain, 'Fila :', Row, 'Columna', Column)
            #ltStack.append(chain.lower())
            #ftStack.append(Row)
            #ctStack.append(Column)
            #PDFTokens.Tokens(ltStack, ftStack, ctStack, cStack)
        print(' ')
    else:
        print('--> Cadena:', chain, 'invalida, Fila :', Row, 'Columna', Column, 'Descipcion: ', desc)
        charStack.append(chain)
        rowStack.append(Row)
        columnStack.append(Column)
        descStack.append(desc)
        PDFErrores.Error(rowStack, columnStack, charStack, descStack)

    state = 0
    chain = ''
    Column = 0