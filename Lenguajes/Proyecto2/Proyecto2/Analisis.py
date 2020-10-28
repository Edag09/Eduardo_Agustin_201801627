
data = ''



def Graph():
    analyzed(data)


def analyzed(file):
    for line in file:
        cad = line.split(' ', '')
        print(cad)
