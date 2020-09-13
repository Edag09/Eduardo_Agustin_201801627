create database P1F2

use P1F2

CREATE TABLE Usuario(
Nombre varchar(40) NOT NULL,
Apellido varchar(40) NOT NULL,
Nom_Usuario varchar(60) Primary Key NOT NULL,
Contrasena varchar(50) NOT NULL,
Fecha_Nacimiento date,
Pais varchar(60),
Correo varchar(70)
);

CREATE TABLE Partida(
Id_Partida int primary key identity NOT NULL,
Estado_Jugador varchar(50) not null,
No_Movimiento int not null
);

CREATE TABLE Tipo_Partida(
Id_TPartida int primary key identity NOT NULL,
Tipo_Partida varchar(50) not null,
No_Partida int not null,
IdJugador varchar(60) not null,
IdPartida int not null,
CONSTRAINT fk_Player FOREIGN KEY (IdJugador) REFERENCES Usuario (Nom_Usuario),
CONSTRAINT fk_Part FOREIGN KEY (IdPartida) REFERENCES Partida(Id_Partida)
);

CREATE TABLE Torneo(
Id_Torneo int primary key identity NOT NULL,
Estado_Jugador varchar(60) not null,
No_Torneos int not null,
IdJugador varchar(60) not null,
CONSTRAINT fk_Jugador FOREIGN KEY (IdJugador) REFERENCES Usuario (Nom_Usuario)
);
