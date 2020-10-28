Entry = input('Ingresa la ruta del archivo: ')
file = open(Entry, "r")
lines = file.readlines()
file.close()

i = 0
texto = ''
for linea in lines:
    texto += linea

while i < len(texto):
    print(texto[i])
    i += 1
