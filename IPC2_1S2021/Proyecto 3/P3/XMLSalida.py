import xml.etree.ElementTree as ET


class Lists:
    def __init__(self, fecha, cantidad, usuarios, afectados, errores):
        self.fecha = fecha
        self.cantidad = cantidad
        self.usuarios = usuarios
        self.afectados = afectados
        self.errores = errores


class Users:
    def __init__(self, user, cant):
        self.user = user
        self.cant = cant


lista_aux_fecha = []
lista_aux_fecha_user = []
list_fechas = []
usuarios = []
Afectados = []
errores = []


def Data(informacion):
    global lista_aux_fecha, lista_aux_fecha_user, list_fechas, usuarios, Afectados, errores
    for fe in informacion:
        if fe.Date not in lista_aux_fecha:
            lista_aux_fecha.append(fe.Date)
    for f in lista_aux_fecha:
        cont = 0
        for l in informacion:
            if l.Date == f:
                cont += 1
                usuarios.append(l.User)
                Afectados = Afectados + l.Report
                errores.append(l.Error)
        list_fechas.append(Lists(f, cont, usuarios, Afectados, errores))
        usuarios = []
        Afectados = []
        errores = []
    lista_aux_fecha = []

    for dd in list_fechas:
        usuariofecha = dd.usuarios
        for usuario in usuariofecha:
            if usuario not in lista_aux_fecha_user:
                lista_aux_fecha_user.append(usuario)
        for f in lista_aux_fecha_user:
            cont = 0
            for l in usuariofecha:
                if l == f:
                    cont += 1
            usuarios.append(Users(f, cont))
        dd.usuarios = usuarios
        lista_aux_fecha_user = []
        usuarios = []

    for dd in list_fechas:
        usuariofecha = dd.afectados
        for usuario in usuariofecha:
            if usuario not in lista_aux_fecha_user:
                lista_aux_fecha_user.append(usuario)
        for f in lista_aux_fecha_user:
            cont = 0
            for l in usuariofecha:
                if l == f:
                    cont += 1
            usuarios.append(Users(f, cont))
        dd.afectados = usuarios
        lista_aux_fecha_user = []
        usuarios = []

    for dd in list_fechas:
        usuariofecha = dd.errores
        for usuario in usuariofecha:
            if usuario not in lista_aux_fecha_user:
                lista_aux_fecha_user.append(usuario)
        for f in lista_aux_fecha_user:
            cont = 0
            for l in usuariofecha:
                if l == f:
                    cont += 1
            usuarios.append(Users(f, cont))
        dd.errores = usuarios
        lista_aux_fecha_user = []
        usuarios = []


def Output_file():
    global list_fechas
    ESTADISTICAS = ET.Element('ESTADISTICAS')
    for fecha in list_fechas:
        ESTADISTICA = ET.SubElement(ESTADISTICAS, 'ESTADISTICA')
        FECHA = ET.SubElement(ESTADISTICA, 'FECHA')
        FECHA.text = fecha.fecha
        CANTIDAD = ET.SubElement(ESTADISTICA, 'CANTIDAD_MENSAJES')
        CANTIDAD.text = str(fecha.cantidad)
        REPORTADO = ET.SubElement(ESTADISTICA, 'REPORTADO_POR')
        for user in fecha.usuarios:
            USUARIOS = ET.SubElement(REPORTADO, 'USUARIO')
            EMAIL = ET.SubElement(USUARIOS, 'EMAIL')
            EMAIL.text = user.user
            CANTIDADUSUARIO = ET.SubElement(USUARIOS, 'CANTIDAD_MENSAJES')
            CANTIDADUSUARIO.text = str(user.cant)
        AFECTADOS = ET.SubElement(ESTADISTICA, 'AFECTADOS')
        for afec in fecha.afectados:
            AFECTADO = ET.SubElement(AFECTADOS, 'AFECTADO')
            AFECTADO.text = afec.user
        ERRORES = ET.SubElement(ESTADISTICA, 'ERRORES')
        for error in fecha.errores:
            ERROR = ET.SubElement(ERRORES, 'ERROR')
            CODIGO = ET.SubElement(ERROR, 'CODIGO')
            CODIGO.text = error.user
            CANTIDADERROR = ET.SubElement(ERROR, 'CANTIDAD_MENSAJES')
            CANTIDADERROR.text = str(error.cant)
    mydata = ET.tostring(ESTADISTICAS)
    myfile = open('Estadistica.xml', "w")
    myfile.write(str(mydata))
    myfile.close()
    print('Succeful')