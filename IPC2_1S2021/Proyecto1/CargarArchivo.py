class load:
    def loadfile(self):
        Entry = input('Ingresa la ruta del archivo: ')
        file_xml = ET.parse(Entry)
        root = file_xml.getroot()
        print(root.tag)
        name = root.get('nombre')
        row = root.get('n')
        columns = root.get('m')
        print('Nombre: ', name, ', Fila: ', row, ', Columna: ', columns)
        for elem in root[0]:
            x = elem.get('x')
            y = elem.get('y')
            print(x, y, ' Valor: ', elem.text)
