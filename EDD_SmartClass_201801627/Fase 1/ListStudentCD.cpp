//
// Created by renea on 14/08/2021.
//
#include "ListStudentCD.h"
#include <iostream>
#include <fstream>
#include <string.h>

using namespace std;

ListDoubleStudent :: ListDoubleStudent() {
    this->first = NULL;
    this->end = NULL;
}

void ListDoubleStudent :: InsertList(string& carnet, string& DPI, string& nombre, string& carrera, string& contrasenia, string& creditos, string& edad, string& correo) {
    DoubleNodeStudents* nuevoStudent = new DoubleNodeStudents();
    nuevoStudent->setCarnet(carnet);
    nuevoStudent->setDPI(DPI);
    nuevoStudent->setNombre(nombre);
    nuevoStudent->setCarrera(carrera);
    nuevoStudent->setContrasenia(contrasenia);
    nuevoStudent->setCreditos(creditos);
    nuevoStudent->setEdad(edad);
    nuevoStudent->setCorreo(correo);

    if (first == NULL){
        first = nuevoStudent;
        end = nuevoStudent;
        first->setSig(first);
        first->setAnt(end);
    }else{
        end->setSig(nuevoStudent);
        nuevoStudent->setAnt(end);
        nuevoStudent->setSig(first);
        end = nuevoStudent;
        first->setAnt(end);
    }
    cout << "Insertado\n";
}

void ListDoubleStudent ::Show() {
    DoubleNodeStudents* aux = new DoubleNodeStudents();
    aux = first;
    if (first != NULL){
        do {
            cout <<"Carne: " << aux->getCarnet() << "\n";
            cout <<"DPI: " << aux->getDPI() << "\n";
            cout <<"Nombre: " << aux->getNombre() << "\n";
            cout <<"Carrera: " << aux->getCarrera() << "\n";
            cout <<"Contrasenia: " << aux->getContrasenia() << "\n";
            cout <<"Creditos: " << aux->getCreditos() << "\n";
            cout <<"Edad: " << aux->getEdad() << "\n";
            cout <<"Correo: " << aux->getCorreo() << "\n";
            aux = aux->getSig();
        }while(aux != first);
    }else{
        cout << "Error 404";
    }
}

void ListDoubleStudent ::ShowGraphvizDC() {
    DoubleNodeStudents* aux = new DoubleNodeStudents();
    aux = first;
    string data = "";
    int counter = 0;
    string graph = "digraph List {\nrankdir=LR;\nnode [shape = circle, color=black , style=filled, fillcolor=gray93];\n";
    while (aux->getSig() != first){
        cout << aux->getNombre() << " " << aux->getCarnet()<< '\n';
        data += "Node" + to_string(counter) + "[label=\"" + aux->getNombre() +"\"];\n";
        if (aux->getAnt() != first){

        }
        counter ++;
        aux = aux->getSig();
    }
    graph = graph+data;
    graph = graph + "\n}";

}


void ListDoubleStudent :: Modify(string& DPI) {
    DoubleNodeStudents* aux = new DoubleNodeStudents();
    aux = first;
    find = false;
    string carne, nombre, carrera, contra, creditos, edad, correo;

    if (first != NULL){
        do {
            if (aux->getDPI() == DPI){
                cout << "Modificara los datos del estudiante con los siguientes datos: \n";
                cout << "Nombre: " << aux->getNombre() << " Carne: " << aux->getCarnet() << " Carrera: " << aux->getCarrera() << '\n';

                //Carne
                cout << "Carne: \n";
                cin >> carne;
                aux->setCarnet(carne);
                //Nombre
                cout << "Nombre: \n";
                cin >> nombre;
                aux->setNombre(nombre);
                //Carrera
                cout << "Carrera: \n";
                cin >> carrera;
                aux->setCarrera(carrera);
                //Contrasenia
                cout << "Contrasenia \n";
                cin >> contra;
                aux->setContrasenia(contra);
                //Creditos
                cout << "Creditos: \n";
                cin >> creditos;
                aux->setCreditos(creditos);
                //Edad
                cout << "Edad: \n";
                cin >> edad;
                aux->setEdad(edad);
                //Correo
                cout << "Correro: \n";
                cin >> correo;
                aux->setCorreo(correo);

                cout << "Los datos del estudiante " << aux->getNombre() << " con carne " << aux->getCarnet() << " han sido modificados\n";
                find = true;
            }
            aux = aux->getSig();
        } while (aux != first && !find);
        if (!find){
            cout << "Datos no encontrados";
        }
    }else{
        cout << "No se ha encontrado datos ingresados";
    }
}

void ListDoubleStudent :: DeleteNode(string& DPI) {
    DoubleNodeStudents* aux = new DoubleNodeStudents();
    DoubleNodeStudents* aux2 = new DoubleNodeStudents();
    aux = first;
    aux2 = NULL;
    find = false;

    if (first != NULL){
        do {
            if (aux->getDPI() == DPI){
                cout << "El estudiante con DPI " << aux->getDPI() << " sera eliminado\n";
                if (aux == first){
                    first = first->getSig();
                    first->setAnt(end);
                    end->setSig(first);
                }else if(aux == end){
                    end = aux2;
                    end->setSig(first);
                    first->setAnt(end);
                }else{
                    aux2->setSig(aux->getSig());
                    aux->getSig()->setAnt(aux2);
                }
                cout << "Eliminado\n";
                find = true;
            }
            aux2 = aux;
            aux = aux->getSig();
        }while (aux != first && !find);
        if (!find){
            cout << "Aulumno no encontrado\n";
        }
    }else{
        cout << "Datos aun no registrados";
    }

}
