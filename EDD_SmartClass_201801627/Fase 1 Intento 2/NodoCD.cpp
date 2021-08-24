//
// Created by renea on 18/08/2021.
//

#include "NodoCD.h"

#include <iostream>
#include "ListHomework.h"
#include <string>

using namespace std;

DoubleNodeStudents :: DoubleNodeStudents() {
    this->sig = NULL;
    this->ant  = NULL;
    ListDoubleHomework *tarea = Ltareas;

}

// Getters

string  DoubleNodeStudents :: getCarnet() {
    return  this->carnet;
}

string  DoubleNodeStudents :: getDPI() {
    return  this->DPI;
}

string  DoubleNodeStudents :: getNombre() {
    return  this->nombre;
}

string  DoubleNodeStudents ::getCarrera() {
    return  this->carrera;
}

string DoubleNodeStudents :: getContrasenia() {
    return this->contrasenia;
}

string DoubleNodeStudents :: getCreditos() {
    return this->creditos;
}

string DoubleNodeStudents :: getEdad() {
    return this->edad;
}

string  DoubleNodeStudents ::getCorreo() {
    return  this->correo;
}

DoubleNodeStudents *DoubleNodeStudents :: getSig() {
    return this->sig;
}

DoubleNodeStudents *DoubleNodeStudents :: getAnt() {
    return this->ant;
}

//Setter

void DoubleNodeStudents ::setCarnet(string Carnet) {
    this->carnet = Carnet;
}

void DoubleNodeStudents ::setDPI(string DIP) {
    this->DPI = DIP;
}

void DoubleNodeStudents ::setNombre(string Nombre) {
    this->nombre = Nombre;
}

void DoubleNodeStudents ::setCarrera(string Carrera) {
    this->carrera = Carrera;
}

void DoubleNodeStudents ::setContrasenia(string Contrasenia) {
    this->contrasenia = Contrasenia;
}

void DoubleNodeStudents ::setCreditos(string Creditos) {
    this->creditos = Creditos;
}

void DoubleNodeStudents ::setEdad(string Edad) {
    this->edad = Edad;
}

void DoubleNodeStudents ::setCorreo(string Correo) {
    this->correo = Correo;
}

void DoubleNodeStudents ::setSig(DoubleNodeStudents *Sig) {
    this->sig = Sig;
}

void DoubleNodeStudents ::setAnt(DoubleNodeStudents *Ant) {
    this->ant = Ant;
}