import xml.etree.ElementTree as ET
import ProcesarArchivo


class load:
    def loadfile(self):
        Entry = input('Ingresa la ruta del archivo: ')
        file_xml = ET.parse(Entry)
        root = file_xml.getroot()
        ProcesarArchivo.data = root
        print('Archivo guardado')





