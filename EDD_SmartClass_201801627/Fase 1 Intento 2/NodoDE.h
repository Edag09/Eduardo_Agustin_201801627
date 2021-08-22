//
// Created by renea on 18/08/2021.
//

#ifndef FASE_1_INTENTO_2_NODODE_H
#define FASE_1_INTENTO_2_NODODE_H


#include <iostream>
#include <string>

using  namespace std;

class DoubleNodeHomework{
private:
    // Tareas
    string dia;
    string hora;
    string mes;
    string carne;
    string nombre;
    string descripcion;
    string materia;
    string fecha;
    string estado;
    int IdHomework;
    // Errores
    int IdError;
    string error;
    string errorDesc;
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
    int getId();
    int getIdError();
    string getError();
    string getErrorDesc();
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
    void setId(int Id);
    void setIdError(int IdError);
    void setError(string Error);
    void setErrorDesc(string ErrorDesc);
    void setSig(DoubleNodeHomework *Sig);
    void setAnt(DoubleNodeHomework *Ant);

};

#endif //FASE_1_INTENTO_2_NODODE_H
