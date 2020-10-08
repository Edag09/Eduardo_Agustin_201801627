from graphviz import Digraph

value = ''


def Grafos():
    printG(value)


def printG(value):
    try:
        print(value)
        rutaI = input('Ingresa la Estacion Inicial: ')
        cad = rutaI.lower()
        cadE = cad.replace(' ', '')
        rutaF = input('Ingresa la Estacion final: ')
        sal = rutaF.lower()
        cadS = sal.replace(' ', '')

        if cadE in value:
            print('Estacion Inicial: ', cadE)
            if cadS in value:
                print('Estacion final: ', cadS)
            graph(cadE, cadS)
        else:
            print('Estacion invalida')
            printG(value)
    except:
        print('Estacion no analizada')
        printG(value)


def graph(EI, EF):
    graft = Digraph(format='pdf', name='Ruta')
    graft.attr(rankdir='LR', size='10')

    graft.attr('node', shape='ellipse', style='filled', fillcolor='red')
    graft.edge(EI, EF, label='Ruta')

    graft.view()
