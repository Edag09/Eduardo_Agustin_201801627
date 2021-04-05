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

    def __str__(self):
        return f"Nombre{self.nameM}- ({self.row},{self.column}) Dato: {self.valor}"


class NodeHeader:
    def __init__(self, id, name):
        self.tamN = 0
        self.id = id
        self.name = name
        self.siguiente = None
        self.anterior = None
        self.access = None
