create database Proyecto1F2

CREATE TABLE Usuario (
Id INT PRIMARY  KEY IDENTITY NOT NULL,
Nombre VARCHAR(40) NOT NULL,
Apellido VARCHAR(40) NOT NULL,
Nom_Usuario VARCHAR(60) NOT NULL,
Contrasena VARCHAR(50) NOT NULL,
Fecha_Nacimiento DATE,
Pais VARCHAR(60),
Correo VARCHAR(70)
);
