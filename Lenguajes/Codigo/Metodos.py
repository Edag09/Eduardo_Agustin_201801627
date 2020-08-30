class Metodos:
    # Lista de numero
    numeros = list('0123456789')

    # Atributos de una pila
    tamanio = 0  # Tamaño minimo de la pila
    stack = []
    top = 0

    # Esta lista almacena la expresión convertida.
    expresion_postfija = []

    # Constructor de la clase
    def __init__(self, tamanio, expresion_postfija):
        self.tamanio = tamanio
        self.expresion_postfija = expresion_postfija
        self.top = -1
        self.numeros = list('0123456789')

    # Método para definir si la pila está llena
    def pila_llena(self):
        if self.top == self.tamanio:  # Si el tope tiene el mismo valor del tamaño entonces la pila está llena.
            print("La pila esta llena")
            return True
        return False

    # Método para definir si la pila esta vacía
    def pila_vacia(self):
        if self.top == -1:  # si el valor del tope es igual a -1 entonces la pila esta vacía.
            return True
        return False

    # Método para apilar un valor en la pila
    def apilar(self, dato):
        if not self.pila_llena():  # Si la pila no está llena entonces añade el dato e incrementa el tope de la pila.
            self.stack.insert(self.top, dato)
            self.top += 1

    # Método para desapilar (quitar) un valor en la pila.
    def desapilar(self):
        if not self.pila_vacia():
            aux = self.stack[self.top]
            del self.stack[self.top]
            self.top -= 1
            return aux

    # Método que define la prioridad los operadores en la expresión.
    def prioridad_operacion(self, EI, i):
        if EI[i] == 'Pow':
            prioridadop = 4
            return prioridadop
        elif EI[i] == 'Sqrt':
            prioridadop = 4
            return prioridadop
        elif EI[i] == '*':
            prioridadop = 2
            return prioridadop
        elif EI[i] == '/':
            prioridadop = 2
            return prioridadop
        elif EI[i] == '+':
            prioridadop = 1
            return prioridadop
        elif EI[i] == '-':
            prioridadop = 1
            return prioridadop
        elif EI[i] == '(':
            prioridadop = 5
            return prioridadop

        return 0

    # Método que define la prioridad de los operadores en la pila.
    def prioridad_pila(self):
        if self.stack[self.top] == 'Pow':
            prioridadpila = 4
            return prioridadpila
        elif self.stack[self.top] == 'Sqrt':
            prioridadpila = 4
            return prioridadpila
        elif self.stack[self.top] == '*':
            prioridadpila = 1
            return prioridadpila
        elif self.stack[self.top] == '/':
            prioridadpila = 1
            return prioridadpila
        elif self.stack[self.top] == '+':
            prioridadpila = 2
            return prioridadpila
        elif self.stack[self.top] == '-':
            prioridadpila = 2
            return prioridadpila
        elif self.stack[self.top] == '(':
            prioridadpila = 0
            return prioridadpila
        elif self.stack[self.top] == ')':
            prioridadpila = 0
            return prioridadpila

        return 0

    # Método que define si el dato es un operador, una letra o un numero
    def es_operador(self, ei, i):
        if ei[i] in self.numeros:
            return False
        return True