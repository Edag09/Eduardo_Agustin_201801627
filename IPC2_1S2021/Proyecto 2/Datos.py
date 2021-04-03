from Matriz import matrix


class Data:
    def get_data(self, name, row, column, image):
        print('Nombre: ', name)
        print('Filas: ', row)
        print('Columnas: ', column)
        print('Imagen: ', image)

    def get_dataImage(self, image, col):
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
                Data.doc(self, cont, b, character)
                data.addMatrix(cont, b, character)
                b += 1
                if b == int(col):
                    continue
            b = 1
            cont += 1
        print('Ingresado')
        data.recorrer()

    def doc(self, row, col, value):
        print('F: ', row, 'C: ', col, 'V: ', value)
