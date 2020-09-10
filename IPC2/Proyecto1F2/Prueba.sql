create database Proyecto1F2

CREATE TABLE Usuario(
Id INT PRIMARY  KEY IDENTITY NOT NULL,
Nombre VARCHAR(40) NOT NULL,
Apellido VARCHAR(40) NOT NULL,
Nom_Usuario VARCHAR(60) NOT NULL,
Contrasena VARCHAR(50) NOT NULL,
Fecha_Nacimiento DATE,
Pais VARCHAR(60),
Correo VARCHAR(70)
);

CREATE TABLE Partida(
Id_Partida INT PRIMARY KEY IDENTITY NOT NULL,
Estado_Jugador varchar(50) not null,
No_Movimiento int not null
);

CREATE TABLE Tipo_Partida(
Id_TPartida INT PRIMARY KEY IDENTITY NOT NULL,
Tipo_Partida varchar(50) not null,
No_Partida int not null
);

CREATE TABLE Torneo(
Id_Torneo INT PRIMARY KEY IDENTITY NOT NULL,
Estado_Jugador Varchar(60) not null
);