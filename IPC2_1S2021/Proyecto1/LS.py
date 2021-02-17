from NodoLS import nodeSimple

class Simple_list:
    def __init__(self):
        self.root = None

    def addSimple(self, x, y, value):
        first = nodeSimple(x, y, value)
        if self.root is None:
            self.root = first
        else:
            aux = self.root
            while aux.next is not None:
                aux = aux.next
            aux.next = self.root


