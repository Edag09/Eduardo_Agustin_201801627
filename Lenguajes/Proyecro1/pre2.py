'''from graphviz import Digraph

value = ''


def Grafos():
    printG(value)


status = []
digit = []
station = []
ruta = []
color = []


def printG(value):
    try:
        print(value)
        rutaI = input('Ingresa la ruta de Inicial: ')
        cad = rutaI.lower()
        cadE = cad.replace(' ', '')
        rutaF = input('Ingresa la ruta final: ')
        sal = rutaF.lower()
        cadS = sal.replace(' ', '')

        for val in value:
            if 'disponible' in val or 'cerrada' in val:
                status.append(val)
            elif val.isdigit() or '.' in val:
                digit.append(val)
            elif val == "#" or val.isalpha() or val.isdigit() or 'est' in val:
                station.append(val)
            elif 'rut' in val:
                ruta.append(val)
            elif '#' in val:
                color.append(val)
            else:
                print(val)
        print(status)
        print(digit)
        print(station)
        print(ruta)
        print(color)
        if cadE in value:
            print('Estacion Inicial: ', cadE)
            if cadS in value:
                print('Estacion final: ', cadS)
        else:
            print('Estacion invalida')
            printG(value)
    except:
        print('Estacion no analizada')
        printG(value)


def graph(EI, EF, estado):
    graft = Digraph(format='pdf', name='Ruta')
    graft.attr(rankdir='LR', size='10')

    graft.attr('node', shape='ellipse', style='filled', fillcolor='red')
    graft.edge(EI + '\n' + estado, EF + '\n' + estado, label='Ruta')

    graft.view()'''
