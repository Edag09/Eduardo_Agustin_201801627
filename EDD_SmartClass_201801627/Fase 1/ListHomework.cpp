//
// Created by renea on 16/08/2021.
//

#include "ListHomework.h"

ListDoubleHomework ::ListDoubleHomework() {
    this->first = NULL;
    this->end = NULL;
}

void ListDoubleHomework ::InsertList(string &mes, string &dia, string &hora, string &carne, string &nombre, string &descripcion, string &materia, string &fecha, string &estado) {
    DoubleNodeHomework* Tarea = new DoubleNodeHomework;
    Tarea->setMes(mes);
    Tarea->setDia(dia);
    Tarea->setHora(hora);
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