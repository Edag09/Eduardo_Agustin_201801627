import os

archivo = open('Ruta.dot', 'w')

contenido = ''
ejemplo = ['Holi', 'Como', 'Tu', 'Estar']
cont = -1
for rueda in ejemplo:
    cont = + 1
    contenido += rueda + "-> " + rueda[cont] + '\n'


archivo.write('digraph D {\n')
archivo.write(contenido + '\n')
archivo.write('}')

archivo.close()

os.system('dot -Tpng Ruta.dot -o Ruta.png')
