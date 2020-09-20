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
Fecha Date
);

CREATE TABLE Tipo_Partida(
Id_TPartida int primary key identity NOT NULL,
Tipo_Partida varchar(50) not null,
Estado_Jugador varchar(50),
No_Movimiento int,
IdJugador varchar(60) not null,
IdPartida int not null,
CONSTRAINT fk_Player FOREIGN KEY (IdJugador) REFERENCES Usuario (Nom_Usuario),
CONSTRAINT fk_Part FOREIGN KEY (IdPartida) REFERENCES Partida(Id_Partida)
);

CREATE TABLE Torneo(
Id_Torneo int primary key identity NOT NULL,
No_Jugadores int,
Fecha date
);

CREATE TABLE Dato_Torneo(
DatoTorneo int primary key identity NOT NULL,
Estado_Jugador varchar(50),
IdJugador varchar(60) not null,
IdTorneo int not null,
CONSTRAINT fk_jugador FOREIGN KEY (IdJugador) REFERENCES Usuario (Nom_Usuario),
CONSTRAINT fk_Toreno FOREIGN KEY (IdTorneo) REFERENCES Torneo (Id_Torneo),
);

