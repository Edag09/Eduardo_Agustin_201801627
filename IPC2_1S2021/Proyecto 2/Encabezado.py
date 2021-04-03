from NodosMatriz import NodeHeader, NodeMatrix


class list_header:
    def __init__(self):
        self.root = None

    def set_header(self, nuevo):
        if self.root is None:
            self.root = nuevo
        elif nuevo.id < self.root.id:
            nuevo.siguiente = self.root
            self.root.anterior = nuevo
            self.root = nuevo
        else:
            aux = self.root
            while aux.siguiente is not None:
                if nuevo.id < aux.siguiente.id:
                    nuevo.siguiente = aux.siguiente
                    aux.siguiente.anterior = nuevo
                    nuevo.anterior = aux
                    aux.siguiente = nuevo
                    break
                aux = aux.siguiente
            if aux.siguiente is None:
                aux.siguiente = nuevo
                nuevo.anterior = aux

    def get_header(self, id):
        aux = self.root
        while aux is not None:
            if aux.id == id:
                return aux
            aux = aux.siguiente
        return None
