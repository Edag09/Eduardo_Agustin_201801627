import pandas as pd
import numpy as np


def Error(fila, columna, caracter, descripcion):
    Table = {'Fila': fila, 'Columna': columna, 'Caracter': caracter, 'Descripcion': descripcion}
    df = pd.DataFrame(data=Table)
    txtHTML = df.to_html()
    file = open('TablaErrores.html', 'w')
    file.write(txtHTML)
    file.close()


