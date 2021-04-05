from Matriz import matrix


def get_data(name, row, column, image):
    print('Nombre:', name)
    print('Filas: ', row)
    print('Columnas: ', column)
    print('Imagen: ', image)


def get_dataImage(image, col, name, fila):
    data = matrix()
    cont = 1
    b = 1
    a = image.replace('\t', '')
    a = a.replace(' ', '')
    a = a.split('\n')
    print(a)
    print(len(a))
    while cont <= len(a):
        d = a[cont - 1]
        for character in d:
            data.addMatrix(cont, b, character, name)
            b += 1
            if b == int(col):
                continue
        b = 1
        cont += 1
    print('Ingresado')
    data.recorrer()
    # data.graft()
    # data.Trans()
    # data.graft_Trans()
    data.rot_Vert(name, int(col), int(fila))
    # data.rot_Hor(name, int(col), int(fila))


def doc(row, col, value):
    print('Fila : ', row, 'Columna : ', col, 'Valor : ', value)

