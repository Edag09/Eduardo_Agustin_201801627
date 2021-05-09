from flask import Flask, request, jsonify, Response, redirect
from flask_cors import CORS
from Procesar import procesoDatos
import XMLSalida
import Procesar
import os

import xml.etree.ElementTree as ET 
import xmltodict
import base64

salida = None
archivo = None

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


# Prueba de ver si se puede pasar a la siguiente pagina
@app.route('/consultaXML', methods=['GET'])
def consultaxml():
    archivo_xml = open('Estadistica.xml', 'r')
    archivo_salida = archivo_xml.read()
    archivo_xml.close()
    return Response(archivo_salida, mimetype='text/xml')


#resetear el servidor
@app.route('/reset', methods=['GET'])
def reseterar():
    os.remove('Estadistica.xml')
    Procesar.List_data = []
    XMLSalida.lista_aux_fecha=[]
    XMLSalida.lista_aux_fecha_user=[]
    XMLSalida.list_fechas = []
    XMLSalida.usuarios=[]
    XMLSalida.Afectados=[]
    XMLSalida.errores=[]
    print('Server Reset')
    return Response('Reset Complet', mimetype='text/plain')


@app.route('/fechas', methods=['POST', 'GET'])
def prueba():
    fecha = request.data.decode('UTF-8')
    print(fecha)
    return Response(fecha, mimetype='text/plain')


#F por U
@app.route('/User', methods=['POST'])
def usuario():
    fecha = request.data.decode('utf-8')
    lista = XMLSalida.userDate(fecha)
    usuario=[]
    cont=[]
    for list in lista:
        usuario.append(list.user)
        cont.append(list.cant)
    Usuarios = {'usuario': usuario,
               'contador': cont
               }
    print('Usuarios Afectados:')
    print(usuario)
    print(cont)
    return jsonify(Usuarios)

#F por E
@app.route('/Error', methods=['POST'])
def error():
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

    print(user)
    print(cont)

    return jsonify(retorno)

# Iniciar el servidor
if __name__ == '__main__':
    app.run(debug=True)
