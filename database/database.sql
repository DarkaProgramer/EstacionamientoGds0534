create database ng_vehiculos_bd;
use ng_vehiculos_bd;

create table vehiculo(
    matricula varchar(50) not null primary key,
    nombreDue varchar(50),
    modelo varchar (100),
    color varchar (20),
    espacio varchar(10),

    created_at timestamp default current_timestamp

);

DESCRIBE vehiculo;

create table reserva(
    IdRese varchar(50) not null primary key,
    IdUsuario varchar(10),
    IdPago varchar(10),
    nombre varchar (50),
    created_at timestamp default current_timestamp,

  constraint FK_nombre FOREIGN KEY (nombre) References vehiculo (nombre)
  On update Cascade 
  On Delete Cascade

);

DESCRIBE reserva;



DELIMITER //

CREATE PROCEDURE InsertarUsuario(
    IN p_nombre VARCHAR(50),
    IN p_apeP VARCHAR(50),
    IN p_apeM VARCHAR(50),
    IN p_telefono VARCHAR(10),
    IN p_correo VARCHAR(100),
    IN p_password1 VARCHAR(100),
    IN p_password2 VARCHAR(100)
)
BEGIN
    DECLARE correo_exists INT;
    
    -- Verificar si el correo electrónico ya existe en la tabla
    SELECT COUNT(*) INTO correo_exists FROM usuario WHERE correo = p_correo;
    
    -- Si el correo electrónico no existe, realizar la inserción
    IF correo_exists = 0 THEN
        INSERT INTO usuario(nombre, apeP, apeM, telefono, correo, password1, password2)
        VALUES (p_nombre, p_apeP, p_apeM, p_telefono, p_correo, p_password1, p_password2);
    ELSE
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El correo electrónico ya está registrado.';
    END IF;
END //

DELIMITER ;

CREATE TABLE usuario (
    IdUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apeP VARCHAR(50),
    apeM VARCHAR(50),
    telefono VARCHAR(10),
    correo VARCHAR(50),
    password1 VARCHAR(50),
    created_at DATETIME
);


