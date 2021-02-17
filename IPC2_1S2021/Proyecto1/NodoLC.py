class nodeCircular:
    def __init__(self, name, row, col):
        self.name = name
        self.row = row
        self.col = col
        self.next = None
        self.previous = None
