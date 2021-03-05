from NodoLC import nodeCircular


class Circular_list:
    def __init__(self):
        self.root = None

    def addCircular(self, name, row, col, ruta):
        first = nodeCircular(name, row, col)
        for subelem in ruta:
            x = subelem.get('x')
            y = subelem.get('y')
            first.datos.addSimple(x, y, subelem.text, col)
        if self.root is None:
            self.root = first
            first.next = self.root
        else:
            aux = self.root
            while aux.next is not self.root:
                aux = aux.next
            first.next = self.root
            aux.next = first

    def viewC(self):
        aux = self.root
        while aux.next is not self.root:
            print('Nombre: ', aux.name, ' Fila: ', aux.row, ' Columna: ', aux.col)
            aux.datos.view()
            aux.datos.binaria()
            aux = aux.next
        print('Nombre: ', aux.name, ' Fila: ', aux.row, ' Columna: ', aux.col)
        aux.datos.view()
        aux.datos.binaria()
