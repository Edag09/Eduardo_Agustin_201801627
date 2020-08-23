#!/usr/bin/python
# -*- coding: utf-8 -*-
from CargadeDato import CargadeDato
datos = CargadeDato()

def menu():
    print("Eduardo René Agustin Medoza 201801627")
    print("Elige una opción")
    print("1 - Cargar Archivo")
    print("2 - Graficar Operación")
    print("3 - Salir")

    ocsion = input("inserta un numero valor ")

    if ocsion == "1":
        print("Cargar Datos")
        datos.archivo()
    elif ocsion == "2":
        print("")
        input("Has pulsado la opción 2...\npulsa una tecla para continuar")
    elif ocsion == "3":
        print("Bai, te me cuidas, salu2")
    else:
        print("")
        input("No has pulsado ninguna opción correcta...\npulsa una tecla para continuar")
        menu()

menu()
