#include <iostream>
#include <fstream>
#include <string>
#include <locale.h>
#include <windows.h>
#include "Analizador.h"
using namespace std;

class Menus{
public:
    void UpdateHomework();
    void UpdateData();
    void Homework();
    void Student();
    void MenuManualEntry();
    void menu();
    void insertNewStudent();
    void SubMenuRepo();
    void InsertNewHomework();
    void subsubRepo();
};

void Menus :: subsubRepo() { // Sub menu de los reportes de errores
    int opc, mes, dia, hora;
    bool status = true;
    do {
        cout << "\n\t\t\tMenu Reportes Smart Class\n";
        cout << "\t\t\t--------------------------\n";
        cout << "1- Grafica\n";
        cout << "2- ID Tarea\n";
        cout << "3- Salir\n";
        cout << "Ingresa una opcion:\t";
        cin >> opc;

        switch (opc) {
            case 1:
                cout << "Ver en Grafica\n";
                tarea.ShowHomeworks();
                break;
            case 2:
                cout << "Buscar ID de la tarea\n";
                cout << "Mes: \n";
                cin >> mes;
                cout << "Dia: \n";
                cin >> dia;
                cout << "Hora: \n";
                cin >> hora;
                tarea.SearchNode(mes, dia, hora);
                break;
            case 3:
                cout << "Regresar\n";
                status = false;
                break;
            default:
                cout << "Tu opcion es incorrecta :)\n";
                break;
        }
    } while (status);
}

void Menus :: InsertNewHomework() {
    int mes, dia, hora;
    string carne, nombre, descripcion, materia, fecha, estado;
    //Para insertar con la formula
    cout << "Mes: \n";
    cin >> mes;
    cout << "Dia: \n";
    cin>> dia;
    cout << "Hora: \n";
    cin >> hora;

    //Datos a ingresar
    cout << "Carne: \n";
    getline(cin>>ws, carne);

    cout << "Nombre: \n";
    getline(cin>>ws, nombre);

    cout << "Descripcion: \n";
    getline(cin>>ws, descripcion);

    cout << "Materia: \n";
    getline(cin>>ws, materia);

    cout << "Fecha: \n";
    getline(cin>>ws, fecha);

    cout << "Estados: \n";
    getline(cin>>ws, estado);

    tarea.Insert(mes, dia, hora, carne, nombre, descripcion, materia, fecha, estado);
}

void Menus :: SubMenuRepo() { // Reportes
    int opc;
    bool status = true;
    do {
        cout << "\n\t\t\tMenu Reportes Smart Class\n";
        cout << "\t\t\t--------------------------\n";
        cout << "1- Estudiantes\n";
        cout << "2- Tareas\n";
        cout << "3- Errores\n";
        cout << "4- Salir\n";
        cout << "Ingresa una opcion:\t";
        cin >> opc;

        switch (opc) {
            case 1:
                cout << "Reporte Estudiante\n";
                //estudiante.Show();
                estudiante.ShowGraphvizDC();
                break;
            case 2:
                cout << "Reporte Tareas\n";
                subsubRepo();
                break;
            case 3:
                cout << "Reporte Errores\n";
                tarea.ShowErrorGraphviz();
            case 4:
                cout << "Regresar\n";
                status = false;
                break;
            default:
                cout << "Tu opcion es incorrecta :)\n";
                break;
        }
    } while (status);
}

void Menus :: insertNewStudent(){
    string carne, dpi, nombre, carrera, contrasenia, creditos, edad, correo;
    //Carne
    cout << "Ingresa el Carne: \n";
    cin>>carne;
    //DPI
    cout << "Ingresa el DPI: \n";
    cin>>dpi;
    //Nombre
    cout << "Ingrese el Nombre: \n";
    getline(cin>>ws, nombre);
    //Carrera
    cout << "Ingresa la Carrera: \n";
    getline(cin>>ws, carrera);
    //Contrasenia
    cout << "Ingresa la Contrasenia: \n";
    getline(cin>>ws, contrasenia);
    //Creditos
    cout << "Ingresa los Creditos: \n";
    cin>>creditos;
    //Edad
    cout << "Ingresa la Edad: \n";
    cin>>edad;
    //Correro
    cout << "Ingresa el Correro: \n";
    cin>>correo;
    estudiante.InsertList(carne, dpi, nombre, carrera, contrasenia, creditos, edad, correo);
}

void Menus :: UpdateHomework() {
    setlocale(LC_ALL, "Spanish");  //Funciona el Prueba.csv

    ifstream file;
    string text, dir, cad;

    cout << "Ingresa la ruta:\t\n";
    cin>>dir;

    file.open(dir.c_str(), ios::in);

    if (file.fail()){
        cout<<"Archivo incorrecto\n";
        UpdateHomework();
    }

    while (!file.eof()){
        getline(file, text);
        cad = cad + text + '\n';
    }

    (new Analyzer())->Homework(cad);

    file.close();
}

void Menus :: UpdateData(){
    //SetConsoleOutputCP(CP_UTF8); //Funciona el Estudiantes.csv
    setlocale(LC_ALL, "Spanish");  //Funciona el Prueba.csv

    ifstream file;
    string text, dir, cad;

    cout << "Ingresa la ruta:\t\n";
    cin>>dir;

    file.open(dir.c_str(), ios::in);

    if (file.fail()){
        cout<<"Archivo incorrecto\n";
        UpdateData();
    }

    while (!file.eof()){
        getline(file, text);
        cad = cad + text + '\n';
    }

    (new Analyzer())->Students(cad);

    file.close();

}

void Menus :: Homework(){ // Modificar, Eliminar e Insertar en las tareas
    int opc;
    int car;
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
                cout << "Ingresar Tarea\n";
                InsertNewHomework();
                break;
            case 2:
                cout << "Modificar Tarea\n";
                cout << "Ingresar el ID de la tarea a Modificar\n";
                cin>>car;
                tarea.Modify(car);
                break;
            case 3:
                cout << "Eliminar Tarea\n";
                cout << "Ingresar el ID de la tarea a Eliminar\n";
                cin>>car;
                tarea.DeleteNode(car);
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

void Menus :: Student(){ //Modificar, Eliminar e Insertar en las tareas
    int opc;
    bool status = true;
    string DPI;
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
                insertNewStudent();
                break;
            case 2:
                cout << "Modificar Estudiante\n";
                cout  << "Ingrese el DPI del estudiante a modificar \n";
                getline(cin>>ws, DPI);
                estudiante.Modify(DPI);
                break;
            case 3:
                cout << "Eliminar Estudiante\n";
                cout  << "Ingrese el DPI del estudiante a Eliminar \n";
                getline(cin>>ws, DPI);
                estudiante.DeleteNode(DPI);
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

void Menus :: MenuManualEntry(){ //Ingreso Manual
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
                            cout << "Tu opcion es incorrecta :)\n";
                            break;
        }
    } while (status);
}

void Menus :: menu(){ // Principal
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
                UpdateHomework();
                break;
            case 3:
                MenuManualEntry();
                break;
            case 4:
                SubMenuRepo();
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
