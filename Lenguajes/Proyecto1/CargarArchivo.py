class Data:

    def Load(self):
        try:
            Entry = input("Ingresar la ruta del archivo: ")
            file = open(Entry, "r")
            Reading = file.read()
            F = Reading.split("\n")
            for F in F:
                print(F)
            file.close()
        except:
            print("No se ha leido el archivo")
            Data().Load()
