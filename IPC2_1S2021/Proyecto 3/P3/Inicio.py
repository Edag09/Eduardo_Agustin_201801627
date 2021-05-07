from flask import Flask, request, jsonify, Response, redirect
from flask_cors import CORS
from Procesar import procesoDatos

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


@app.route('/abrirArchivo', methods=['POST'])
def abrirArchivo():
    global archivo
    datos = request.get_json()
    if datos['data'] == '':
        return {"msg": 'Error en contenido'}
    contenido = base64.b64decode(datos['data']).decode('utf-8')
    archivo = procesoDatos(contenido)
    return Response(contenido)

@app.route('/abrirArchivo', methods=['GET'])
def mostrar():
    global archivo
    data = archivo
    return Response(response=data, 
                    mimetype='text/plain', 
                    content_type='text/plain')


@app.route('/mostrarXML', methods=['GET'])
def mostrarXML():
    archivo_xml = open('Estadistica.xml', 'r')
    archivo_enviado = archivo_xml.read()
    return Response(archivo_enviado, mimetype='text/xml')

if __name__ == '__main__':
    app.run(debug=True)