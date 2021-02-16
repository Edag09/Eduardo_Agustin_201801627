def Menu():
    print("_________________________________________ \n")
    print("______________   Menu    ________________")
    print("1 - Cargar Archivo")
    print("2 - Porcesar Archivo")
    print("3 - Archivo de Salida")
    print("4 - Datos del Estudiante")
    print("5 - Generar Gráfica")
    print("6 - Salir")

    opc = input("Elige una opción: ")

    if opc == "1":
        print("Cargar Archivo")
        Menu()
    elif opc == "2":
        print("Proceso")
        Menu()
    elif opc == "3":
        print("Salida")
        Menu()
    elif opc == "4":
        print("Eduardo René Agustin Mendoza")
        print("201801627")
        print("Introducción a la Programación y Computación 2")
        print("Ingeniería en Ciencias y Sistemas")
        print("Semestre en Veremos")
        Menu()
    elif opc == '5':
        print("Grafiquita")
        Menu()
    elif opc == '6':
        print("Gus bai")
    else:
        print("Elige una opción válida")
        Menu()


Menu()
