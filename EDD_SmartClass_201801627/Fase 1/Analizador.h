//
// Created by renea on 05/08/2021.
//

#ifndef FASE_1_ANALIZADOR_H
#define FASE_1_ANALIZADOR_H

#include <string>

using namespace std;

class Analyzer{
private:
    int status ;
    int cont ;
    int character;
    string end_text;
public:
    void Students(string);
    void Homework(string);

};

void  Analyzer :: Students(string cad) {
    status = 0;
    cont = 0;
    end_text = "";

    for (int i = 0; i < cad.size(); ++i) {
        character = cad[i];
        if (status == 0 && character == 10){
            status = 1;
        }else if (status == 1){
            if (character >= 48 && character <=57){ //Digit
                cont ++;
                if (cont<=9){
                    end_text = end_text += cad[i];
                }else{
                    status = 0;
                    end_text = "";
                }
            }else if(character == 44){ //Coma
                cont = 0;
                cout << end_text << '\n';
                status = 2;
                end_text = "";
            }
        }else if (status == 2){ //Digit
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
                cout << end_text << '\n';
                cont = 0;
                status = 3;
                end_text = "";
            }else{
                end_text = "";
                cont = 0;
                status = 0;
            }
        }else if (status == 3){
            if ((character>=97 && character<=122) || (character>=65 && character<=90) || (character==32)){ //text
                end_text = end_text += cad[i];
            }else if(character == 44){
                cout << end_text << '\n';
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
                cout << end_text << '\n';
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
                cout << end_text << '\n';
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
                cout << end_text << '\n';
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
                cout << end_text << '\n';
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
                cout << end_text << '\n';
                end_text = "";
                cont =0;
                status = 1;
            }else{
                status = 0;
                end_text = "";
                cont=0;
            }
        }
    }
}

void Analyzer :: Homework(string cad) {
    cout << cad << '\n';
}

#endif //FASE_1_ANALIZADOR_H
