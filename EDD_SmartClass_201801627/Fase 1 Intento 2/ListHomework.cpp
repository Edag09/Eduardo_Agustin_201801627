//
// Created by renea on 18/08/2021.
//

#include "ListHomework.h"

ListDoubleHomework ::ListDoubleHomework() {
    this->first = NULL;
    this->end = NULL;
}

void ListDoubleHomework :: InsertList(int id, string carne, string nombre, string descripcion, string materia, string fecha, string estado) {
    DoubleNodeHomework* Tarea = new DoubleNodeHomework;
    Tarea->setId(id);
    Tarea->setCarne(carne);
    Tarea->setNombre(nombre);
    Tarea->setDescripcion(descripcion);
    Tarea->setMateria(materia);
    Tarea->setFecha(fecha);
    Tarea->setEstado(estado);

    if (first == NULL){
        first = Tarea;
        first->setSig(NULL);
        first->setAnt(NULL);
        end = first;
    }else{
        end->setSig(Tarea);
        Tarea->setSig(NULL);
        Tarea->setAnt(end);
        end = Tarea;
    }
}

void ListDoubleHomework :: Show() {
    DoubleNodeHomework* aux = new DoubleNodeHomework();
    aux = first;
    if (first != NULL){
        do {
            cout << aux->getId() << '\n';
            cout << aux->getCarne() << '\n';
            cout << aux->getNombre() << '\n';
            cout << aux->getFecha() << '\n';
            cout << aux->getEstado() << '\n';
            aux = aux->getSig();
        } while (aux != NULL);
    }else{
        cout << "Error";
    }
}