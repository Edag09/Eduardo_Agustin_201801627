from graphviz import Digraph


def label():
    Graph = Digraph(format='png', name='Etiqueta')
    Graph.attr(rankdir='LR', size='8')

    Graph.attr('node', shape='doublecircle')
    Graph.node('q4', 'q4')

    Graph.attr('node', shape='circle')
    Graph.edge('q0', 'q1', label=' "<" ')
    Graph.edge('q1', 'q2', label='[azAZ]')
    Graph.edge('q2', 'q2', label='[azAZ]')
    Graph.edge('q2', 'q3', label='/')
    Graph.edge('q3', 'q4', label='">"')
    Graph.edge('q2', 'q4', label='">"')

    Graph.view()


def Value():
    Graph = Digraph(format='png', name='Valores')
    Graph.attr(rankdir='LR', size='8')

    Graph.attr('node', shape='doublecircle')
    Graph.node('q1', 'q1')

    Graph.attr('node', shape='circle')
    Graph.edge('q0', 'q1', label='[azAZ]')
    Graph.edge('q1', 'q1', label='[azAZ]')
    Graph.edge('q1', 'q1', label='[0-9]')
    Graph.edge('q1', 'q1', label=' "_" ')
    Graph.view()


def Digit():
    Graph = Digraph(format='png', name='Digito')
    Graph.attr(rankdir='LR', size='8')

    Graph.attr('node', shape='doublecircle')
    Graph.node('q1', 'q1')
    Graph.node('q3', 'q3')

    Graph.attr('node', shape='circle')
    Graph.edge('q0', 'q1', label='[0-9]')
    Graph.edge('q1', 'q1', label='[0-9]')
    Graph.edge('q1', 'q2', label='"."')
    Graph.edge('q2', 'q3', label='[0-9]')
    Graph.edge('q3', 'q3', label='[0-9]')

    Graph.view()


def Color():
    Graph = Digraph(format='png', name='Color')
    Graph.attr(rankdir='LR', size='8')

    Graph.attr('node', shape='doublecircle')
    Graph.node('q2', 'q2')
    Graph.node('q3', 'q3')

    Graph.attr('node', shape='circle')
    Graph.edge('q0', 'q1', label=' "#" ')
    Graph.edge('q1', 'q2', label='[azAZ]')
    Graph.edge('q2', 'q2', label='[azAZ]')
    Graph.edge('q2', 'q2', label='[0-9]')
    Graph.edge('q1', 'q3', label='[0-9]')
    Graph.edge('q3', 'q3', label='[azAZ]')
    Graph.edge('q3', 'q3', label='[0-9]')

    Graph.view()
