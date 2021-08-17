//
// Created by renea on 16/08/2021.
//

#ifndef FASE_1_LISTHOMEWORK_H
#define FASE_1_LISTHOMEWORK_H

#include <iostream>
#include <string>
#include "NodoDE.h"

using namespace std;

class ListDoubleHomework{
private:
    DoubleNodeHomework *first;
    DoubleNodeHomework *end;

public:
    ListDoubleHomework();

    void InsertList(string& mes, string& dia, string& hora, string& carne, string& nombre, string& descripcion, string& materia, string& fecha, string& estado);
    void Modify();
    void Show();
    void DeleteNode();
    void Search(string& carne);
};


#endif //FASE_1_LISTHOMEWORK_H
