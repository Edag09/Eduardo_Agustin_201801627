class Extra:

    def __init__(self):  # Constructor
        self.text = ''
        self.lexeme = ''
        self.apendice_colores = ['azul', 'azul2', 'azul3', 'rojo', 'rojo2', 'rojo3', 'amarillo', 'amarillo2',
                                 'amarillo3', 'anaranjado', 'anaranjado2', 'anaranjado3', 'cafe', 'cafe2', 'cafe3',
                                 'gris', 'gris2', 'gris3', 'morado', 'morado2', 'morado3', 'verde', 'verde2', 'verde3',
                                 'blanco', '#']

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
                    self.lexeme = ''

                    aux = self.Open(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == '(':
                        print('Token_Apertura: ' + self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break

                    aux = self.title(i)
                    print('Token_Titulo: ' + self.lexeme)
                    # if (self.lexema[0] == "'"):
                    #   print('token')
                    # else:
                    #   print("error - Nombre Lista")
                    # #break
                    i = aux
                    self.lexeme = ''

                    aux = self.comas(i)
                    i = aux
                    if self.text[i] == ',':
                        print('Token_Coma: ' + self.lexeme)
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break
                    self.lexeme = ''

                    aux = self.Letras(i)
                    print('Token_Figura: ' + self.lexeme)
                    i = aux
                    # si self.lexema = lista de figuras:
                    # impresion de token, pd NO TENES QUE INCREMENTAR LA I PENDEJO :)
                    # si nel
                    # imprimir error y break
                    self.lexeme = ''

                    aux = self.comas(i)
                    i = aux
                    if self.text[i] == ',':
                        print('Token_Coma: ' + self.lexeme)
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break
                    self.lexeme = ''

                    aux = self.Letras(i)
                    i = aux
                    if self.lexeme.lower() == 'verdadero' or self.lexeme.lower() == 'falso':
                        print('Token_Lista: ' + self.lexeme)
                    else:
                        print(f'error: {self.text[i]}')
                        break
                    self.lexeme = ''

                    aux = self.Close(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == ')':
                        print('Token_Cerradura: ' + self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break

                    aux = self.Open_Cad(i)
                    i = aux
                    if self.text[i] == '{':
                        print('Token_Abrir: ' + self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break
                    self.lexeme = ''
                    aux = self.elemento_list(i)

                    if self.text[aux] == '}':
                        i = aux
                    else:
                        print('error RCURSIVO')
                        break

                    aux = self.Close_Cad(i)
                    i = aux
                    if self.text[i] == '}':
                        print('Token_Cerrar: ' + self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
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
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break

                    aux = self.Value(i)
                    print('Token_Valor: ' + self.lexeme)
                    i = aux
                    self.lexeme = ''

                    aux = self.Close(i)
                    i = aux
                    self.lexeme = ''
                    if self.text[i] == ')':
                        print('Token_Cerradura: ' + self.text[i])
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break

                    aux = self.Color(i)
                    i = aux
                    if self.lexeme in self.apendice_colores:

                        print('Token_Color: ' + self.lexeme)
                        self.lexeme = ''
                    else:
                        break

                    aux = self.PyC(i)
                    i = aux
                    if self.text[i] == ';':
                        print('Token_Punto_y_Coma: ' + self.text[i])
                        self.lexeme = ''
                        i += 1
                    else:
                        print(f'error: {self.text[i]}')
                        break

                else:
                    print(f'Error: {self.lexeme}')
                    break

            i += 1

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
            if self.text[i] == "'" or self.text[i] == '>' or self.text[i] == '<' or self.text[i] == '(' \
                    or self.text[i] == ')' or self.text[i] == '*' or self.text[i] == '*' or self.text[i].isalpha():
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
            if self.text[i] == "'" or self.text[i].isalpha() or self.text[i] == '#':
                self.lexeme += self.text[i]
            elif self.text[i] == ' ':
                pass
            else:
                return i
            i += 1
        return i

    def Color(self, i):
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
            elif self.text[i] == ' ':
                pass
            else:
                return i
            i += 1
        return i

    def Commentary(self, i):
        while i < len(self.text):
            if self.text[i] == ' ':
                pass
            elif self.text[i] == '/' or self.text[i].isalpha():
                self.lexeme += self.text[i]
            else:
                return i
            i += 1
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

    def elemento_list(self, i):
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
                i += 1
            else:
                print(f'error token: {self.text[i]}')
                return i

            aux = self.Value(i)
            print('Token_Valor: ' + self.lexeme)
            i = aux
            self.lexeme = ''

            aux = self.Close(i)
            i = aux
            self.lexeme = ''
            if self.text[i] == ')':
                print('Token_Cerradura: ' + self.text[i])
                i += 1
            else:
                print(f'error: {self.text[i]}')
                return i

            aux = self.Color(i)
            i = aux
            if self.lexeme in self.apendice_colores:
                print('Token_Color: ' + self.lexeme)
                self.lexeme = ''
            else:
                return i

            aux = self.PyC(i)
            i = aux
            if self.text[i] == ';':
                print('Token_Punto_y_Coma: ' + self.text[i])
                self.lexeme = ''
                i += 1
            else:
                print(f'error: {self.text[i]}')
                return i

            aux = self.elemento_list(i)
            return aux

        # elif self.lexeme == 'nodos':
        # pass
        elif self.text[i] == '}':
            return i
        else:
            return i

    '''i = 0
    while i < aux :
        nombre = color + (i+1)
        persona1
        persona2
        i += 1
    '''


var = Extra()
var._file_upload()
