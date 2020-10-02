class Data:

    def Load(self):
        Entry = input('Ingresa la ruta del archivo: ')
        file = open(Entry, "r")
        lines = file.readlines()
        state = 0
        chain = ''
        for line in lines:
            for character in line:
                if character == '\n':
                    continue
                elif character == ' ':
                    if state == 0:
                        continue
                    if state == 2 or state == 1 or state == 3 or state == 4:
                        if state == 1:
                            print('T_Label: ', chain)
                        elif state == 2:
                            print('T_Valor: ', chain)
                        elif state == 3:
                            print('T_Peso: ', chain)
                        elif state == 4:
                            print('T_Color: ', chain)
                        print('')
                    else:
                        print('--> Cadena:', chain, 'invalida')

                    state = 0
                    chain = ''
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
                        state = -1

                elif state == 1:
                    if 65 <= ord(character) <= 122:  # es letter
                        state = 1
                    elif character == '<' or character == '>':
                        state = 1
                    elif character == '/':
                        state = 1
                    else:
                        state = -1

                elif state == 2:
                    if 65 <= ord(character) <= 122:  # es letter
                        state = 2
                    elif 48 <= ord(character) <= 57:  # es digit
                        state = 2
                    elif character == '_':
                        state = 2
                    else:
                        state = -1

                elif state == 4:
                    if 65 <= ord(character) <= 122:  # es letter
                        state = 4
                    elif 48 <= ord(character) <= 57:  # es digit
                        state = 4
                    else:
                        state = -1

            if state == 2 or state == 1 or state == 3 or state == 4:
                if state == 1:
                    print('T_Label: ', chain)
                elif state == 2:
                    print('T_Valor: ', chain)
                elif state == 3:
                    print('T_Peso: ', chain)
                elif state == 4:
                    print('T_Color: ', chain)
                print(' ')
            else:
                print('--> Cadena:', chain, ' invalida')

            state = 0
            chain = ''
