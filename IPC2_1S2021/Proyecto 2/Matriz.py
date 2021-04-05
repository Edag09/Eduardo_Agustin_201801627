from NodosMatriz import NodeHeader, NodeMatrix
from Encabezado import list_header
from graphviz import Digraph


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
        text_temp = ""
        text_2 = ""
        text_view = ""
        V_Columns = self.eFilas.root
        print(self.eFilas.root.access.nameM)
        while V_Columns is not None:
            aux = V_Columns.access
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
                    text_temp = f"{text_temp} {aux.valor} "
                    text_2 = f"{text_2}\n\t<td>{aux.valor}</td>\n"
                    # print(aux.valor, ' -> ', aux.der.valor)
                aux = aux.der
            V_Columns = V_Columns.siguiente

    def graft(self):
        text_temp = ""
        text_2 = ""
        text_view = ""
        V_Columns = self.eFilas.root
        while V_Columns is not None:
            aux = V_Columns.access
            # print('Fila: ', aux.row)
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
                        # print(text_temp)
                    else:
                        # print(aux.valor, '->', V_Columns.siguiente.access.valor)
                        text_temp = f"{text_temp} {aux.valor}"

                        text_2 = f"{text_2}\n\t<td>{aux.valor}</td>\n</tr>"
                        text_view = f"{text_view} {text_2}"
                        text_2 = ""
                        # print(text_temp)
                        text_temp = ''
                else:
                    text_temp = f"{text_temp} {aux.valor} ->"
                    text_2 = f"{text_2}\n\t<td>{aux.valor}</td>\n"
                    # print(aux.valor, ' -> ', aux.der.valor)
                aux = aux.der
            V_Columns = V_Columns.siguiente
        # print(text_view)
        s = Digraph('structs', format='png', filename=f'{self.eFilas.root.access.nameM}',
                    node_attr={'shape': 'plaintext'})
        s.node('struct1', f'''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0"> {text_view} </TABLE>>''')
        s.view()

    def Trans(self):
        text_temp_trans = ''
        text_2_trans = ''
        text_view_trans = ''
        e_col = self.eColomunas.root
        print(self.eFilas.root.access.nameM)
        while e_col is not None:
            aux = e_col.access
            text_2_trans = f'<tr>\n<td>{aux.column}</td>'
            while aux is not None:
                if aux.down is None:
                    if e_col.siguiente is None:
                        text_temp_trans = f"{text_temp_trans} {aux.valor}"

                        text_2_trans = f"{text_2_trans}\n\t<td>{aux.valor}</td>\n</tr>"
                        text_view_trans = f"{text_view_trans} {text_2_trans}"
                        text_2_trans = ""
                        # text_temp_trans = text_temp_trans, " -> ", aux.valor
                        print(text_temp_trans)
                    else:
                        # print(aux.valor, '->', V_Columns.siguiente.access.valor)
                        text_temp_trans = f"{text_temp_trans} {aux.valor}"

                        text_2_trans = f"{text_2_trans}\n\t<td>{aux.valor}</td>\n</tr>"
                        text_view_trans = f"{text_view_trans} {text_2_trans}"
                        text_2_trans = ""
                        print(text_temp_trans)
                        text_temp_trans = ''
                else:
                    text_temp_trans = f"{text_temp_trans} {aux.valor} ->"
                    text_2_trans = f"{text_2_trans}\n\t<td>{aux.valor}</td>\n"
                    # print(aux.valor, ' -> ', aux.der.valor)
                aux = aux.down
            e_col = e_col.siguiente

    def graft_Trans(self):
        text_temp_trans = ''
        text_2_trans = ''
        text_view_trans = ''
        e_col = self.eColomunas.root
        while e_col is not None:
            aux = e_col.access
            text_2_trans = f'<tr>\n<td>{aux.column}</td>'
            while aux is not None:
                if aux.down is None:
                    if e_col.siguiente is None:
                        text_temp_trans = f"{text_temp_trans} {aux.valor}"

                        text_2_trans = f"{text_2_trans}\n\t<td>{aux.valor}</td>\n</tr>"
                        text_view_trans = f"{text_view_trans} {text_2_trans}"
                        text_2_trans = ""
                        # text_temp_trans = text_temp_trans, " -> ", aux.valor
                        # print(text_temp_trans)
                    else:
                        # print(aux.valor, '->', V_Columns.siguiente.access.valor)
                        text_temp_trans = f"{text_temp_trans} {aux.valor}"

                        text_2_trans = f"{text_2_trans}\n\t<td>{aux.valor}</td>\n</tr>"
                        text_view_trans = f"{text_view_trans} {text_2_trans}"
                        text_2_trans = ""
                        # print(text_temp_trans)
                        text_temp_trans = ''
                else:
                    text_temp_trans = f"{text_temp_trans} {aux.valor} ->"
                    text_2_trans = f"{text_2_trans}\n\t<td>{aux.valor}</td>\n"
                    # print(aux.valor, ' -> ', aux.der.valor)
                aux = aux.down
            e_col = e_col.siguiente
        s = Digraph('structs', format='png', filename=f'Transpuesta {self.eFilas.root.access.nameM}',
                    node_attr={'shape': 'plaintext'})
        s.node('struct1', f'''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0"> {text_view_trans} </TABLE>>''')
        s.view()

    def search_position(self, nombre_matriz, x, y):
        V_Columns = self.eFilas.root
        while V_Columns is not None:
            aux = V_Columns.access
            while aux is not None:
                if aux.der is None:
                    if V_Columns.siguiente is None:
                        if aux.nameM == nombre_matriz and int(aux.row) == int(x) and int(aux.column) == int(y):
                            return aux
                    else:
                        if aux.nameM == nombre_matriz and int(aux.row) == int(x) and int(aux.column) == int(y):
                            return aux
                else:
                    if aux.nameM == nombre_matriz and int(aux.row) == int(x) and int(aux.column) == int(y):
                        return aux
                aux = aux.der
            V_Columns = V_Columns.siguiente

    def rot_Vert(self, name_matrix, column_f, row_f):
        text = ""
        text_temp = ""
        text_uni = ""
        fil_ = 1
        column_temp = int(column_f)
        column_ = 1
        if int(column_f) % 2 == 0:
            tam = int(column_f) * int(row_f)
            middle = int(column_f) / 2
            i = 0
            while i < tam:
                # columna_i <= column_ <= columna_f and fila_i <= fil_ <= fila_f
                if int(column_) < int(middle):
                    # print(f"{fil_},{column_}   {fil_},{column_temp}")

                    d_aux = self.search_position(name_matrix, fil_, column_).valor
                    d_aux2 = self.search_position(name_matrix, fil_, column_temp).valor

                    text = f"{text}\t{d_aux2}"
                    text_temp = f"{d_aux}\t{text_temp}  "

                    column_ += 1
                    column_temp -= 1
                elif int(column_) == int(middle):
                    # print(f"{fil_},{column_}   {fil_},{column_temp}")
                    d_aux = self.search_position(name_matrix, fil_, column_).valor
                    d_aux2 = self.search_position(name_matrix, fil_, column_temp).valor

                    text = f"{text}\t{d_aux2}"
                    text_temp = f"{d_aux}\t{text_temp}"
                    text_uni = f"{text_uni}\n{text}\t{text_temp}"
                    text = ""
                    text_temp = ""

                    if int(fil_) == int(row_f):
                        print(text_uni)
                        break

                    column_ = 1
                    column_temp = int(column_f)
                    fil_ += 1
                i += 1
        else:
            middle = int(column_f) / 2 + 0.5
            tam = int(column_f) * int(row_f)
            i = 0
            while i < tam:

                if int(column_) < int(middle):
                    # print(f"{fil_},{column_}   {fil_},{column_temp}")
                    d_aux = self.search_position(name_matrix, fil_, column_).valor
                    d_aux2 = self.search_position(name_matrix, fil_, column_temp).valor

                    text = f"{text} {d_aux2}"
                    text_temp = f"{d_aux} {text_temp}  "

                    column_ += 1
                    column_temp -= 1
                elif int(column_) == int(middle):
                    # print(f"{fil_},{column_}   {fil_},{column_temp}")
                    d_aux = self.search_position(name_matrix, fil_, column_).valor

                    text_temp = f"{d_aux} {text_temp}"
                    text_uni = f"{text_uni}\n{text} {text_temp}"
                    text = ""
                    text_temp = ""

                    if int(fil_) == int(row_f):
                        print(text_uni)
                        break

                    column_ = 1
                    column_temp = int(column_f)
                    fil_ += 1
                i += 1

    def rot_Hor(self, name_matrix, column_f, row_f):
        text = ""
        text_temp = ""
        text_uni = ""
        fil_ = 1
        column_ = 1
        fil_temp = int(row_f)
        if int(row_f) % 2 == 0:
            tam = int(column_f) * int(row_f)
            middle = int(row_f) / 2
            i = 0
            while i < tam:
                # columna_i <= column_ <= columna_f and fila_i <= fil_ <= fila_f
                if int(fil_) < int(middle):
                    print(f"{fil_},{column_}   {fil_temp},{column_}")

                    d_aux = self.search_position(name_matrix, fil_, column_).valor
                    d_aux2 = self.search_position(name_matrix, fil_temp, column_).valor

                    text = f"{text}\t{d_aux2}"
                    text_temp = f"{d_aux}\t{text_temp}  "

                    fil_ += 1
                    fil_temp -= 1
                elif int(fil_) == int(middle):
                    print(f"{fil_},{column_}   {fil_temp},{column_}")
                    d_aux = self.search_position(name_matrix, fil_, column_).valor
                    d_aux2 = self.search_position(name_matrix, fil_temp, column_).valor

                    text = f"{text}\t{d_aux2}"
                    text_temp = f"{d_aux}\t{text_temp}"
                    text_uni = f"{text_uni}\n{text}\t{text_temp}"
                    text = ""
                    text_temp = ""

                    if int(column_) == int(column_f):
                        print(text_uni)
                        break

                    fil_ = 1
                    fil_temp = int(row_f)
                    column_ += 1
                i += 1
        else:
            middle = int(row_f) / 2 + 0.5  # 1 2 3  ------- 1 2 3 4
            tam = int(column_f) * int(row_f)
            i = 0
            while i < tam:

                if int(fil_) < int(middle):
                    # print(f"{fil_},{column_}   {fil_},{column_temp}")
                    d_aux = self.search_position(name_matrix, fil_, column_).valor
                    d_aux2 = self.search_position(name_matrix, fil_temp, column_).valor

                    text = f"{text} {d_aux2}"
                    text_temp = f"{d_aux} {text_temp}  "

                    fil_ += 1
                    fil_temp -= 1
                elif int(fil_) == int(middle):
                    # print(f"{fil_},{column_}   {fil_},{column_temp}")
                    d_aux = self.search_position(name_matrix, fil_, column_).valor

                    text_temp = f"{d_aux} {text_temp}"
                    text_uni = f"{text_uni}\n{text} {text_temp}"
                    text = ""
                    text_temp = ""

                    if int(column_) == int(column_f):
                        print(text_uni)
                        break

                    fil_ = 1
                    fil_temp = int(row_f)
                    column_ += 1
                i += 1