import re
import Evaluador
from Operacion import opPost
from Operacion import opPre
from Operacion import opInf

op = opPost()
pre = opPre()
inf = opInf()

expresion_infija = ""


class CargadeDato:
    def archivo(self):
        try:
            entrada = input("Ingresar Nombre de Archivo: ")
            file = open(entrada, "r")
            lecture = file.read()
            F = lecture.split("\n")
            for F in F:
                CargadeDato().comparacion(F)
            file.close()
        except:
            print("No se lee el archivo")
            CargadeDato().archivo()

    def comparacion(self, lecture):
        pattern = lecture
        if re.match("IN", pattern):
            CargadeDato().inf(pattern)
        elif re.match("POST", pattern):
            '''p = pattern.split("POST:")
            for A in p:
                op.post(A)'''
            print(0)
        elif re.match("PRE", pattern):
            print(0)
        else:
            print('Error')

    def inf(self, dato):
        PR = dato.split("IN: ")
        for A in PR:
            print(A)
            convertir(A)

    def pref(self, date):
        In = date.split("PRE: ")
        for A in In:
            pre.pre(A)


def convertir(expresion_infija):
    expresion_infija = list(expresion_infija.upper())
    expresion_postfija = []
    return Evaluador.evaluar(expresion_infija, 100, expresion_postfija)
