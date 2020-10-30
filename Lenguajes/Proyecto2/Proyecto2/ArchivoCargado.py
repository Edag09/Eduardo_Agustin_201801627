import Analisis
import Pruebas.PruebaAnalizador


def update():
    try:
        Entry = input('Ingresa la ruta del archivo: ')
        file = open(Entry, "r")
        line = file.readlines()
        Analisis.data = line
        Pruebas.PruebaAnalizador.data = line
        print('Archivo Cargado')
    except:
        print('Archivo no cargado, Error')
