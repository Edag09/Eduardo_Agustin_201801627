import re


class CargadeDato:
    def archivo(self):
        try:
            entrada = input("Ingresar Nombre de Archivo: ")
            file = open(entrada)
            lectura = file.read()
            F = lectura.split("\n")
            for F in F:
                CargadeDato().comparacion(F)
            file.close()
        except:
            print("La cagaste bai")
            CargadeDato().archivo()

    def comparacion(self, lectura):
        pattern = lectura
        if re.match("IN", pattern):
            print('Encontrado el IN')
            Operaciones().Obasicas()
        elif re.match("POST", pattern):
            print("Encontraste POST")
        elif re.match("PRE", pattern):
            print('Encontraste el PRE')
        else:
            print('caguasaqui')


class Operaciones:
    def Obasicas(self):
        print("holis")