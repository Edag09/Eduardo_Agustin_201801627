class Data:

    def Load(self):

        try:
            Entry = input("Ingresar la ruta del archivo: ")
            file = open(Entry, "r")
            Reading = file.read()
            for F in Reading:
                analyzer(F)
                print(F)
            file.close()
        except:
            print("No se ha leido el archivo")
            Data().Load()


def analyzer(cad):
    state = 0
    chain = ''
    for line in cad:
        for character in line:
            if character == '\n':
                continue
            elif character == ' ':
                if state == 0:
                    continue
                if state == 1 or state == 2 or state == 3 or state == 4:
                    print(chain, 'Accepted')
                    if state == 1:
                        print('T_Label: ', chain)
                    elif state == 2:
                        print('T_Value', chain)
                    elif state == 3:
                        print('T_Number', chain)
                    elif state == 4:
                        print('T_Color', chain)
                    else:
                        print('---> Cadena: ', chain, 'invalida\n')

                    state = 0
                    chain = ''
                    continue

                chain = chain + character

                if state == 0:
                    if 65 <= ord(character) <= 122:  # is_letter
                        state = 1
                    elif character == '<' or character == '>':
                        state = 1
                    elif character == '/':
                        state = 1
                    elif 48 <= ord(character) <= 57:  # is_digit
                        state = 3
                    else:
                        state = -1

                elif state == 1:
                    if 65 <= ord(character) <= 122:  # is_letter
                        state = 1
                    elif character == '<' or character == '>':
                        state = 1
                    elif character == '/':
                        state = 1
                    else:
                        state = -1

                elif state == 2:
                    if 65 <= ord(character) <= 122:  # is_letter
                        state = 2
                    elif 48 <= ord(character) <= 57:  # is_digit
                        state = 2
                    elif character == '_':
                        state = 2
                    else:
                        state = -1

                elif state == 3:
                    if 48 <= ord(character) <= 57:
                        state = 3
                    elif character == '.':
                        state = 3
                    else:
                        state = -1

                elif state == 4:
                    if 65 <= ord(character) <= 122:  # is_letter
                        state = 4
                    elif 48 <= ord(character) <= 57:  # is_digit
                        state = 4
                    elif character == '#':
                        state = 4
                    else:
                        state = -1

