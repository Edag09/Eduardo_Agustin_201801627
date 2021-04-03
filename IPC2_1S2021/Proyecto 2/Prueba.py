from tkinter import *

root = Tk()  # Inicio de ventana

root.title('Inicio')  # Titulo de la ventana
# root.resizable(0, 0)   # Poder expandir la ventana
root.iconbitmap('Pantalla.ico')  # Icono de la ventana
# root.geometry('550x350')   # Dar altura y anchura
root.config(bg='white')  # Color del fondo de la ventana

frame = Frame()  # Declarar el fram
frame.pack(fill='both', expand='True')  # Hacer que el frame ocupe toda la ventana
frame.config(bg='skyblue')  # Color del frame
frame.config(width='650', height='350')  # tamanio del frame
frame.config(bd=10)  # tamanio del borde
# frame.config(relief='groove')  # para bordes
frame.config(cursor='hand2')  # modificar cursor
# Label(frame, text='Prueba', fg='red', font=('Comic Sans MS', 16)).place(x=100, y=200)  # Agregar texto
# Myimage = PhotoImage(file='ruta de la imagen')
# Label(frame, image=Myimage).place(x=100, y=200)  # Agregar imagen
label = Label(frame, text='Nombre: ')
label.grid(row=0, column=0, sticky='w', padx=10, pady=10)   # el sticky sirve para mover el texto de un lado a otro
text = Entry(frame)
text.config(justify='center') # en el argumento va el lugar en donde lo colocaremos
# text.place(x=100, y=200)
text.grid(row=0, column=1)
root.mainloop()
