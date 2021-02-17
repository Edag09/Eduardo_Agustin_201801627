from NodoLC import nodeCircular


class Circular_list:
    def __init__(self):
        self.root = None

    def addCircular(self, name, row, col):
        first = nodeCircular(name, row, col)
        if self.root in None:
            self.root = first
        else:
            aux = self.root
            while aux.next is not None:
                aux = aux.next
            aux.next = first
            first.previous = aux
