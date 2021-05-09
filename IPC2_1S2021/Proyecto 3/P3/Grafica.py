import matplotlib.pyplot as plt

def GraficarUser(list1, list2):
    plt.bar(list1, list2, color='lightblue')

    plt.title('Grafica Usuario/Fecha')
    plt.xlabel('Usuario')
    plt.ylabel('Contidad')
    plt.ion()
    plt.savefig('Grafica Usuario Fecha.png')

def GraficaError(list1, list2):
    plt.bar(list1, list2, color='lightblue')

    plt.title('Grafica Codigo/Fecha')
    plt.xlabel('Codigo')
    plt.ylabel('Contidad')
    plt.ion()
    plt.savefig('Grafica Codigo Fecha.png')