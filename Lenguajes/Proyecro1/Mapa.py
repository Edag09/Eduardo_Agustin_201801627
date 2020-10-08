from graphviz import Digraph

value = ''


def Graph():
    printM(value)


def printM(value):
    print(value)
    try:
        cont = 0
        station = []
        name = []
        color = []
        rut = []
        init = []
        fin = []
        for rec in value:
            cad = value[cont]
            if '<estacion>' in cad.lower():
                if '#' in value[cont + 2]:
                    color.append(value[cont + 2])
                elif 'disponible' in value[cont + 2] or 'cerrada' in value[cont + 2]:
                    station.append(value[cont + 2])
                else:
                    name.append(value[cont + 2])
                if '#' in value[cont + 5]:
                    color.append(value[cont + 5])
                elif 'disponible' in value[cont + 5] or 'cerrada' in value[cont + 5]:
                    station.append(value[cont + 5])
                else:
                    name.append(value[cont + 5])
                if '#' in value[cont + 8]:
                    color.append(value[cont + 8])
                elif 'disponible' in value[cont + 8] or 'cerrada' in value[cont + 8]:
                    station.append(value[cont + 8])
                else:
                    name.append(value[cont + 8])
            elif '<ruta>' in cad.lower():
                if 'rut' in value[cont + 2]:
                    rut.append(value[cont + 2])
                elif 'rut' in value[cont + 5]:
                    rut.append(value[cont + 5])
                elif 'rut' in value[cont + 8]:
                    rut.append(value[cont + 8])
                elif 'rut' in value[cont + 11]:
                    rut.append(value[cont + 11])
            elif '<inicio>' in cad.lower():
                init.append(value[cont + 1])
            elif '<fin>' in cad.lower():
                fin.append(value[cont + 1])
            cont = cont + 1

        graph(name, color, station, init, fin, rut)
    except:
        print('Error')


def graph(nom, col, estado, inicio, fin, ruta):
    cont = -1
    graft = Digraph(format='pdf', name='Ruta')
    graft.attr(rankdir='LR', size='10')

    for r in nom:
        graft.attr('node', shape='ellipse', style='filled', fillcolor=col[cont])
        graft.edge(inicio[cont]+'\n'+estado[cont], fin[cont]+'\n'+estado[cont+1], label=ruta[cont])
        cont = cont + 1
        print(cont)

    graft.view()
