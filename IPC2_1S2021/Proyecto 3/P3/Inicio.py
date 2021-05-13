from flask import Flask, request, jsonify, Response, redirect
from flask_cors import CORS
from Procesar import procesoDatos
import XMLSalida
import Procesar
import os
from Grafica import GraficarUser

import xml.etree.ElementTree as ET 
import xmltodict
import base64

salida = None
archivo = None
usuario =  None
cont = None
user = None

app = Flask(__name__)
app.config['DEBUG'] = True
cors = CORS(app, resourse={r"/*":{"origin*":"*"}})

CORS(app)

@app.route('/')
def home():
    return redirect('SERVER IS WORKING!!!')


# Cargar el archivo
@app.route('/abrirArchivo', methods=['POST'])
def abrirArchivo():
    global archivo
    datos = request.get_json()
    if datos['data'] == '':
        return {"msg": 'Error en contenido'}
    contenido = base64.b64decode(datos['data']).decode('utf-8')
    print(contenido)
    archivo = procesoDatos(contenido)
    return Response(contenido)


# Mostrar el archivo de carga
@app.route('/abrirArchivo', methods=['GET'])
def mostrar():
    global archivo
    data = archivo
    return Response(response=data, 
                    mimetype='text/plain', 
                    content_type='text/plain')
                    
# Mostrar el xml
@app.route('/mostrarXML', methods=['GET'])
def mostrarxml():
    archivo_xml = open('Estadistica.xml', 'r')
    archivo_salida = archivo_xml.read()
    archivo_xml.close()
    return Response(archivo_salida, mimetype='text/xml')


#resetear el servidor
@app.route('/reset', methods=['GET'])
def reseterar():
    global user, usuario, cont
    os.remove('Estadistica.xml')
    os.remove('Grafica Usuario Fecha.png')
    #os.remove('Grafica Error Fecha.png')
    Procesar.List_data = []
    XMLSalida.lista_aux_fecha=[]
    XMLSalida.lista_aux_fecha_user=[]
    XMLSalida.list_fechas = []
    XMLSalida.usuarios=[]
    XMLSalida.Afectados=[]
    XMLSalida.errores=[]
    usuario = []
    user = []
    cont = []
    print('Server Reset')
    return Response('Reset Complet', mimetype='text/plain')


#F por U
@app.route('/User', methods=['POST'])
def usuarios():
    global usuario, cont
    fecha = request.data.decode('utf-8')
    lista = XMLSalida.userDate(fecha)
    user=[]
    cont=[]
    for list in lista:
        user.append(list.user)
        cont.append(list.cant)

    retorno = {'usuario': user,
               'contador': cont
               }
    # GraficaError(user, cont)
    print('Cliente')
    print(user)
    print(cont)

    return jsonify(retorno)


#F por E
@app.route('/Error', methods=['POST'])
def error():
    global user, cont
    fecha = request.data.decode('utf-8')
    lista = XMLSalida.errorDate(fecha)
    user=[]
    cont=[]
    for list in lista:
        user.append(list.user)
        cont.append(list.cant)

    retorno = {'usuario': user,
               'contador': cont
               }
    # GraficaError(user, cont)
    print('Errores')
    print(user)
    print(cont)

    return jsonify(retorno)

# Iniciar el servidor
if __name__ == '__main__':
    app.run(debug=True)
