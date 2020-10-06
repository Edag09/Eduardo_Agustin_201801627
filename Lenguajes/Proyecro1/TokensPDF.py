import pandas as pd
import numpy as np


def Tokens(token, fila, columna, tokenO):
    Table = {'Lexema': token, 'Fila': fila, 'Columna': columna, 'Token': tokenO}
    df = pd.DataFrame(data=Table)
    txtHTML = df.to_html()
    file = open('TablaCompleta.html', 'w')
    file.write(txtHTML)
    file.close()
