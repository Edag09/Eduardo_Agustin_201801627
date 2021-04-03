class NodeMatrix:
    def __init__(self, row, column, valor):
        self.valor = valor

        self.row = row
        self.column = column
        self.der = None
        self.izq = None
        self.up = None
        self.down = None


class NodeHeader:
    def __init__(self, id):
        self.id = id
        self.siguiente = None
        self.anterior = None
        self.access = None
