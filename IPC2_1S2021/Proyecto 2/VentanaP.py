from tkinter import *
from tkinter import messagebox
import tkinter as tk
from Datos import Data

datos = Data()

text = ''
root = Tk()
# --------------- Main Window -------------
root.title('Ventana Principal')
root.iconbitmap('Pantalla.ico')

# --------------- frame --------------------
frame = Frame(root, width=400, height=300)
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
    win_operation = tk.Toplevel()
    win_operation.title('Ventana Operaciones')
    win_operation.config(width=1200, height=500, bg='sky blue')
    rot_horizontal = tk.Button(win_operation, text='Rotación Horizontal', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=15)
    rot_vertical = tk.Button(win_operation, text='Rotación Vertical', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=60)
    trans = tk.Button(win_operation, text='Transpuesta', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=105)
    clear = tk.Button(win_operation, text='Limpiar', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=150)
    add_horizontal = tk.Button(win_operation, text='Agregar Horizontal', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=195)
    add_vertical = tk.Button(win_operation, text='Agregar Vertical', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=240)
    add_rectangle = tk.Button(win_operation, text='Agregar Rectangulo', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=285)
    add_triangle = tk.Button(win_operation, text='Agregar Triangulo', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8).place(x=15, y=330)
    goBack = tk.Button(win_operation, text='Regresar', font=('Modern Love Caps', 9), fg='dark green', padx=8, pady=8, command=win_operation.destroy).place(x=15, y=430)

    area1 = Text(win_operation)
    area1.place(x=200, y=15)
    area1.config(width=55, height=28)
    area1.config(state='disabled')

    area2 = Text(win_operation)
    area2.place(x=715, y=15)
    area2.config(width=55, height=28)
    area2.config(state='disabled')

def Message():
    messagebox.showwarning('Warning', 'Seleccion incorrecta')


def Exit():
    root.withdraw()
    v2 = tk.Toplevel()
    v2.configure(width=400, height=300, bg='dark turquoise')
    e3 = tk.Label(v2, text='Holi', bg='red', fg='white')
    e3.pack(padx=5, pady=5, ipadx=5, ipady=5, fill=tk.X)
    bot = tk.Button(v2, text='Ok', command=v2.destroy)
    bot.pack(side=tk.TOP)


# ------------------ Buttons ------------------
load_button = Button(frame, text='Cargar Archivo', font=('Arial', 9), padx=8, pady=8,
                     command=openFile).place(x=0, y=0)
Operation = Button(frame, text='Operaciones', font=('Arial', 9), padx=8, pady=8).place(x=125, y=0)
Report = Button(frame, text='Reportes', font=('Modern Love Caps', 9), padx=8, pady=8).place(x=235, y=0)
Help = Button(frame, text='Ayuda', font=('Modern Love Caps', 10), padx=8, pady=8).place(x=325, y=0)

root.mainloop()
