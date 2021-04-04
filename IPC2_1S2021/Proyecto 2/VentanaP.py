'''from tkinter import *
from tkinter import filedialog
from tkinter import messagebox
import tkinter as tk
import xml.etree.ElementTree as ET
import Datos

d = Datos.Data()


def win_principal():
    header = Tk()
    # --------------- Main Window -------------
    header.title('Ventana Principal')
    header.iconbitmap('Pantalla.ico')

    # --------------- frame --------------------
    frame = Frame(header, width=400, height=300)
    frame.config(bg='white smoke')
    frame.pack()

    # -------------- Component -----------------
    text_space = Text(frame)
    text_space.place(x=0, y=50)
    text_space.config(width=22, height=15)
    text_space.insert(INSERT, '')
    text_space.config(state='disabled')

    text_space2 = Text(frame)
    text_space2.place(x=205, y=50)
    text_space2.config(width=22, height=15)
    text_space2.insert(INSERT, '')
    text_space2.config(state='disabled')

    # --------------------- Function ----------------------
    def openFile():
        global Name, row, column, image

        try:
            file = filedialog.askopenfile(title='abrir', initialdir='C://descargas',
                                          filetypes=[('Archivo xml', '*.xml')])
            file_xml = ET.parse(file)
            root_xml = file_xml.getroot()
            for element in root_xml:
                for sub in element:
                    if sub.tag == 'nombre':
                        Name = sub.text
                    if sub.tag == 'filas':
                        row = sub.text
                    if sub.tag == 'columnas':
                        column = sub.text
                    if sub.tag == 'imagen':
                        image = sub.text
                d.get_data(Name, row, column, image)
                d.get_dataImage(image, column, Name)
        except:
            messagebox.showwarning('Warning', 'Por favor seleccione un archivo correcto')

    def ven_operation():
        win_operation = tk.Toplevel()
        win_operation.title('Ventana Operaciones')
        win_operation.config(width=1200, height=500, bg='sky blue')
        rot_horizontal = tk.Button(win_operation, text='Rotación Horizontal', font=('Modern Love Caps', 9),
                                   fg='dark green',
                                   padx=8, pady=8).place(x=15, y=15)
        rot_vertical = tk.Button(win_operation, text='Rotación Vertical', font=('Modern Love Caps', 9), fg='dark green',
                                 padx=8, pady=8).place(x=15, y=60)
        trans = tk.Button(win_operation, text='Transpuesta', font=('Modern Love Caps', 9), fg='dark green', padx=8,
                          pady=8).place(x=15, y=105)
        clear = tk.Button(win_operation, text='Limpiar', font=('Modern Love Caps', 9), fg='dark green', padx=8,
                          pady=8).place(x=15, y=150)
        add_horizontal = tk.Button(win_operation, text='Agregar Horizontal', font=('Modern Love Caps', 9),
                                   fg='dark green',
                                   padx=8, pady=8).place(x=15, y=195)
        add_vertical = tk.Button(win_operation, text='Agregar Vertical', font=('Modern Love Caps', 9), fg='dark green',
                                 padx=8, pady=8).place(x=15, y=240)
        add_rectangle = tk.Button(win_operation, text='Agregar Rectangulo', font=('Modern Love Caps', 9),
                                  fg='dark green',
                                  padx=8, pady=8).place(x=15, y=285)
        add_triangle = tk.Button(win_operation, text='Agregar Triangulo', font=('Modern Love Caps', 9), fg='dark green',
                                 padx=8, pady=8).place(x=15, y=330)
        goBack = tk.Button(win_operation, text='Regresar', font=('Modern Love Caps', 9), fg='dark green', padx=8,
                           pady=8,
                           command=win_operation.destroy).place(x=15, y=430)
        view = tk.Button(win_operation, text='Ver Matriz', font=('Modern Love Caps', 9), fg='dark green', padx=8,
                         pady=8).place(x=15, y=380)

        area1 = Text(win_operation)
        area1.place(x=200, y=15)
        area1.config(width=55, height=28)
        area1.config(state='disabled')

        area2 = Text(win_operation)
        area2.place(x=715, y=15)
        area2.config(width=55, height=28)
        area2.config(state='disabled')

    def data_Project():
        win_dProject = tk.Toplevel()
        win_dProject.title('Ventana de Datos')
        win_dProject.config(width=600, height=300, bg='SpringGreen4')
        name = tk.Label(win_dProject, text='Nombre: Eduardo René Agustin Mendoza', font=('Modern Love Caps', 9),
                        fg='dark green', padx=8, pady=8).place(x=15, y=15)
        carne = tk.Label(win_dProject, text='Carné: 201801627', font=('Modern Love Caps', 9), fg='dark green', padx=8,
                         pady=8).place(x=15, y=60)
        curso = tk.Label(win_dProject, text='Introduccion a la Programación y Computación 2',
                         font=('Modern Love Caps', 9),
                         fg='dark green', padx=8, pady=8).place(x=15, y=105)
        goBack = tk.Button(win_dProject, text='Regresar', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8,
                           command=win_dProject.destroy).place(x=15, y=250)

    # ------------------ Buttons ------------------
    load_button = Button(frame, text='Cargar Archivo', font=('Modern Love Caps', 9), padx=8, pady=8,
                         command=openFile).place(x=0, y=0)
    Operation = Button(frame, text='Operaciones', font=('Modern Love Caps', 9), padx=8, pady=8,
                       command=ven_operation).place(x=125, y=0)
    Report = Button(frame, text='Reportes', font=('Modern Love Caps', 9), padx=8, pady=8).place(x=235, y=0)
    Help = Button(frame, text='Ayuda', font=('Modern Love Caps', 10), padx=8, pady=8, command=data_Project).place(x=325,
                                                                                                                  y=0)

    header.mainloop()


win_principal()'''
