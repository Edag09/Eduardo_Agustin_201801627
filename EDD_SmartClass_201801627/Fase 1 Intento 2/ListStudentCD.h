//
// Created by renea on 18/08/2021.
//

#ifndef FASE_1_INTENTO_2_LISTSTUDENTCD_H
#define FASE_1_INTENTO_2_LISTSTUDENTCD_H

#include <iostream>
#include <string>
#include "NodoCD.h"
#include "ListHomework.h"

class ListDoubleStudent{
private:
    DoubleNodeStudents *first;
    DoubleNodeStudents *end;
public:
    bool find;

public:
    ListDoubleStudent();

    void InsertList(string carnet, string DPI, string nombre, string carrera, string contrasenia, string creditos, string edad, string correo);
    void Modify(string&);
    void Show();
    void ShowGraphvizDC();
    void DeleteNode(string&);
    void Search(string);
    void StudentHomework(int id, string carne, DoubleNodeHomework* data);
    void ShowStudentH();
};

#endif //FASE_1_INTENTO_2_LISTSTUDENTCD_H
