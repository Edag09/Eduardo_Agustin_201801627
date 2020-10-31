import pandas as pd
import numpy as np
import Graficas


class sintaxis:

    def __init__(self):  # Constructor
        self.text = ''
        self.lexeme = ''
        self.stack_color = ['azul', 'azul2', 'azul3', 'rojo', 'rojo2', 'rojo3', 'amarillo', 'amarillo2',
                            'amarillo3', 'anaranjado', 'anaranjado2', 'anaranjado3', 'cafe', 'cafe2', 'cafe3',
                            'gris', 'gris2', 'gris3', 'morado', 'morado2', 'morado3', 'verde', 'verde2', 'verde3',
                            'blanco', '#']
        self.stack_figure = ['circulo', 'rectangulo', 'triangulo', 'punto', 'hexagono', 'diamante']

        self.stack_value = []
        self.stack_Color = []
        self.stack_Figure = []
        self.stack_list = []
        self.stack_error = []
        self.stack_open = []
        self.stack_close = []
        self.stack_openCad = []
        self.stack_closeCad = []
        self.stack_puntoyComa = []
        self.stack_tokens = []
        # ------------------------------------Valores Nodos----------------------------
        self.stack_valueNode = []
        self.number = ''

    def _file_upload(self):
        Entry = input('Ingresa la ruta del archivo: ')
        file = open(Entry, "r", encoding='UTF=8')
        lines = file.readlines()
        file.close()

        i = 0
        self.text = ''
        for linea in lines:
            self.text += linea
        while i < len(self.text):
            if self.text[i].isalpha():
                self.lexeme += self.text[i]
                i += 1
                aux = self.get_Title(i)
                i = aux
                if self.lexeme.lower() == 'lista':
                    print('Token_Tipo: ' + self.lexeme)
                    self.stack_value.append(self.lexeme)
                    self.stack_tokens.append(self.lexeme)

                    aux = self.Open(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == '(':
                        print('Token_Apertura: ' + self.text[i])
                        self.stack_open.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        break

                    aux = self.title(i)
                    self.stack_value.append(self.lexeme)
                    self.stack_tokens.append(self.lexeme)
                    i = aux
                    print('Token_Titulo: ' + self.lexeme)
                    self.lexeme = ''

                    aux = self.comas(i)
                    i = aux
                    if self.text[i] == ',':
                        i += 1
                        print('Token_Coma: ' + self.lexeme)
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''

                    aux = self.Letras(i)
                    i = aux
                    if self.lexeme.lower() in self.stack_figure:
                        print('Token_Figura: ' + self.lexeme)
                        self.stack_Figure.append(self.lexeme)
                        self.stack_tokens.append(self.lexeme)
                    else:
                        print(f'error: {self.lexeme}')
                        self.stack_error.append(self.lexeme)
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''

                    aux = self.comas(i)
                    i = aux
                    if self.text[i] == ',':
                        print('Token_Coma: ' + self.lexeme)
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''

                    aux = self.Letras(i)
                    i = aux
                    if self.lexeme.lower() == 'verdadero' or self.lexeme.lower() == 'falso':
                        print('Token_Lista: ' + self.lexeme)
                        self.stack_list.append(self.lexeme)
                        self.stack_tokens.append(self.lexeme)
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''

                    aux = self.Close(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == ')':
                        print('Token_Cerradura: ' + self.text[i])
                        self.stack_close.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Open_Cad(i)
                    i = aux
                    if self.text[i] == '{':
                        print('Token_Abrir: ' + self.text[i])
                        self.stack_openCad.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''
                    aux = self.element_list(i)

                    if self.text[aux] == '}':
                        i = aux
                    else:
                        print('error RCURSIVO')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Close_Cad(i)
                    i = aux
                    if self.text[i] == '}':
                        print('Token_Cerrar: ' + self.text[i])
                        self.stack_closeCad.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''

                    aux = self.Letras(i)
                    print('Token_Defecto: ' + self.lexeme)
                    i = aux
                    self.lexeme = ''

                    aux = self.Open(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == '(':
                        print('Token_Apertura: ' + self.text[i])
                        self.stack_open.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Value(i)
                    print('Token_Valor: ' + self.lexeme)
                    self.stack_value.append(self.lexeme)
                    self.stack_tokens.append(self.lexeme)
                    i = aux
                    self.lexeme = ''

                    aux = self.Close(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == ')':
                        print('Token_Cerradura: ' + self.text[i])
                        self.stack_close.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Color(i)
                    i = aux
                    if self.lexeme in self.stack_color:

                        print('Token_Color: ' + self.lexeme)
                        self.stack_Color.append(self.lexeme)
                        self.stack_tokens.append(self.lexeme)
                        self.lexeme = ''
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.PyC(i)
                    i = aux
                    if self.text[i] == ';':
                        print('Token_Punto_y_Coma: ' + self.text[i])
                        self.stack_puntoyComa.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        self.lexeme = ''
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                elif self.lexeme == 'tabla':
                    print('Token_Tipo: ' + self.lexeme)
                    self.stack_value.append(self.lexeme)
                    self.stack_tokens.append(self.lexeme)

                    aux = self.Open(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == '(':
                        print('Token_Apertura: ' + self.text[i])
                        self.stack_open.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        break

                    aux = self.Value_Digit(i)
                    print('Token_Numero: ' + self.lexeme)
                    self.stack_tokens.append(self.lexeme)
                    i = aux
                    self.lexeme = ''

                    aux = self.comas(i)
                    i = aux
                    if self.text[i] == ',':
                        print('Token_Coma: ' + self.lexeme)
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''

                    aux = self.title(i)
                    print('Token_Titulo: ' + self.lexeme)
                    self.stack_value.append(self.lexeme)
                    self.stack_tokens.append(self.lexeme)
                    i = aux
                    self.lexeme = ''

                    aux = self.Close(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == ')':
                        print('Token_Cerradura: ' + self.text[i])
                        self.stack_close.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Open_Cad(i)
                    i = aux
                    if self.text[i] == '{':
                        print('Token_Abrir: ' + self.text[i])
                        self.stack_openCad.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''
                    aux = self.element_list(i)

                    if self.text[aux] == '}':
                        i = aux
                    else:
                        print('error RCURSIVO')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Close_Cad(i)
                    i = aux
                    if self.text[i] == '}':
                        print('Token_Cerrar: ' + self.text[i])
                        self.stack_closeCad.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                    self.lexeme = ''

                    aux = self.Letras(i)
                    print('Token_Defecto: ' + self.lexeme)
                    i = aux
                    self.lexeme = ''

                    aux = self.Open(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == '(':
                        print('Token_Apertura: ' + self.text[i])
                        self.stack_open.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Value(i)
                    print('Token_Valor: ' + self.lexeme)
                    self.stack_value.append(self.lexeme)
                    self.stack_tokens.append(self.lexeme)
                    i = aux
                    self.lexeme = ''

                    aux = self.Close(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == ')':
                        print('Token_Cerradura: ' + self.text[i])
                        self.stack_close.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.Color(i)
                    i = aux
                    if self.lexeme in self.stack_color:

                        print('Token_Color: ' + self.lexeme)
                        self.stack_Color.append(self.lexeme)
                        self.stack_tokens.append(self.lexeme)
                        self.lexeme = ''
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break

                    aux = self.PyC(i)
                    i = aux
                    if self.text[i] == ';':
                        print('Token_Punto_y_Coma: ' + self.text[i])
                        self.stack_puntoyComa.append(self.text[i])
                        self.stack_tokens.append(self.text[i])
                        self.lexeme = ''
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        self.stack_error.append(self.text[i])
                        self.Error(self.stack_error)
                        break
                else:
                    print(f'Error: {self.lexeme}')
                    self.stack_error.append(self.lexeme)
                    self.Error(self.stack_error)

                    break

            i += 1
        self.Tokens(self.stack_tokens)
        Graficas.graph(self, self.stack_valueNode, self.stack_Color, self.stack_Figure)

    def get_Title(self, i):
        while i < len(self.text):
            if self.text[i].isalpha():
                self.lexeme += self.text[i]
            else:
                return i
            i += 1
        return i

    def Open(self, i):
        while i < len(self.text):
            if self.text[i] == '(':
                self.lexeme += self.text[i]
                return i
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        return i

    def title(self, i):
        while i < len(self.text):
            if self.text[i] == "'" or self.text[i] == '>' or self.text[i] == '<' \
                    or self.text[i] == '*' or self.text[i] == '*' or self.text[i].isalpha():
                self.lexeme += self.text[i]
            elif self.text[i] == ' ':
                pass
            else:
                return i
            i += 1
        return i

    def comas(self, i):
        while i < len(self.text):
            if self.text[i] == ',':
                self.lexeme += self.text[i]
                return i
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        return i

    def Letras(self, i):
        while i < len(self.text):
            if self.text[i].isalpha():
                self.lexeme += self.text[i]
                i += 1
                break
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        while i < len(self.text):
            if self.text[i].isalpha():
                self.lexeme += self.text[i]
            else:
                return i

            i += 1

        return i

    def Close(self, i):
        while i < len(self.text):
            if self.text[i] == ')':
                self.lexeme += self.text[i]
                return i
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        return i

    def Open_Cad(self, i):
        while i < len(self.text):
            if self.text[i] == '{':
                self.lexeme += self.text[i]
                return i
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        return i

    def Value(self, i):
        while i < len(self.text):
            if self.text[i] == "'" or self.text[i].isalpha() or self.text[i] == '#' or self.text[i].isdigit() or self.text[i] == '-'\
                    or self.text[i] == '.':
                self.lexeme += self.text[i]
            elif self.text[i] == ' ':
                pass
            else:
                return i
            i += 1
        return i

    def Color(self, i):
        while i < len(self.text):
            if self.text[i].isalpha() or self.text[i] == '#':
                self.lexeme += self.text[i]
                i += 1
                break
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        while i < len(self.text):
            if self.text[i].isalpha() or self.text[i].isdigit():
                self.lexeme += self.text[i]
            else:
                return i

            i += 1

        return i

    def PyC(self, i):
        while i < len(self.text):
            if self.text[i] == ';':
                self.lexeme += self.text[i]
                return i
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        return i

    def Value_Digit(self, i):
        while i < len(self.text):
            if self.text[i].isdigit():
                self.lexeme += self.text[i]
                i += 1
                break
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        while i < len(self.text):
            if self.text[i].isdigit():
                self.lexeme += self.text[i]
            else:
                return i

            i += 1

        return i

    def Commentary(self, i):
        while i < len(self.text):
            if self.text[i] == '/' and self.text[i + 1] == '/':
                self.lexeme += self.text[i]
                return i
            else:
                if self.text[i] == '\n' or self.text[i] == ' ':
                    return i
                else:
                    return i
        return i

    def Close_Cad(self, i):
        while i < len(self.text):
            if self.text[i] == '}':
                self.lexeme += self.text[i]
                return i
            else:
                if self.text[i] == ' ' or self.text[i] == '\n':
                    pass
                else:
                    return i
            i += 1
        return i

    def Defect(self, i):
        while i < len(self.text):
            if self.text[i] == ' ':
                pass
            elif self.text[i].isalpha():
                self.lexeme += self.text[i]
            else:
                return i
            i += 1
        return i

    def Value_D(self, i):
        while i < len(self.text):
            if self.text[i] == ' ':
                pass
            elif self.text[i] == "'" or self.text[i].isalpha():
                self.lexeme += self.text[i]
            else:
                return i
            i += 1
        return i

    # ---------------------------------------------MATRIZ-----------------------------------------------------------------------

    # ------------------------------------------------TABLA---------------------------------------------

    # --------------------------------------------------Componentes-------------------------------------

    def element_list(self, i):
        self.lexeme = ''
        while i < len(self.text):
            variable = self.text[i]

            if variable.isalpha():
                self.lexeme += variable
                i += 1
                break
            else:
                if variable == ' ' or variable == '\n':
                    pass
                else:
                    break
            i += 1

        while i < len(self.text):
            variable = self.text[i]
            if variable.isalpha():
                self.lexeme += variable
            else:
                break
            i += 1

        if self.lexeme == 'nodo':
            print('Token_Nodo: ' + self.lexeme)
            self.lexeme = ''
            aux = self.Open(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == '(':
                print('Token_Apertura: ' + self.text[i])
                self.stack_open.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error token: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.Close(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == ')':
                print('Token_Cerradura: ' + self.text[i])
                self.stack_close.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Color(i)
            i = aux
            if self.lexeme in self.stack_color:
                print('Token_Color: ' + self.lexeme)
                self.stack_Color.append(self.lexeme)
                self.stack_tokens.append(self.lexeme)
                self.lexeme = ''
            else:
                return i

            aux = self.PyC(i)
            i = aux
            if self.text[i] == ';':
                print('Token_Punto_y_Coma: ' + self.text[i])
                self.stack_puntoyComa.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                self.lexeme = ''
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.element_list(i)
            return aux

        elif self.lexeme == 'nodos':
            print('Token_Nodos: ' + self.lexeme)
            self.lexeme = ''
            aux = self.Open(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == '(':
                print('Token_Apertura: ' + self.text[i])
                self.stack_open.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error token: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Value_Digit(i)
            print('Token_Numero: ' + self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.comas(i)
            i = aux
            if self.text[i] == ',':
                print('Token_Coma: ' + self.lexeme)
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i
            self.lexeme = ''

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.Close(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == ')':
                print('Token_Cerradura: ' + self.text[i])
                self.stack_close.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Color(i)
            i = aux
            if self.lexeme.lower() in self.stack_color:
                print('Token_Color: ' + self.lexeme)
                self.stack_Color.append(self.lexeme)
                self.stack_tokens.append(self.lexeme)
                self.lexeme = ''
            else:
                return i

            aux = self.PyC(i)
            i = aux
            if self.text[i] == ';':
                print('Token_Punto_y_Coma: ' + self.text[i])
                self.stack_puntoyComa.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                self.lexeme = ''
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.element_list(i)
            return aux

        elif self.lexeme == 'fila':
            print('Token_Fila: ' + self.lexeme)
            self.lexeme = ''
            aux = self.Open(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == '(':
                print('Token_Apertura: ' + self.text[i])
                self.stack_open.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error token: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.comas(i)
            i = aux
            if self.text[i] == ',':
                print('Token_Coma: ' + self.lexeme)
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i
            self.lexeme = ''

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.comas(i)
            i = aux
            if self.text[i] == ',':
                print('Token_Coma: ' + self.lexeme)
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i
            self.lexeme = ''

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.Close(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == ')':
                print('Token_Cerradura: ' + self.text[i])
                self.stack_close.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Color(i)
            i = aux
            if self.lexeme.lower() in self.stack_color:
                print('Token_Color: ' + self.lexeme)
                self.stack_Color.append(self.lexeme)
                self.stack_tokens.append(self.lexeme)
                self.lexeme = ''
            else:
                return i

            aux = self.PyC(i)
            i = aux
            if self.text[i] == ';':
                print('Token_Punto_y_Coma: ' + self.text[i])
                self.stack_puntoyComa.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                self.lexeme = ''
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.element_list(i)
            return aux

        elif self.lexeme.lower() == 'encabezados':
            print('Token_Encabezado: ' + self.lexeme)
            self.lexeme = ''
            aux = self.Open(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == '(':
                print('Token_Apertura: ' + self.text[i])
                self.stack_open.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error token: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.comas(i)
            i = aux
            if self.text[i] == ',':
                print('Token_Coma: ' + self.lexeme)
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i
            self.lexeme = ''

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.comas(i)
            i = aux
            if self.text[i] == ',':
                print('Token_Coma: ' + self.lexeme)
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i
            self.lexeme = ''

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            self.stack_valueNode.append(self.lexeme)
            self.stack_tokens.append(self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.Close(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == ')':
                print('Token_Cerradura: ' + self.text[i])
                self.stack_close.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.Color(i)
            i = aux
            if self.lexeme.lower() in self.stack_color:
                print('Token_Color: ' + self.lexeme)
                self.stack_Color.append(self.lexeme)
                self.stack_tokens.append(self.lexeme)
                self.lexeme = ''
            else:
                return i

            aux = self.PyC(i)
            i = aux
            if self.text[i] == ';':
                print('Token_Punto_y_Coma: ' + self.text[i])
                self.stack_puntoyComa.append(self.text[i])
                self.stack_tokens.append(self.text[i])
                self.lexeme = ''
                i += 1
            else:
                print(f'error: {self.text[i]}')
                self.stack_error.append(self.text[i])
                self.Error(self.stack_error)
                return i

            aux = self.element_list(i)
            return aux

        elif self.text[i] == '}':
            return i
        else:
            return i

    # ----------------------------------MetodosHTML----------------------------------

    def Error(self, error):
        Table = {'Error': error}
        df = pd.DataFrame(data=Table)
        txtHTML = df.to_html()
        file = open('TablaErrores.html', 'w')
        file.write(txtHTML)
        file.close()

    def Tokens(self, token):
        Table = {'Tokens': token}
        df = pd.DataFrame(data=Table)
        txtHTML = df.to_html()
        file = open('TablaTokens.html', 'w')
        file.write(txtHTML)
        file.close()


var = sintaxis()
var._file_upload()
