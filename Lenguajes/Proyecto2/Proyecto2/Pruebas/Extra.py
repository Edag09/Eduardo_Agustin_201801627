class Extra:

    def __init__(self):  # Constructor
        self.text = ''
        self.lexeme = ''

    def upload(self):
        Entry = input('Ingresa la ruta del archivo: ')
        file = open(Entry, "r", encoding='UTF=8')
        lines = file.readlines()
        file.close()

        i = 0
        for cad in lines:
            self.text += cad
        while i < len(self.text):
            if self.text[i].isalpha():
                self.lexeme += self.text[i]
                i += 1
                aux = self.get_Title(i)
                i = aux
            if self.text[i] == '(' or self.text[i] == ')' or self.text[i] == '{' or self.text[i] == '}' \
                    or self.text[i] == ';' or self.text[i] == ',':
                aux = self.Open(i)
                i = aux
                self.lexeme = ''

                aux = self.Close(i)
                i = aux
                self.lexeme = ''

                aux = self.Open_Cad(i)
                i = aux
                self.lexeme = ''

                aux = self.Close_Cad(i)
                i = aux
                self.lexeme = ''

                aux = self.comas(i)
                i = aux
                self.lexeme = ''

                aux = self.PyC(i)
                i = aux
                self.lexeme = ''

            elif self.text[i] == '/':
                aux = self.Commentary(i)
                print('Token_Comentario: /' + self.lexeme)
                i = aux
                self.lexeme = ''

            i += 1
            '''if self.text[i].isalpha():
                self.lexeme += self.text[i]
                i += 1
                aux = self.get_Title(i)
                i = aux
                print(self.lexeme)
                self.lexeme = ''
            elif self.text[i] == ' ':
                pass
            elif self.text[i] == '(':
                self.lexeme += self.text[i]
                print('Token_Apertura: ' + self.text[i])'''

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
            if self.text[i] == ' ':
                pass
            elif self.text[i] == '(':
                self.lexeme += self.text[i]
                print('Token_Apertura: ' + self.text[i])
            else:
                return i
            i += 1
        return i

    def Close(self, i):
        while i < len(self.text):
            if self.text[i] == ' ':
                pass
            elif self.text[i] == ')':
                self.lexeme += self.text[i]
                print('Token_Cerradura: ' + self.text[i])
            else:
                return i
            i += 1
        return i

    def Open_Cad(self, i):
        while i < len(self.text):
            if self.text[i] == ' ':
                pass
            elif self.text[i] == '{':
                self.lexeme += self.text[i]
                print('Token_Abrir: ' + self.text[i])
            else:
                return i
            i += 1
        return i

    def Close_Cad(self, i):
        while i < len(self.text):
            if self.text[i] == '\n':
                pass
            elif self.text[i] == '}':
                self.lexeme += self.text[i]
                print('Token_Cerrar: ' + self.text[i])
            else:
                return i
            i += 1
        return i

    def comas(self, i):
        while i < len(self.text):
            if self.text[i] == ',':
                self.lexeme += self.text[i]
                print('Token_Coma: ' + self.text[i])
            else:
                return i
            i += 1
        return i

    def PyC(self, i):
        while i < len(self.text):
            if self.text[i] == ' ':
                pass
            elif self.text[i] == ';':
                self.lexeme += self.text[i]
                print('Token_PuntoYComa: ' + self.text[i])
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


var = Extra()
var.upload()
