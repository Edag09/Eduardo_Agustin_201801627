//
// Created by renea on 05/08/2021.
//

#ifndef FASE_1_ANALIZADOR_H
#define FASE_1_ANALIZADOR_H

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
public:
    void Students(string);
    void Homework(string);
    int Mes(string);
    int Dia(string);
    int Hora(string);
    string Date(char);
};

ListDoubleStudent estudiante;
ListDoubleHomework tarea;


void  Analyzer :: Students(string cad) {
    status = 0;
    cont = 0;
    end_text = "";

    for (int i = 0; i < cad.size(); ++i) {
        character = cad[i];
        if (status == 0 && character == 10){
            status = 1;
        }else if (status == 1){
            if (character >= 48 && character <=57){ //Digit ID
                cont ++;
                if (cont<=9){
                    end_text = end_text += cad[i];
                }else{
                    status = 0;
                    end_text = "";
                }
            }else if(character == 44){ //Coma
                cont = 0;
                Student[0] = end_text;
                //cout << end_text << '\n';
                status = 2;
                end_text = "";

            }
        }else if (status == 2){ //Digit DPI
            if (character >= 48 && character <=57){
                cont ++;
                if (cont <=13){
                    end_text = end_text += cad[i];
                }else{
                    status = 0;
                    end_text = "";
                    cont = 0;
                }
            }else if (character == 44){
                Student[1] = end_text;
                //cout << end_text << '\n';
                cont = 0;
                status = 3;
                end_text = "";
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 3){
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32)){ //text name
                end_text = end_text += cad[i];
            }else if(character == 44){
                Student[2] = end_text;
                //cout << end_text << '\n';
                end_text = "";
                cont =0;
                status = 4;
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if(status == 4){
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32)){ //text
                end_text = end_text += cad[i];
            }else if(character == 44){
                Student[3] = end_text;
                //cout << end_text << '\n';
                end_text = "";
                cont =0;
                status = 5;
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if(status == 5){
            if((character>=97 && character<=122) || (character>=65 && character<=90) || (character >= 48 && character <=57) || (character == 45) || (character == 46) || (character == 95) || (character == 32)){
                end_text = end_text += cad[i];
            }else if(character == 44){
                Student[4] = end_text;
                //cout << end_text << '\n';
                end_text = "";
                cont = 0;
                status = 6;
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 6){
            if (character >= 48 && character <=57){//digit
                end_text = end_text += cad[i];
            }else if (character == 44){
                Student[5] = end_text;
                //cout << end_text << '\n';
                end_text = "";
                cont = 0;
                status = 7;
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 7){
            if (character >= 48 && character<=57){
                cont ++;
                if (cont <= 2){
                    end_text = end_text += cad[i];
                }else{
                    end_text="";
                    cont = 0;
                    status = 0;
                }
            } else if(character == 44){
                Student[6] = end_text;
                //cout << end_text << '\n';
                end_text = "";
                cont =0;
                status = 8;
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 8){
            if((character>=97 && character<=122) || (character>=65 && character<=90) || (character >= 48 && character <=57) || (character == 45) || (character == 46) || (character == 95) || (character == 64)){
                end_text = end_text += cad[i];
            }else if(character == 10){
                Student[7] = end_text;
                //cout << end_text << '\n';
                end_text = "";
                cont =0;
                status = 1;
                cout << Student[0] << '\n';
                cout << Student[1] << '\n';
                cout << Student[2] << '\n';
                cout << Student[3] << '\n';
                cout << Student[4] << '\n';
                cout << Student[5] << '\n';
                cout << Student[6] << '\n';
                cout << Student[7] << '\n';
                estudiante.InsertList(Student[0], Student[1], Student[2], Student[3], Student[4], Student[5], Student[6], Student[7]);
            }else{
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
                status = 0;
                end_text = "";
                cont = 0;
            }
        }else if (status == 8){ //Fecha
            if ((character >= 48 && character <=57) || (character == 47)){
                end_text = Date(cad[i]);
                //end_text = end_text + cad[i];
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
                cout << "ID: "<< sizeTarea << '\n';
                cout << "Mes: " << Homeworks[0] << '\n';
                cout << "Dia: "<< Homeworks[1] << '\n';
                cout << "Hora: "<< Homeworks[2] << '\n';
                cout << "Carne: "<< Homeworks[3] << '\n';
                cout << "Nombre: "<< Homeworks[4] << '\n';
                cout << "Descripcion: " << Homeworks[5] << '\n';
                cout << "Materia: " << Homeworks[6] << '\n';
                cout << "Fecha: "<< Homeworks[7] << '\n';
                cout << "Estado: "<< Homeworks[8] << '\n';
                //tarea.InsertList(Homeworks[0], Homeworks[1], Homeworks[2], Homeworks[3], Homeworks[4], Homeworks[5], Homeworks[6], Homeworks[7], Homeworks[8]);
                //Mes(Homeworks[0]);
                //Dia(Homeworks[1]);
                //Hora(Homeworks[2]);
            }else{
                status = 0;
                end_text = "";
                cont = 0;
            }
        }
    }

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
            cout << "Bueno, sos pendejo verdad ingresaste algo mal :)";
            return -1;
            break;
    }
}

int Analyzer :: Dia(string cad) {
    cout << cad << '\n';
    switch (atoi(cad.c_str())) {
        case 1:
            return 0;
            break;
        case 2:
            return 1;
            break;
        case 3:
            return 2;
            break;
        case 4:
            return 3;
            break;
        case 5:
            return 4;
            break;
        case 6:
            return 5;
            break;
        case 7:
            return 6;
            break;
        case 8:
            return 7;
            break;
        case 9:
            return 8;
            break;
        case 10:
            return 9;
            break;
        case 11:
            return 10;
            break;
        case 12:
            return 11;
            break;
        case 13:
            return 12;
            break;
        case 14:
            return 13;
            break;
        case 15:
            return 14;
            break;
        case 16:
            return 15;
            break;
        case 17:
            return 16;
            break;
        case 18:
            return 17;
            break;
        case 19:
            return 18;
            break;
        case 20:
            return 19;
            break;
        case 21:
            return 20;
            break;
        case 22:
            return 21;
            break;
        case 23:
            return 22;
            break;
        case 24:
            return 23;
            break;
        case 25:
            return 24;
            break;
        case 26:
            return 25;
            break;
        case 27:
            return 26;
            break;
        case 28:
            return 27;
            break;
        case 29:
            return 28;
            break;
        case 30:
            return 29;
            break;
        default:
            cout << "Bueno, sos pendejo verdad ingresaste algo mal :)";
            return -1;
            break;
    }
}

int Analyzer :: Hora(string cad) {
    cout << cad << '\n';
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
            cout << "Bueno, sos pendejo verdad ingresaste algo mal :)";
            return -1;
            break;
    }
}

string Analyzer :: Date(char cad) {
    if ((cad >= 48 && cad <=57) || (cad == 47)){
        end_text = end_text + cad;
        cont ++;
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
        }else{
            return "Sa mierda esta mala";
        }
    }
    return end_text;
}

#endif //FASE_1_ANALIZADOR_H
