from CargarArchivo import Data

data = Data()


def Menu():
    print("_________________________________________")
    print("Eduardo René Agustin Medoza 201801627 ")
    print("_________________________________________ \n")
    print("______________   Menu    ________________")
    print("1 - Cargar Archivo")
    print("2 - Graficar Ruta")
    print("3 - Graficar Mapa")
    print("4 - Salir")

    opc = input("Elige una opción: ")

    if opc == "1":
        data.Load()
        Menu()
    elif opc == "2":
        print("Gráficar Ruta")
        Menu()
    elif opc == "3":
        print("Gráficar Mapa")
        Menu()
    elif opc == "4":
        print("Gus bai")
    else:
        print("Elige una opción válida")
        Menu()


Menu()
