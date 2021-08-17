//
// Created by renea on 16/08/2021.
//

#ifndef FASE_1_NODODE_H
#define FASE_1_NODODE_H
#include <iostream>
#include <string>

using  namespace std;

class DoubleNodeHomework{
private:
    string dia;
    string hora;
    string mes;
    string carne;
    string nombre;
    string descripcion;
    string materia;
    string fecha;
    string estado;
    DoubleNodeHomework* sig;
    DoubleNodeHomework* ant;

public:
    DoubleNodeHomework();

    //gets
    string getDia();
    string getHora();
    string getMes();
    string getCarne();
    string getNombre();
    string getDescripcion();
    string getMateria();
    string getFecha();
    string getEstado();
    DoubleNodeHomework *getSig();
    DoubleNodeHomework *getAnt();

    //sets

    void setDia(string Dia);
    void setHora(string Hora);
    void setMes(string Mes);
    void setCarne(string Carne);
    void setNombre(string Nombre);
    void setDescripcion(string Descripcion);
    void setMateria(string Materia);
    void setFecha(string Fecha);
    void setEstado(string Estado);
    void setSig(DoubleNodeHomework *Sig);
    void setAnt(DoubleNodeHomework *Ant);

};


#endif //FASE_1_NODODE_H
