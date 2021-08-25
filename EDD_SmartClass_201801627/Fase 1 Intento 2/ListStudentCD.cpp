//
// Created by renea on 18/08/2021.
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

void ListDoubleStudent :: InsertList(string carnet, string DPI, string nombre, string carrera, string contrasenia, string creditos, string edad, string correo) {
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
    string pointer = "";
    int counter = 1;
    string graph = "digraph List {\nrankdir=LR;\nnode [shape = circle, color=black , style=filled, fillcolor=gray93];\n";
    do{
        data += "Node" + to_string(counter) + "[label=\"" + "Nombre: " + aux->getNombre() + "\nCarne: " + aux->getCarnet() + "\nDPI: " + aux->getDPI() + "\nCarrera: " + aux->getCarrera() + "\nCreditos: " + aux->getCreditos() + "\nEdad: " + aux->getEdad() + "\nCorreo: " + aux->getCorreo() + "\nCalificaicon" +"\"];\n";
        if (aux != first){
            pointer += "Node" + to_string(counter-1) + "->Node" + to_string(counter) + ";\n";
            pointer += "Node" + to_string(counter) + "->Node" + to_string(counter-1) + ";\n";
        }
        counter ++;
        aux = aux->getSig();
    }while(aux != first);
    pointer += "Node" + to_string(counter-1) + "->Node1" + ";\n";
    pointer += "Node1->Node" + to_string(counter-1) + ";\n";

    graph += data;
    graph += pointer;
    graph += "\n}";

    try {
        string path = "Student";

        ofstream file;
        file.open(path + "Graph.dot",std::ios::out);

        if(file.fail()){
            exit(1);
        }

        file<<graph;
        file.close();
        string command = "dot -Tpdf " + path + "Graph.dot -o  " + path + "Graph.pdf";
        system(command.c_str());
    }catch (exception e){
        cout << "Nel no se pudo :)";
    }
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
                cout <<"DPI: " << aux->getDPI() <<"Nombre: " << aux->getNombre() << " Carne: " << aux->getCarnet() << " Carrera: " << aux->getCarrera() << '\n';

                //Carne
                cout << "Carne: \n";
                getline(cin>>ws, carne);
                aux->setCarnet(carne);
                //Nombre
                cout << "Nombre: \n";
                getline(cin>>ws, nombre);
                aux->setNombre(nombre);
                //Carrera
                cout << "Carrera: \n";
                getline(cin>>ws, carrera);
                aux->setCarrera(carrera);
                //Contrasenia
                cout << "Contrasenia \n";
                getline(cin>>ws, contra);
                aux->setContrasenia(contra);
                //Creditos
                cout << "Creditos: \n";
                getline(cin>>ws, creditos);
                aux->setCreditos(creditos);
                //Edad
                cout << "Edad: \n";
                getline(cin>>ws, edad);
                aux->setEdad(edad);
                //Correo
                cout << "Correro: \n";
                getline(cin>>ws, correo);
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

void ListDoubleStudent :: Search(string cad) {

}

void ListDoubleStudent :: StudentHomework(int id, string carne, DoubleNodeHomework *data) {
    DoubleNodeStudents* aux = new DoubleNodeStudents();
    aux = first;
    find = false;
    if (first != NULL){
        do {
            if (aux->getCarnet() == carne){
                aux->Ltareas->InsertList(id, carne, data->getNombre(), data->getDescripcion(), data->getMateria(), data->getFecha(), data->getEstado());
            }
            aux = aux->getSig();
        }while(aux != first && !find);
        if (!find){
            cout<<"No tiene asignada alguna tareas\n";
        }
    } else{
        cout << "Lista vacia";
    }
}

void ListDoubleStudent :: ShowStudentH() {
    DoubleNodeStudents* aux = new DoubleNodeStudents();
    aux = first;
    if (first != NULL){
        do {
            cout << "El estudiante " << aux->getNombre() << "con carne "<< aux->getCarnet() << " y edad "<< aux->getEdad() << " y DPI " << aux->getDPI() << " esta en la carrera de " << aux->getCarrera() << " con la cantidad de creditos de " << aux->getCreditos() << "\n";
            cout << "Tiene como tarea/s: -> \n";
            aux->Ltareas->Show();
            aux = aux->getSig();
        } while (aux != first);
    }else{
        cout << "Lista vacia";
    }
}