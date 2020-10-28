class Extra:

    def __init__(self):  # Constructor
        self.stack = ['lista', 'matriz', 'tabla']
        self.text = ''
        self.lexeme = ''

    def _file_upload(self):
        Entry = input('Ingresa la ruta del archivo: ')
        file = open(Entry, "r")
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
                tem = self.get_Title(i)
                i = tem
                if self.lexeme.lower() == 'lista':
                    print(self.lexeme)
                    self.lexeme = ''
                    # se limpia el lexeman para que contenga el nuevo valor
                    tem = self.Open_list(i)
                    i = tem
                    self.lexeme = ''

                    tem = self.title(i)
                    i = tem
                    self.lexeme = ''

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

    def Open_list(self, i):
        while i < len(self.text):
            if self.text[i] == ' ':
                print('')
            elif self.text[i] == '(':
                self.lexeme += self.text[i]
                print('Token_Apertura: '+self.text[i])
            else:
                return i
            i += 1
        return i

    def title(self, i):
        while i < len(self.text):
            if self.text[i] == "'" or self.text[i] == '>' or self.text[i] == '<' or self.text[i].isalpha():
                self.lexeme += self.text[i]
                print('Token_Titulo: ' + self.text[i])
            elif self.text[i] == ' ':
                pass
            else:
                return i
            i += 1
        return i


var = Extra()
var._file_upload()
