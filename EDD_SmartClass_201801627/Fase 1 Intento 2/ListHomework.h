//
// Created by renea on 18/08/2021.
//

#ifndef FASE_1_INTENTO_2_LISTHOMEWORK_H
#define FASE_1_INTENTO_2_LISTHOMEWORK_H

#include <iostream>
#include <string>
#include "NodoDE.h"

using namespace std;

class ListDoubleHomework{
private:
    DoubleNodeHomework *first;
    DoubleNodeHomework *end;
public:
    bool find;

public:
    ListDoubleHomework();

    void InsertList(int id, string carne, string nombre, string descripcion, string materia, string fecha, string estado);
    void Modify(int);
    void Show();
    void DeleteNode(int);
    void Insert(int mes, int dia, int hora, string carne, string nombre, string descripcion, string materia, string fecha, string estado);
    int Mes(int);
    int Dia(int);
    int Hora(int);
    void SearchNode(int mes, int dia, int hora);
    void InsertError(string Tipo, string DescripcionError);
    bool IsEmpty();
    void ShowError();
    void ShowErrorGraphviz();
    void ShowHomeworks();
};

#endif //FASE_1_INTENTO_2_LISTHOMEWORK_H
