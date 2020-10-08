import pandas as pd
import numpy as np
import GRuta
import Mapa


class Data:

    def Load(self):
        try:
            Entry = input('Ingresa la ruta del archivo: ')
            file = open(Entry, "r")
            lines = file.readlines()
            Row = 0
            Column = -1
            state = 0
            chain = ''
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
            Label = 'Etiqueta'
            lStack = []
            vStack = []
            fStack = []
            colStack = []
            # -------------------------------------------------
            for line in lines:
                Row = Row + 1
                cad = line.replace(' ', '')
                c = cad.replace('\n', '')
                f = c.replace('<', '\n<')
                g = f.replace('>', '>\n')
                for character in g:
                    Column = Column + 1
                    if character == ' ' or character == '\n':
                        if state == 2 or state == 1 or state == 3 or state == 4:
                            if state == 1:
                                print('T_Label: ', chain, 'Fila :', Row, 'Columna', Column)
                                lStack.append(chain)
                                fStack.append(Row)
                                colStack.append(Column)
                                lblStack.append(Label)
                                Tokens(lStack, fStack, colStack, lblStack)
                            elif state == 2:
                                print('T_Valor: ', chain, 'Fila :', Row, 'Columna', Column)
                                vStack.append(chain.lower())
                                GRuta.value = vStack
                            elif state == 3 or state == 4:
                                print('T_Valor: ', chain, 'Fila :', Row, 'Columna', Column)
                                vStack.append(chain)
                                GRuta.value = vStack
                                Mapa.val = vStack
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

                    elif state == 3:
                        if character.isdigit():  # es digit
                            state = 3
                        elif character == '.':
                            state = 3
                        else:
                            print('')

                    elif state == 4:
                        if 65 <= ord(character) <= 122:  # es letter
                            state = 4
                        elif 48 <= ord(character) <= 57:  # es digit
                            state = 4
                        else:
                            print('')
                    else:
                        print('Nothing ', character + ' Fila ', Row, ' Columna ', Column)
                        charStack.append(character)
                        rowStack.append(Row)
                        columnStack.append(Column)
                        descStack.append(desc)
                        Error(rowStack, columnStack, charStack, descStack)

        except:
            print('Documento incorrecto')


def Error(fila, columna, caracter, descripcion):
    Table = {'Fila': fila, 'Columna': columna, 'Caracter': caracter, 'Descripcion': descripcion}
    df = pd.DataFrame(data=Table)
    txtHTML = df.to_html()
    file = open('TablaErrores.html', 'w')
    file.write(txtHTML)
    file.close()


def Tokens(token, fila, columna, tokenO):
    Table = {'Lexema': token, 'Fila': fila, 'Columna': columna, 'Token': tokenO}
    df = pd.DataFrame(data=Table)
    txtHTML = df.to_html()
    file = open('TablaCompleta.html', 'w')
    file.write(txtHTML)
    file.close()
