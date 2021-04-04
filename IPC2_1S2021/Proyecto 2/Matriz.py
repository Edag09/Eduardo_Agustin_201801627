from NodosMatriz import NodeHeader, NodeMatrix
from Encabezado import list_header
from graphviz import Digraph
import VentanaP

class matrix:
    def __init__(self):
        self.eFilas = list_header()
        self.eColomunas = list_header()
        self.tamM = 0
        self.tamImage = 0

    def addMatrix(self, row, column, value, name):
        nuevo = NodeMatrix(row, column, value, name)
        # incertar encabezado por filas
        e_Row = self.eFilas.get_header(row)
        if e_Row is None:
            e_Row = NodeHeader(row, name)
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
            e_Column = NodeHeader(column, name)
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
        self.tamM += 1

    def recorrer(self):
        e_Row = self.eFilas.root
        print('--------------------------')
        print('Nombre:', e_Row.access.nameM)
        while e_Row is not None:
            aux = e_Row.access
            print('Fila: ', aux.row)
            print('Columna    Valor')
            while aux is not None:
                print(aux.column, '--------->', aux.valor)
                aux = aux.der
            e_Row = e_Row.siguiente
        print('---------------------------------')

    def graft(self, name_p):
        text_temp = ""
        text_2 = ""
        text_view = ""
        V_Columns = self.eFilas.root
        print('<-------------------------->')
        while V_Columns is not None:
            aux = V_Columns.access
            print('Fila: ', aux.row)
            if aux.nameM == name_p:
                text_2 = f"<tr>\n<td>{aux.row}</td>"
                while aux is not None:
                    if aux.der is None:
                        if V_Columns.siguiente is None:
                            # print(aux.valor, '-> None')
                            text_temp = f"{text_temp} {aux.valor}"

                            text_2 = f"{text_2}\n\t<td>{aux.valor}</td>\n</tr>"
                            text_view = f"{text_view} {text_2}"
                            text_2 = ""
                            # text_temp = text_temp, " -> ", aux.valor
                            print(text_temp)
                        else:
                            # print(aux.valor, '->', V_Columns.siguiente.access.valor)
                            text_temp = f"{text_temp} {aux.valor}"

                            text_2 = f"{text_2}\n\t<td>{aux.valor}</td>\n</tr>"
                            text_view = f"{text_view} {text_2}"
                            text_2 = ""
                            print(text_temp)
                            text_temp = ''
                    else:
                        text_temp = f"{text_temp} {aux.valor} ->"
                        text_2 = f"{text_2}\n\t<td>{aux.valor}</td>\n"
                        # print(aux.valor, ' -> ', aux.der.valor)
                    aux = aux.der
            V_Columns = V_Columns.siguiente
        print('---------------------------------')
        # print(text_view)
        s = Digraph('structs', format='png', filename=f'{self.eFilas.root.access.nameM}', node_attr={'shape': 'plaintext'})
        s.node('struct1', f'''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0"> {text_view} </TABLE>>''')
        s.view()
