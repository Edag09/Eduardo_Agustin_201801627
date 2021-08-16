//
// Created by renea on 14/08/2021.
//

#include "ListStudentCD.h"


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
        cout << "Pendejo :)";
    }
}

