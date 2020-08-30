from Metodos import Metodos


# Esta función recibe la expresion para convertirla
def evaluar(expresion_infija, tamanio, expresion_postfija):
    expresion_postfija = convertir(expresion_infija, tamanio, expresion_postfija)
    print("La expresion postfija es: ", limpiar_expresion("".join(expresion_postfija)))


# Esta funcion convierte la expresion a su manera posfija
def convertir(expresion_infija, tamanio, expresion_posfija):
    metodos = Metodos(tamanio, expresion_posfija)

    i = 0

    # Se recorre la expresion
    while i < len(expresion_infija):
        if metodos.es_operador(expresion_infija, i):
            if metodos.pila_vacia():
                metodos.apilar(expresion_infija[i])
            else:
                # Evalua las prioridades
                if metodos.prioridad_operacion(expresion_infija, i) > metodos.prioridad_pila():
                    metodos.apilar(expresion_infija[i])
                else:
                    expresion_posfija += metodos.desapilar()
                    metodos.apilar(expresion_infija[i])

        else:
            expresion_posfija += expresion_infija[i]
        i += 1

    while not metodos.pila_vacia():
        expresion_posfija.append(metodos.desapilar())

    return expresion_posfija


def limpiar_expresion(expresion):
    expresion = expresion.replace("(", "")
    expresion = expresion.replace(")", "")
    expresion = expresion.replace("[", "")
    expresion = expresion.replace("]", "")
    return expresion
