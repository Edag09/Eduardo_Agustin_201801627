class draw:

    def __init__(self):
        self.form = ''
        self.c = ''
        self.col = ''
        self.attributes = ''

    def figure(self, figurita, color, defecto, valor, defecto_val, number):
        for figure in figurita:
            if figure == 'circulo':
                self.form = 'Circle'
                print(self.form)
            elif figure == 'rectangulo':
                self.form = 'Rectangle'
                print(self.form)
            elif figure == 'triangulo':
                self.form = 'Triangle'
                print(self.form)
            elif figure == 'punto':
                self.form = 'Point'
                print(self.form)
            elif figure == 'hexagono':
                self.form = 'Hexagon'
                print(self.form)
            elif figure == 'diamante':
                self.form = 'Diamond'
                print(self.form)
        for colorcito in color:
            if colorcito.lower() == 'azul':
                self.c = 'Aliceblue'
                print(self.c)
            elif colorcito.lower() == 'azul2':
                self.c = 'Blueviolet'
                print(self.c)
            elif colorcito.lower() == 'azul3':
                self.c = 'Blue'
                print(self.c)
            elif colorcito.lower() == 'rojo':
                self.c = 'darksalmon'
                print(self.c)
            elif colorcito.lower() == 'rojo2':
                self.c = 'tomato'
                print(self.c)
            elif colorcito.lower() == 'rojo3':
                self.c = 'red'
                print(self.c)
            elif colorcito.lower() == 'amarillo':
                self.c = 'gold'
                print(self.c)
            elif colorcito.lower() == 'amarillo2':
                self.c = 'lightgoldenrod'
                print(self.c)
            elif colorcito.lower() == 'amarillo3':
                self.c = 'yellow'
                print(self.c)
            elif colorcito.lower() == 'anaranjado':
                self.c = 'orange'
                print(self.c)
            elif colorcito.lower() == 'anaranjado2':
                self.c = 'darkorange'
                print(self.c)
            elif colorcito.lower() == 'anaranjado3':
                self.c = 'orangered'
                print(self.c)
            elif colorcito.lower() == 'cafe':
                self.c = 'burlywood'
                print(self.c)
            elif colorcito.lower() == 'cafe2':
                self.c = 'chocolate'
                print(self.c)
            elif colorcito.lower() == 'cafe3':
                self.c = 'brown'
                print(self.c)
            elif colorcito.lower() == 'gris':
                self.c = 'lightgray'
                print(self.c)
            elif colorcito.lower() == 'gris2':
                self.c = 'gray'
                print(self.c)
            elif colorcito.lower() == 'gris3':
                self.c = 'dimgray'
                print(self.c)
            elif colorcito.lower() == 'morado':
                self.c = 'magenta'
                print(self.c)
            elif colorcito.lower() == 'morado2':
                self.c = 'darkorchid'
                print(self.c)
            elif colorcito.lower() == 'morado3':
                self.c = 'purple'
                print(self.c)
            elif colorcito.lower() == 'verde':
                self.c = 'lightgreen'
                print(self.c)
            elif colorcito.lower() == 'verde2':
                self.c = 'forestgreen'
                print(self.c)
            elif colorcito.lower() == 'verde3':
                self.c = 'green'
                print(self.c)
            elif colorcito.lower() == 'blanco':
                self.c = 'White'
                print(self.c)
            elif colorcito == '#':
                self.col = defecto
                if self.col == 'azul':
                    self.c = 'Aliceblue'
                    print(self.c)
                elif self.col == 'azul2':
                    self.c = 'Blueviolet'
                    print(self.c)
                elif self.col == 'azul3':
                    self.c = 'Blue'
                    print(self.c)
                elif self.col == 'rojo':
                    self.c = 'darksalmon'
                    print(self.c)
                elif self.col == 'rojo2':
                    self.c = 'tomato'
                    print(self.c)
                elif self.col == 'rojo3':
                    self.c = 'red'
                    print(self.c)
                elif self.col == 'amarillo':
                    self.c = 'gold'
                    print(self.c)
                elif self.col == 'amarillo2':
                    self.c = 'lightgoldenrod'
                    print(self.c)
                elif self.col == 'amarillo3':
                    self.c = 'yellow'
                    print(self.c)
                elif self.col == 'anaranjado':
                    self.c = 'orange'
                    print(self.c)
                elif self.col == 'anaranjado2':
                    self.c = 'darkorange'
                    print(self.c)
                elif self.col == 'anaranjado3':
                    self.c = 'orangered'
                    print(self.c)
                elif self.col == 'cafe':
                    self.c = 'burlywood'
                    print(self.c)
                elif self.col == 'cafe2':
                    self.c = 'chocolate'
                    print(self.c)
                elif self.col == 'cafe3':
                    self.c = 'brown'
                    print(self.c)
                elif self.col == 'gris':
                    self.c = 'lightgray'
                    print(self.c)
                elif self.col == 'gris2':
                    self.c = 'gray'
                    print(self.c)
                elif self.col == 'gris3':
                    self.c = 'dimgray'
                    print(self.c)
                elif self.col == 'morado':
                    self.c = 'magenta'
                    print(self.c)
                elif self.col == 'morado2':
                    self.c = 'darkorchid'
                    print(self.c)
                elif self.col == 'morado3':
                    self.c = 'purple'
                    print(self.c)
                elif self.col == 'verde':
                    self.c = 'lightgreen'
                    print(self.c)
                elif self.col == 'verde2':
                    self.c = 'forestgreen'
                    print(self.c)
                elif self.col == 'verde3':
                    self.c = 'green'
                    print(self.c)
                elif self.col == 'blanco':
                    self.c = 'White'
                    print(self.c)
            else:
                print('Error')
        for val in valor:
            if val == '#':
                self.attributes = defecto_val
                print(self.attributes)
            else:
                print(val)



