import os

value = ''


def Grafos():
    printG(value)


def printG(value):
    try:
        print(value)
        rutaI = input('Ingresa la ruta de Inicial: ')
        cad = rutaI.lower()
        cadE = cad.replace(' ', '')
        rutaF = input('Ingresa la ruta final: ')
        sal = rutaF.lower()
        cadS = sal.replace(' ', '')

        if cadE in value:
            print('Estacion Entrada')
        if cadS in value:
            print('Estacion Salida')
        else:
            print('Estacion invalida')
            printG(value)

        file = open('Ruta.dot', 'w')
        cad = ''

        cad += cadE + "-> " + cadS + '\n'

        file.write('digraph D {\n')
        file.write(cad + '\n')
        file.write('}')

        file.close()

        os.system('dot -Tpng Ruta.dot -o Ruta.png')

    except:
        print('Estacion no analizada')
        printG(value)
