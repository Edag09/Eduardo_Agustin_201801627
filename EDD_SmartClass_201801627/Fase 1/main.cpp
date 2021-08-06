#include <iostream>
#include <fstream>
#include <string>
#include <locale.h>
#include "Analizador.h"

using namespace std;

class Menus{
    public:
    void UpdateData();
    void Homework();
    void Student();
    void MenuManualEntry();
    void menu();
};

void Menus :: UpdateData(){

    setlocale(LC_ALL, "Spanish");
    ifstream file;
    string text, dir;

    cout << "Ingresa la ruta:\t\n";
    cin>>dir;

    file.open(dir.c_str(), ios::in);

    if (file.fail()){
        cout<<"Archivo incorrecto";
        exit(1);
    }

    while (!file.eof()){
        getline(file, text);
        (new Analyzer())->print(text);
    }


    file.close();
}

void Menus :: Homework(){
    int opc;
    bool status = true;
    do {
        cout << "\n\t\t\tMenu Tareas Smart Class\n";
        cout << "\t\t\t--------------------------\n";
        cout << "1- Ingresar\n";
        cout << "2- Modificar\n";
        cout << "3- Eliminar\n";
        cout << "4- Regrear\n";
        cout << "Ingresa una opcion:\t";
        cin >> opc;

        switch (opc) {
            case 1:
                cout << "Ingresar Estudiante\n";
                break;
            case 2:
                cout << "Modificar Estudiante\n";
                break;
            case 3:
                cout << "Eliminar Estudiante\n";
                break;
            case 4:
                status = false;
                break;
            default:
                cout << "Tu opcion es incorrecta animal :)\n";
                break;
        }

    }   while   (status);
}

void Menus :: Student(){
    int opc;
    bool status = true;
    do {
        cout << "\n\t\t\tMenu Estudiantes Smart Class\n";
        cout << "\t\t\t--------------------------\n";
        cout << "1- Ingresar\n";
        cout << "2- Modificar\n";
        cout << "3- Eliminar\n";
        cout << "4- Regrear\n";
        cout << "Ingresa una opcion:\t";
        cin >> opc;

        switch (opc) {
            case 1:
                cout << "Ingresar Estudiante\n";
                break;
            case 2:
                cout << "Modificar Estudiante\n";
                break;
            case 3:
                cout << "Eliminar Estudiante\n";
                break;
            case 4:
                status = false;
                break;
            default:
                cout << "Tu opcion es incorrecta animal :)\n";
                break;
        }

    } while (status);
}

void Menus :: MenuManualEntry(){
    int opc;
    bool status = true;
    do {
        cout << "\n\t\t\tMenu Entrada Smart Class\n";
        cout << "\t\t\t--------------------------\n";
        cout << "1- Estudiantes\n";
        cout << "2- Tareas\n";
        cout << "3- Salir\n";
        cout << "Ingresa una opcion:\t";
        cin >> opc;

        switch (opc) {
            case 1:
                cout << "Ingresar Estudiante\n";
                Student();
                break;
            case 2:
                cout << "Ingresar Tareas\n";
                Homework();
                break;
            case 3:
                cout << "Regresar\n";
                status = false;
                break;
            default:
                cout << "Tu opcion es incorrecta animal :)\n";
                break;
        }
    } while (status);
}

void Menus :: menu(){
    int opc;
    bool status = true;
    do {
        cout << "\n\t\t\tMenu Principal Smart Class\n";
        cout << "\t\t\t--------------------------\n";
        cout << "1- Cargar Estudiantes\n";
        cout << "2- Cargar Tareas\n";
        cout << "3- Ingreso manual\n";
        cout << "4- Reportes\n";
        cout << "5- Salir\n";
        cout << "Ingresa una opcion:\t";
        cin >> opc;

        switch (opc) {
            case 1:
                UpdateData();
                break;
            case 2:
                cout << "\n";
                break;
            case 3:
                MenuManualEntry();
                break;
            case 4:
                cout << "\n";
                break;
            case 5:
                cout << "Gus bai";
                status = false;
                break;
            default:
                cout << "Tu opcion es incorrecta animal :) \n";
                break;
        }
    } while (status);
}

int main() {
    Menus menu;
    menu.menu();
    return 0;
}

