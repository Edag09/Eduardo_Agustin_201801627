#!/usr/bin/python
# -*- coding: utf-8 -*-
from CargadeDato import CargadeDato

datos = CargadeDato()


def menu():
    print("_________________________________________")
    print("Eduardo René Agustin Medoza 201801627 ")
    print("_________________________________________ \n")
    print("______________   Menu    ________________")
    print("Elige una opción")
    print("1 - Cargar Archivo")
    print("2 - Graficar Operación")
    print("3 - Salir")

    opc = input("inserta un numero valor ")

    if opc == "1":
        print("Cargar Datos")
        datos.archivo()
    elif opc == "2":
        print("")
        input("Has pulsado la opción 2...")
    elif opc == "3":
        print("Salsite")
    else:
        print("")
        input("No has pulsado ninguna opción correcta...")
        menu()


menu()
