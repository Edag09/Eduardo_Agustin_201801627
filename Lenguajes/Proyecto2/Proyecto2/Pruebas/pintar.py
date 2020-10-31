import os

""" Abriendo un nuevo archivo en modo escritura """

archivo = open('Ejemplo5.dot', 'w')

contenido = ''

print('Ingrese una palabra')
for letra in input():
    contenido += "Letras -> " + letra + '\n'

""" Escribiendo en el archivo """

archivo.write('digraph D {\n')
archivo.write(contenido + '\n')
archivo.write('}')

archivo.close()

""" Generando gráfica a partir del script de graphviz """

os.system('dot -Tpdf Ejemplo5.dot -o G1.png')
