import re

listaFechas = []
listaUsuarios = []
listaAfectados = []
listaCodErrores = []
entry = ''
expresiones = False  # flagxml
comillas = False
Final = ''  # Archivo de salida
i = 0
state = 0  # estados


def cargarArchivo():
    Entry = input('Ingresa la ruta del archivo: ')
    archivo = open(Entry, encoding='UTF-8')
    leer = archivo.read()
    archivo_final = procesoDatos(leer)
    print(archivo_final)


def procesoDatos(datos):
    global entrada_datos
    entrada_datos = datos.split('\n')
    progreso = Primero(entrada_datos)
    return progreso


def Primero(datos):
    global expresiones, Final, state
    for data in datos:
        if expresiones:
            analizadorG(data)
        elif re.match(r'<EVENTOS>', data):
            Final = data + '\n'
            state = 0
            expresiones = True
    return Final


def analizadorG(datos):
    global Final, state, expresiones, listaUsuarios, listaFechas, listaCodErrores, listaAfectados
    if state == 0:
        if re.match(r'[\t]*<EVENTO>', datos):
            Final = Final + datos + '\n'
            state = 1
        elif re.match(r'</EVENTOS>', datos):
            Final = Final + datos + '\n'
            expresiones = False
        else:
            state = 0
    elif state == 1:
        Final = Final + datos + '\n'
        text = ''
        for character in datos:
            if re.match(r'\d|\W', character):
                if (character != '>') & (character != '<') & (ord(character) != 32) & (character != ',') & (
                        character != '\t'):
                    text = text + character
        listaFechas.append(text)
        state = 2
    elif state == 2:
        if re.match(r'[\t]*Reportado por:', datos):
            text = ''
            for character in datos:
                if (character == '<') or (character == '>') or (character == "\""):
                    pass
                else:
                    text = text + character
            Final = Final + text + '\n'
            user = False
            text = ''
            for character in datos:
                if character == ':':
                    user = True
                elif user:
                    cad_user = DatosUsuario(character)
                    text = text + cad_user
        listaUsuarios.append(text)
        state = 3
    elif state == 3:
        if re.match(r'[\t]*Usuarios afectados:', datos):
            text = ''
            for character in datos:
                if (character == '<') | (character == '>') | (character == "\""):
                    pass
                else:
                    text = text + character
            Final = Final + text + '\n'
            afectado = False
            text = ''
            for character in datos:
                if character == ':':
                    afectado = True
                elif afectado:
                    user_afectado = DatosUsuario(character)
                    text = text + user_afectado
            listaAfectados.append(text.split(','))
            state = 4
    elif state == 4:
        if re.match(r'[\t]*Error:', datos):
            Final = Final + datos + '\n'
            text = ''
            a = 0
            for character in datos:
                if re.match(r'\d', character):
                    if (ord(character) != 32) & (character != '-'):
                        text = text + character
                        a = 1
                    elif ((ord(character) == 32) | (ord(character) == 95) | (ord(character) == 45)) & (a == 1):
                        break
            listaCodErrores.append(text)
            state = 5
    elif state == 5:
        if re.match(r'[\t]*</EVENTO>', datos):
            Final = Final + datos + '\n'
            state = 0
        else:
            Final = Final + datos + '\n'
            state = 5


def DatosUsuario(character):
    global comillas, i
    if (ord(character) != 8221) & (ord(character) != 34) & (comillas == False) & (character != "<") & (
            character != ">") & (ord(character) != 32):
        return character
    elif ((ord(character) == 8221) & (i == 0)) | ((ord(character) == 34) & (i == 0)):
        comillas = True
        i = 1
        return ""
    elif ((ord(character) == 8221) & (i == 1)) | ((ord(character) == 34) & (i == 1)):
        comillas = False
        i = 0
        return ""
    elif (character == "<") | (character == ">") | (ord(character) == 32):
        return ""
    else:
        return ""


cargarArchivo()