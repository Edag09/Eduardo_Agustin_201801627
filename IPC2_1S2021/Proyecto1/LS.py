from NodoLS import nodeSimple


class Simple_list:
    def __init__(self):
        self.root = None
        self.tam = 0

    def addSimple(self, x, y, value, n):
        first = nodeSimple(x, y, value)
        self.tam = n
        if self.root is None:
            self.root = first
        else:
            aux = self.root
            while aux.next is not None:
                aux = aux.next
            aux.next = first

    def view(self):
        aux = self.root
        while aux is not None:
            print(' Posicion X: ', str(aux.x) + ' Posicion Y: ', str(aux.y) + ' Valor: ', str(aux.value))
            aux = aux.next

    def binaria(self):
        aux = self.root
        temp = ''
        while aux is not None:
            if aux.value != '0':
                temp = temp + '1'
            else:
                temp = temp + '0'
            if aux.y == self.tam:
                temp = temp + '\n'
            aux = aux.next
        print(temp)
