Entry = input('Ingresa la ruta del archivo: ')
file = open(Entry, "r")
lines = file.readlines()
file.close()

Row = 0
i = 0
text = ''
cad = ''
for character in lines:
    Row += 1
    text += character
while i < len(text):
    if text[i].isalpha():
        cad += text
        i += 1



