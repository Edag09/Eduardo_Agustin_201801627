//
// Created by renea on 18/08/2021.
//

#ifndef FASE_1_INTENTO_2_NODOCD_H
#define FASE_1_INTENTO_2_NODOCD_H

#include <iostream>
#include <string>
#include "ListHomework.h"

using namespace std;

class DoubleNodeStudents{
private:
    string carnet;
    string DPI;
    string nombre;
    string carrera;
    string correo;
    string contrasenia;
    string creditos;
    string edad;
    DoubleNodeStudents* sig;
    DoubleNodeStudents* ant;
public:
    ListDoubleHomework *Ltareas = new ListDoubleHomework();
public:
    DoubleNodeStudents();
    //gets
    string getCarnet();
    string getDPI();
    string getNombre();
    string getCarrera();
    string getCorreo();
    string getContrasenia();
    string getCreditos();
    string getEdad();
    DoubleNodeStudents *getSig();
    DoubleNodeStudents *getAnt();

    //sets
    void setCarnet(string Carnet);
    void setDPI(string DIP);
    void setNombre(string Nombre);
    void setCarrera(string Carrera);
    void setCorreo(string Correo);
    void setContrasenia(string Contrasenia);
    void setCreditos(string Creditos);
    void setEdad(string Edad);
    void setSig(DoubleNodeStudents *Sig);
    void setAnt(DoubleNodeStudents *Ant);

};
#endif //FASE_1_INTENTO_2_NODOCD_H
