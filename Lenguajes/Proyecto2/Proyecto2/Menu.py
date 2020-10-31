import ArchivoCargado
import Analisis


def Menu():
    print("_________________________________________")
    print("__Eduardo René Agustin Medoza 201801627__")
    print("______________Proyecto 2_________________")
    print("__________________Menu___________________")
    print("1 - Cargar Archivo")
    print("2 - Generar Grafo")
    print("3 - Salir")

    opc = input("Elige una opción: ")

    if opc == "1":
        ArchivoCargado.update()
        Menu()
    elif opc == "2":
        # Analisis.Graph()
        Menu()
    elif opc == "3":
        print("Salida")
    else:
        print("Elige una opción válida")
        Menu()


Menu()
