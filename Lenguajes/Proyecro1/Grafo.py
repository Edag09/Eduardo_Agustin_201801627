import digraph as digraph
from graphviz import Digraph

dot = Digraph(comentario='La Mesa Redonda')

dot.node('A', 'Rey Arturo')
dot.node('A', 'Rey Arturo')
dot.node('A', 'Rey Arturo')

dot.edges(['AB', 'AL'])
dot.edge('B', 'L', constraint='False')

print(dot.source)

digraph ejemplo{
    A [label="King Arthur"]
    B [label="Sir Bedevere the Wise"]
    L [label="Sir Lancelot the Brave"]
    A -> B
    A -> L
    B -> L [constraint=false]
}
