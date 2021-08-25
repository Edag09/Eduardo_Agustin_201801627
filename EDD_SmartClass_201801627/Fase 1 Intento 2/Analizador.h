//
// Created by renea on 18/08/2021.
//

#ifndef FASE_1_INTENTO_2_ANALIZADOR_H
#define FASE_1_INTENTO_2_ANALIZADOR_H

#include "ListStudentCD.h"
#include "ListHomework.h"
#include <string>

using namespace std;

class Analyzer{
private:
    int status ;
    int cont ;
    int character;
    int contD;
    int sizeTarea;
    string end_text;
    string Student[8];
    string Homeworks[9];
    int counter;
public:
    void Students(string);
    void Homework(string);
    int Mes(string);
    int Dia(string);
    int Hora(string);
    string Date(char);
    void DataMatrix(int, int, int);
    void ColMajor();
    void Llenado();
};

// VARIABLES QUE SE VAN A USAR PARA PASAR LA INFORMACION
ListDoubleStudent estudiante;
ListDoubleHomework tarea;
DoubleNodeHomework* Matrix[5][30][9];
//------------------------------------------------------

void Analyzer :: Students(string cad) {
    status = 0;
    cont = 0;
    end_text = "";
    string Type = "Estudiante";
    string Desc;

    for (int i = 0; i < cad.size(); ++i) {
        character = cad[i];
        if (status == 0 && character == 10){
            status = 1;
        }else if (status == 1){
            if (character >= 48 && character <=57){ // Ingreso de Carnet
                cont ++;
                if (cont<=9){
                    end_text = end_text += cad[i];
                }else{
                    //Error
                    Desc = "Carnet no valido " + end_text + cad[i];
                    tarea.InsertError(Type, Desc);
                    status = 0;
                    end_text = "";
                    cont = 0;
                }
            }else if(character == 44 || character == 10){ //Coma
                cont = 0;
                Student[0] = end_text;
                status = 2;
                end_text = "";
            }
        }else if (status == 2){ //Digit DPI
            if (character >= 48 && character <=57){
                cont ++;
                if (cont <=13){
                    end_text = end_text += cad[i];
                }else{
                    //Error
                    Desc = "DPI invalido " + end_text + cad[i];
                    tarea.InsertError(Type, Desc);
                    status = 0;
                    end_text = "";
                    cont = 0;
                }
            }else if (character == 44){
                Student[1] = end_text;
                cont = 0;
                status = 3;
                end_text = "";
            }
        }else if (status == 3){
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32)){ // Nombre
                end_text = end_text += cad[i];
            }else if(character == 44){
                Student[2] = end_text;
                end_text = "";
                cont =0;
                status = 4;
            }else{
                Desc = "Nombre no aceptado " + end_text;
                tarea.InsertError(Type, Desc);
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if(status == 4){
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32)){ // Carrera
                end_text = end_text += cad[i];
            }else if(character == 44){
                Student[3] = end_text;
                end_text = "";
                cont =0;
                status = 5;
            }else{
                Desc = "Tu verdadera vocacion es ser Industrial compa :') " + end_text;
                tarea.InsertError(Type, Desc);
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if(status == 5){
            if((character>=97 && character<=122) || (character>=65 && character<=90) || (character >= 48 && character <=57) || (character == 45) || (character == 46) || (character == 95) || (character == 32)){  //Contrasenia
                end_text = end_text += cad[i];
            }else if(character == 44){
                Student[4] = end_text;
                end_text = "";
                cont = 0;
                status = 6;
            }else{
                Desc = "Contrasenia invalida " + end_text;
                tarea.InsertError(Type, Desc);
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 6){
            if (character >= 48 && character <=57){//Creditos
                end_text = end_text += cad[i];
            }else if (character == 44){
                Student[5] = end_text;
                end_text = "";
                cont = 0;
                status = 7;
            }else{
                Desc = "Te crees un cerebrito o khe? " + end_text;
                tarea.InsertError(Type, Desc);
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 7){ //Edad
            if (character >= 48 && character<=57){
                cont ++;
                if (cont <= 2){
                    end_text = end_text += cad[i];
                }else{
                    Desc = "Edad invalida " + end_text;
                    tarea.InsertError(Type, Desc);
                    end_text="";
                    cont = 0;
                    status = 0;
                }
            } else if(character == 44 && cont == 2){
                Student[6] = end_text;
                end_text = "";
                cont =0;
                status = 8;
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 8){ // Correo
            if((character>=97 && character<=122) || (character>=65 && character<=90) || (character >= 48 && character <=57) || (character == 45) || (character == 46) || (character == 95) || (character == 64)){
                end_text = end_text += cad[i];
            }else if(character == 10){
                Student[7] = end_text;
                end_text = "";
                cont =0;
                status = 1;
                estudiante.InsertList(Student[0], Student[1], Student[2], Student[3], Student[4], Student[5], Student[6], Student[7]);
            }else{
                Desc = "Correo invalido " +end_text;
                tarea.InsertError(Type, Desc);
                status = 0;
                end_text = "";
                cont=0;
            }
        }
    }

}

void Analyzer :: Homework(string cad) {
    status = 0;
    cont = 0;
    sizeTarea = 0;
    end_text = "";
    string Type = "Tareas";
    string Desc;

    for (int i = 0; i < cad.size(); i++) {
        character = cad[i];
        if (status == 0 && character == 10){
            status = 1;
        }else if (status == 1){
            if (character >= 48 && character <=57){ // Mes
                end_text = end_text + cad[i];
            }else if (character == 44){
                Homeworks[0] = end_text;
                status = 2;
                cont = 0;
                end_text = "";
            }else{
                status = 0;
                end_text = "";
                cont = 0;
            }
        }else if (status == 2){
            if (character >= 48 && character <=57){ //Dia
                end_text = end_text + cad[i];
            }else if (character == 44){
                Homeworks[1] = end_text;
                status = 3;
                cont = 0;
                end_text = "";
            }else{
                status = 0;
                end_text = "";
                cont = 0;
            }
        }else if (status == 3){
            if (character >= 48 && character <=57){ // Hora
                end_text = end_text + cad[i];
            }else if (character == 44){
                Homeworks[2] = end_text;
                status = 4;
                cont = 0;
                end_text = "";
            }else{
                status = 0;
                end_text = "";
                cont = 0;
            }
        }else if (status == 4){
            if (character >= 48 && character <=57){ //Carnet
                cont ++;
                if (cont<=9){
                    end_text = end_text += cad[i];
                }else{
                    Desc = "Carne Invalido " + end_text + cad[i];
                    tarea.InsertError(Type, Desc);
                    status = 0;
                    end_text = "";
                }
            }else if(character == 44){ //Coma
                Homeworks[3] = end_text;
                cont = 0;
                status = 5;
                end_text = "";
            }
        }else if (status == 5){ // Nombre
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32) || (character >= 48 && character <=57) || (character == 43) || (character == 35)){
                end_text = end_text + cad[i];
            }else if (character == 44){
                Homeworks[4] = end_text;
                status = 6;
                cont = 0;
                end_text = "";
            }else{
                Desc = "Nombre Incorrecto " + end_text + cad[i];
                tarea.InsertError(Type, Desc);
                status = 0;
                end_text = "";
                cont = 0;
            }
        }else if (status == 6){ //Descripcion
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32) || (character >= 48 && character <=57) || (character == 43) || (character == 46)){
                end_text = end_text + cad[i];
            }else if (character == 44){
                Homeworks[5] = end_text;
                status = 7;
                cont = 0;
                end_text = "";
            }else{
                Desc = "Ni describir podes tu tarea :) " + end_text;
                tarea.InsertError(Type, Desc);
                status = 0;
                end_text = "";
                cont = 0;
            }
        }else if (status == 7){ //Materia
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32) || (character >= 48 && character <=57) || (character == 46)){
                end_text = end_text + cad[i];
            }else if (character == 44){
                Homeworks[6] = end_text;
                status = 8;
                cont = 0;
                end_text = "";
            }else{
                Desc = "Compa en que momento saco esa clase " + end_text;
                tarea.InsertError(Type, Desc);
                status = 0;
                end_text = "";
                cont = 0;
            }
        }else if (status == 8){ //Fecha
            if ((character >= 48 && character <=57) || (character == 47)){
                end_text = Date(cad[i]);
            }else if (character == 44){
                Homeworks[7] = end_text;
                status = 9;
                cont = 0;
                end_text = "";
            }else{
                status = 0;
                end_text = "";
                cont = 0;
            }
        } else if (status == 9){ //Estado de la tarea
            if ((character>=97 && character<=122) || (character>=65 && character<=90)){
                end_text = end_text + cad[i];
            }else if (character == 10){
                Homeworks[8] = end_text;
                sizeTarea ++;
                status = 1;
                cont = 0;
                end_text = "";
            }else{
                Desc = "Ya ni te esforces en entregarla mejor " + end_text;
                tarea.InsertError(Type, Desc);
                status = 0;
                end_text = "";
                cont = 0;
            }
            DataMatrix(Mes(Homeworks[0]), Dia(Homeworks[1]), Hora(Homeworks[2]));
            Llenado();
        }
    }
    ColMajor();
}

int Analyzer :: Mes(string cad) {
    switch (atoi(cad.c_str())) {
        case 7:
            return 0;
            break;
        case 8:
            return 1;
            break;
        case 9:
            return 2;
            break;
        case 10:
            return 3;
            break;
        case 11:
            return 4;
            break;
        default:
            return -1;
    }
}

int Analyzer :: Dia(string cad) {
    switch (atoi(cad.c_str())) {
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 4:
            return 4;
            break;
        case 5:
            return 5;
            break;
        case 6:
            return 6;
            break;
        case 7:
            return 7;
            break;
        case 8:
            return 8;
            break;
        case 9:
            return 9;
            break;
        case 10:
            return 10;
            break;
        case 11:
            return 11;
            break;
        case 12:
            return 12;
            break;
        case 13:
            return 13;
            break;
        case 14:
            return 14;
            break;
        case 15:
            return 15;
            break;
        case 16:
            return 16;
            break;
        case 17:
            return 17;
            break;
        case 18:
            return 18;
            break;
        case 19:
            return 19;
            break;
        case 20:
            return 20;
            break;
        case 21:
            return 21;
            break;
        case 22:
            return 22;
            break;
        case 23:
            return 23;
            break;
        case 24:
            return 24;
            break;
        case 25:
            return 25;
            break;
        case 26:
            return 26;
            break;
        case 27:
            return 27;
            break;
        case 28:
            return 28;
            break;
        case 29:
            return 29;
            break;
        case 30:
            return 30;
            break;
        default:
            return -1;
    }
}

int Analyzer :: Hora(string cad) {
    switch (atoi(cad.c_str())) {
        case 8:
            return 0;
            break;
        case 9:
            return 1;
            break;
        case 10:
            return 2;
            break;
        case 11:
            return 3;
            break;
        case 12:
            return 4;
            break;
        case 13:
            return 5;
            break;
        case 14:
            return 6;
            break;
        case 15:
            return 7;
            break;
        case 16:
            return 8;
            break;
        default:
            return -1;
    }
}

string Analyzer :: Date(char cad) {
    string Type = "Tareas";
    string Desc;
        if (cont == 4 && cad == 47){
            end_text =  end_text + cad;
            cont = 0;
        }else if(cont == 2 && cad == 47 && contD == 0){
            end_text = end_text + cad;
            cont = 0;
            contD ++;
        }else if (cont == 2 && cad == 47 && contD == 1){
            end_text = end_text + cad;
            cont = 0;
        }else if((cad >= 48 && cad <=57) || (cad == 47)){
            end_text = end_text + cad;
            cont ++;
        }else{
            Desc = "Compa sea tantito Coherente porfa " + end_text;
            tarea.InsertError(Type, Desc);
            return "-1";
        }
    return end_text;
}

void Analyzer :: DataMatrix(int m, int d, int h){
    DoubleNodeHomework* data = new DoubleNodeHomework();
    data->setId(counter++);
    data->setCarne(Homeworks[3]);
    data->setNombre(Homeworks[4]);
    data->setDescripcion(Homeworks[5]);
    data->setMateria(Homeworks[6]);
    data->setFecha(Homeworks[7]);
    data->setEstado(Homeworks[8]);
    if ((m == -1) || (d == -1) || (h == -1)){
        cout << "Error";
    }else{
        Matrix[m][d-1][h] = data;
    }
}

void Analyzer :: Llenado() {
    DoubleNodeHomework* aux = new DoubleNodeHomework();
    aux->setCarne(to_string(-1));
    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < 30; ++j) {
            for (int k = 0; k < 9; ++k) {
                if (Matrix[i][j][k] == NULL){
                    Matrix[i][j][k] = aux;
                }
            }
        }
    }
}

void Analyzer :: ColMajor() {
    int IDT;
    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < 30; ++j) {
            for (int k = 0; k < 9; ++k) {
                IDT = j+30*(k+9*i);
                tarea.InsertList(IDT, Matrix[i][j][k]->getCarne(), Matrix[i][j][k]->getNombre(), Matrix[i][j][k]->getDescripcion(), Matrix[i][j][k]->getMateria(), Matrix[i][j][k]->getFecha(), Matrix[i][j][k]->getEstado());
            }
        }
    }
}


#endif //FASE_1_INTENTO_2_ANALIZADOR_H
