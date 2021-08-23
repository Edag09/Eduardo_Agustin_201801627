//
// Created by renea on 18/08/2021.
//

#include "NodoDE.h"
#include <iostream>
#include <string>

using namespace std;

DoubleNodeHomework :: DoubleNodeHomework() {
    this->sig = NULL;
    this->ant = NULL;
    this->IdHomework = 0;
    this->IdError = 0;
}

// Getters

string DoubleNodeHomework ::getDia() {
    return this->dia;
}

string DoubleNodeHomework ::getHora() {
    return this->hora;
}

string DoubleNodeHomework :: getMes(){
    return this->mes;
}

string DoubleNodeHomework :: getCarne(){
    return this->carne;
}

string DoubleNodeHomework :: getNombre(){
    return this->nombre;
}

string DoubleNodeHomework :: getDescripcion(){
    return this->descripcion;
}

string DoubleNodeHomework :: getMateria(){
    return this->materia;
}

string DoubleNodeHomework :: getFecha(){
    return this->fecha;
}

string DoubleNodeHomework :: getEstado(){
    return this->estado;
}

int DoubleNodeHomework ::getId() {
    return this->IdHomework;
}

int DoubleNodeHomework ::getIdError() {
    return this->IdError;
}

string  DoubleNodeHomework ::getError() {
    return this->error;
}

string  DoubleNodeHomework ::getErrorDesc() {
    return this->errorDesc;
}

DoubleNodeHomework *DoubleNodeHomework :: getSig(){
    return this->sig;
}

DoubleNodeHomework *DoubleNodeHomework :: getAnt(){
    return this->ant;
}

//Setters

void DoubleNodeHomework :: setDia(string Dia) {
    this->dia = Dia;
}

void DoubleNodeHomework :: setHora(string Hora){
    this->hora = Hora;
}

void DoubleNodeHomework :: setMes(string Mes){
    this->mes = Mes;
}

void DoubleNodeHomework :: setCarne(string Carne){
    this->carne = Carne;
}

void DoubleNodeHomework :: setNombre(string Nombre){
    this->nombre = Nombre;
}

void DoubleNodeHomework :: setDescripcion(string Descripcion){
    this->descripcion = Descripcion;
}

void DoubleNodeHomework :: setMateria(string Materia){
    this->materia = Materia;
}

void DoubleNodeHomework :: setFecha(string Fecha){
    this->fecha = Fecha;
}

void DoubleNodeHomework :: setEstado(string Estado){
    this->estado = Estado;
}

void DoubleNodeHomework ::setId(int Id) {
    this->IdHomework = Id;
}

void DoubleNodeHomework ::setIdError(int IdError) {
    this->IdError = IdError;
}

void DoubleNodeHomework ::setError(string Error) {
    this->error = Error;
}

void DoubleNodeHomework ::setErrorDesc(string ErrorDesc) {
    this->errorDesc = ErrorDesc;
}

void DoubleNodeHomework :: setSig(DoubleNodeHomework *Sig){
    this->sig = Sig;
}

void DoubleNodeHomework :: setAnt(DoubleNodeHomework *Ant){
    this->ant = Ant;
}
