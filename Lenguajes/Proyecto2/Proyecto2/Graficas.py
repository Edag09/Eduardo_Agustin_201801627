from graphviz import Digraph


class draw:

    def graph(self, form, valor, color, enlace, nombre):
        i = 0
        c = 0
        f = Digraph(format='svg', name='lista')
        f.attr(rankdir='LR', size='10', label=nombre)
        for figure in form:
            if figure.lower() == 'circulo':
                self.form = 'circle'
                print(self.form)
            elif figure.lower() == 'rectangulo':
                self.form = 'box'
                print(self.form)
            elif figure.lower() == 'triangulo':
                self.form = 'triangle'
                print(self.form)
            elif figure.lower() == 'punto':
                self.form = 'point'
                print(self.form)
            elif figure.lower() == 'hexagono':
                self.form = 'hexagon'
                print(self.form)
            elif figure.lower() == 'diamante':
                self.form = 'diamond'
                print(self.form)
        f.attr('node', shape=self.form)
        while c <= len(color):
            if c == len(color):
                break
            else:
                if color[c].lower() == 'azul':
                    f.node(valor[c], style='filled', fillcolor='Aliceblue')
                    c += 1
                elif color[c].lower() == 'azul2':
                    f.node(valor[c], style='filled', fillcolor='Blueviolet')
                    c += 1
                elif color[c].lower() == 'azul3':
                    f.node(valor[c], style='filled', fillcolor='Blue')
                    c += 1
                elif color[c].lower() == 'rojo':
                    f.node(valor[c], style='filled', fillcolor='darksalmon')
                    c += 1
                elif color[c].lower() == 'rojo2':
                    f.node(valor[c], style='filled', fillcolor='tomato')
                    c += 1
                elif color[c].lower() == 'rojo3':
                    f.node(valor[c], style='filled', fillcolor='red')
                    c += 1
                elif color[c].lower() == 'amarillo':
                    f.node(valor[c], style='filled', fillcolor='gold')
                    c += 1
                elif color[c].lower() == 'amarillo2':
                    f.node(valor[c], style='filled', fillcolor='lightgoldenrod')
                    c += 1
                elif color[c].lower() == 'amarillo3':
                    f.node(valor[c], style='filled', fillcolor='yellow')
                    c += 1
                elif color[c].lower() == 'anaranjado':
                    f.node(valor[c], style='filled', fillcolor='orange')
                    c += 1
                elif color[c].lower() == 'anaranjado2':
                    f.node(valor[c], style='filled', fillcolor='darkorange')
                    c += 1
                elif color[c].lower() == 'anaranjado3':
                    f.node(valor[c], style='filled', fillcolor='orangered')
                    c += 1
                elif color[c].lower() == 'cafe':
                    f.node(valor[c], style='filled', fillcolor='burlywood')
                    c += 1
                elif color[c].lower() == 'cafe2':
                    f.node(valor[c], style='filled', fillcolor='chocolate')
                    c += 1
                elif color[c].lower() == 'cafe3':
                    f.node(valor[c], style='filled', fillcolor='brown')
                    c += 1
                elif color[c].lower() == 'gris':
                    f.node(valor[c], style='filled', fillcolor='lightgray')
                    c += 1
                elif color[c].lower() == 'gris2':
                    f.node(valor[c], style='filled', fillcolor='gray')
                    c += 1
                elif color[c].lower() == 'gris3':
                    f.node(valor[c], style='filled', fillcolor='dimgray')
                    c += 1
                elif color[c].lower() == 'morado':
                    f.node(valor[c], style='filled', fillcolor='magenta')
                    c += 1
                elif color[c].lower() == 'morado2':
                    f.node(valor[c], style='filled', fillcolor='darkorchid')
                    c += 1
                elif color[c].lower() == 'morado3':
                    f.node(valor[c], style='filled', fillcolor='purple')
                    c += 1
                elif color[c].lower() == 'verde':
                    f.node(valor[c], style='filled', fillcolor='lightgreen')
                    c += 1
                elif color[c].lower() == 'verde2':
                    f.node(valor[c], style='filled', fillcolor='forestgreen')
                    c += 1
                elif color[c].lower() == 'verde3':
                    f.node(valor[c], style='filled', fillcolor='green')
                    c += 1
                elif color[c].lower() == 'blanco':
                    f.node(valor[c], style='filled', fillcolor='White')
                    c += 1
                else:
                    print('Error')
            while i <= len(valor):
                if (i + 1) == len(valor):
                    break
                else:
                    if enlace.lower() == 'verdadero':
                        f.edge(valor[i], valor[i + 1], label=' ')
                        f.edge(valor[i + 1], valor[i], label=' ')
                    else:
                        f.edge(valor[i], valor[i + 1], label=' ')
                i += 1
        f.view()

    def Threelist(self):
        f = Digraph(format='png', name='Arbol De Derivacion')
        f.attr(rankdir='same', size='8')
        f.attr('node', style='filled', fillcolor='Aliceblue')
        f.attr('node', shape='circle')
        f.edge('S', 'lista', label=' ')
        f.edge('lista', '(', label=' ')
        f.edge('lista', '<nombre>', label=' ')
        f.edge('lista', '<,>', label=' ')
        f.edge('lista', '<forma>', label=' ')
        f.edge('lista', '<,>', label=' ')
        f.edge('lista', '<lista doble>', label=' ')
        f.edge('lista', ')', label=' ')
        f.edge('lista', '{', label=' ')
        f.edge('lista', '<ELEMENTOS>', label=' ')
        f.edge('lista', '}', label=' ')
        f.edge('lista', '<defecto>', label=' ')
        f.edge('lista', '<color>', label=' ')
        f.edge('lista', ';', label=' ')

        f.edge('ELEMENTOS', '<nodo>', label=' ')
        f.edge('ELEMENTOS', '<nodos>', label=' ')

        f.edge('<nodo>', 'N(', label=' ')
        f.edge('<nodo>', '<valor>', label=' ')
        f.edge('<nodo>', ')N', label=' ')
        f.edge('<nodo>', 'colorN', label=' ')
        f.edge('<nodo>', ';N', label=' ')

        f.edge('<nodos>', 'Ns(', label=' ')
        f.edge('<nodos>', '<num>', label=' ')
        f.edge('<nodos>', '<,>', label=' ')
        f.edge('<nodos>', '<val>', label=' ')
        f.edge('<nodos>', ')Ns', label=' ')
        f.edge('<nodos>', 'colorNs', label=' ')
        f.edge('<nodos>', ';Ns', label=' ')

        f.view()

    def ThreeTable(self):
        f = Digraph(format='png', name='Arbol De Derivacion')
        f.attr(rankdir='same', size='8')
        f.attr('node', style='filled', fillcolor='Aliceblue')
        f.attr('node', shape='circle')
        f.edge('S', 'tabla', label=' ')
        f.edge('tabla', '(', label=' ')
        f.edge('tabla', '<numero>', label=' ')
        f.edge('tabla', '<,>', label=' ')
        f.edge('tabla', '<titulo>', label=' ')
        f.edge('tabla', ')', label=' ')
        f.edge('tabla', '{', label=' ')
        f.edge('tabla', '<ELEMENTOS>', label=' ')
        f.edge('tabla', '}', label=' ')
        f.edge('tabla', '<defecto>', label=' ')
        f.edge('tabla', '<color>', label=' ')
        f.edge('tabla', ';', label=' ')

        f.edge('ELEMENTOS', '<fila>', label=' ')
        f.edge('ELEMENTOS', '<encabezado>', label=' ')

        f.edge('<fila>', 'N(', label=' ')
        f.edge('<fila>', 'VALORES', label=' ')
        f.edge('<fila>', ')N', label=' ')
        f.edge('<fila>', 'colorN', label=' ')
        f.edge('<fila>', ';N', label=' ')

        f.edge('<encabezado>', 'Ns(', label=' ')
        f.edge('<encabezado>', 'VALORESe', label=' ')
        f.edge('<encabezado>', ')Ns', label=' ')
        f.edge('<encabezado>', 'colorNs', label=' ')
        f.edge('<encabezado>', ';Ns', label=' ')

        f.edge('VALORES', '<valor>', label=' ')
        f.edge('VALORES', '<,v>', label=' ')

        f.edge('VALORESe', '<val>', label=' ')
        f.edge('VALORESe', '<,e>', label=' ')

        f.view()

    def ThreeM(self):
        f = Digraph(format='png', name='Arbol De Derivacion')
        f.attr(rankdir='same', size='8')

        f.attr('node', style='filled', fillcolor='Aliceblue')
        f.attr('node', shape='circle')

        f.edge('Matriz', 'M(', label=' ')
        f.edge('Matriz', 'x', label=' ')
        f.edge('Matriz', ',1', label=' ')
        f.edge('Matriz', 'y', label=' ')
        f.edge('Matriz', ',2', label=' ')
        f.edge('Matriz', 'Titulo', label=' ')
        f.edge('Matriz', 'Figura', label=' ')
        f.edge('Matriz', 'Lista', label=' ')
        f.edge('Matriz', ')M', label=' ')
        f.edge('Matriz', '{', label=' ')
        f.edge('{', 'Fila', label=' ')
        f.edge('{', 'F(', label=' ')
        f.edge('F(', 'Valor', label=' ')
        f.edge('F(', ',F', label=' ')
        f.edge('{', ')F', label=' ')
        f.edge('{', 'colorF', label=' ')
        f.edge('{', ';F', label=' ')
        f.edge('{', 'Nodo', label=' ')
        f.edge('{', 'N(', label=' ')
        f.edge('N(', 'X', label=' ')
        f.edge('N(', ',x', label=' ')
        f.edge('N(', 'Y', label=' ')
        f.edge('N(', ',y', label=' ')
        f.edge('N(', 'valorN', label=' ')
        f.edge('{', ')N', label=' ')
        f.edge('{', 'colorN', label=' ')
        f.edge('{', ';N', label=' ')
        f.edge('{', '}', label=' ')
        f.edge('{', 'valorD', label=' ')
        f.edge('{', 'colorD', label=' ')
        f.edge('{', ';D', label=' ')

        f.view()
