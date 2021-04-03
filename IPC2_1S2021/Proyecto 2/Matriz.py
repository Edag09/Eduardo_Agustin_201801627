from NodosMatriz import NodeHeader, NodeMatrix
from Encabezado import list_header


class matrix:
    def __init__(self):
        self.eFilas = list_header()
        self.eColomunas = list_header()

    def addMatrix(self, row, column, value):
        nuevo = NodeMatrix(row, column, value)

        # incertar encabezado por filas
        e_Row = self.eFilas.get_header(row)
        if e_Row is None:
            e_Row = NodeHeader(row)
            e_Row.access = nuevo
            self.eFilas.set_header(e_Row)
        else:
            if nuevo.column < e_Row.access.column:
                nuevo.der = e_Row.access
                e_Row.access.izq = nuevo
                e_Row.access = nuevo
            else:
                aux = e_Row.access
                while aux.der is not None:
                    if nuevo.column < aux.der.column:
                        nuevo.der = aux.der
                        aux.der.izq = nuevo
                        nuevo.izq = aux
                        aux.der = nuevo
                        break
                    aux = aux.der

                if aux.der is None:
                    aux.der = nuevo
                    nuevo.izq = aux

        # insertar encabezado por columnas
        e_Column = self.eColomunas.get_header(column)
        if e_Column is None:
            e_Column = NodeHeader(column)
            e_Column.access = nuevo
            self.eColomunas.set_header(e_Column)
        else:
            if nuevo.row < e_Column.access.row:
                nuevo.down = e_Column.access
                e_Column.access.up = nuevo
                e_Column.access = nuevo
            else:
                aux = e_Column.access
                while aux.down is not None:
                    if nuevo.row < aux.down.row:
                        nuevo.down = aux.down
                        aux.down.up = nuevo
                        nuevo.up = aux
                        aux.down = nuevo
                        break
                    aux = aux.down

                if aux.down is None:
                    aux.down = nuevo
                    nuevo.up = aux

    def recorrer(self):
        e_Row = self.eFilas.root
        print('--------------------------')
        while e_Row is not None:
            aux = e_Row.access
            print('Fila: ', aux.row)
            print('Columna    Valor')
            while aux is not None:
                print(aux.column, '--------->', aux.valor)
                aux = aux.der
            e_Row = e_Row.siguiente
        print('---------------------------------')
