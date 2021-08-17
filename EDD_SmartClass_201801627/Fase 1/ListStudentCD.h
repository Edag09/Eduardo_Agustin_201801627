//
// Created by renea on 14/08/2021.
//

#ifndef FASE_1_LISTSTUDENTCD_H
#define FASE_1_LISTSTUDENTCD_H
#include <iostream>
#include <string>
#include "NodoCD.h"

using namespace std;

class ListDoubleStudent{
private:
    DoubleNodeStudents *first;
    DoubleNodeStudents *end;

public:
    ListDoubleStudent();

    void InsertList(string& carnet, string& DPI, string& nombre, string& carrera, string& contrasenia, string& creditos, string& edad, string& correo);
    void Modify(string& DPI);
    void Show();
    void ShowGraphzis();
    void DeleteNode(string&);
    void Search(string& carnet);
};



#endif //FASE_1_LISTSTUDENTCD_H
