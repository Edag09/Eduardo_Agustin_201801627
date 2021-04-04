class NodeMatrix:
    def __init__(self, row, column, valor, nameM):
        self.tamNM = 0
        self.nameM = nameM
        self.valor = valor
        self.row = row
        self.column = column
        self.der = None
        self.izq = None
        self.up = None
        self.down = None


class NodeHeader:
    def __init__(self, id, name):
        self.tamN = 0
        self.id = id
        self.name = name
        self.siguiente = None
        self.anterior = None
        self.access = None
