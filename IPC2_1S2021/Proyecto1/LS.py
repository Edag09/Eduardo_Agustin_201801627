from NodoLS import nodeSimple


class Simple_list:
    def __init__(self):
        self.root = None
        self.tam = 0
        self.n =0

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
        print('\n')

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
        Simple_list.comparar(self, temp, self.tam)

    def comparar(self, text, row):
        aux = self.root
        temp = ''
        while aux is not None:
            if aux.y <= row:
                temp = temp + str(aux.value)
                if aux.y == row:
                    temp = temp + '\n'
            aux = aux.next
        b = temp.split('\n')
        a = text.split('\n')
        cont = 0
        while cont <= (int(row)-1):
            print(b[cont] + ' ---> ' + a[cont])
            cont += 1






