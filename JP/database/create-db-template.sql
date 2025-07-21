CREATE DATABASE IF NOT EXISTS manzanasANB DEFAULT CHARACTER SET = 'utf8mb4';

USE manzanasANB;

SET NAMES utf8mb4;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;

DROP TABLE IF EXISTS m_s;
DROP TABLE IF EXISTS solicitudes;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS servicios;
DROP TABLE IF EXISTS manzanas;

CREATE TABLE manzanas (
    Id_M INT AUTO_INCREMENT PRIMARY KEY,
    NombreManzana VARCHAR(25) NOT NULL,
    Dir VARCHAR(50)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO manzanas (NombreManzana, Dir)
VALUES 
    ('Engativá', 'Calle 80 #90-12'),
    ('Fontibón', 'Av. Dorado #120-45'),
    ('Teusaquillo', 'Calle 34 #14-22');

CREATE TABLE servicios (
    Id_S INT AUTO_INCREMENT PRIMARY KEY,
    NombreServicio VARCHAR(25) NOT NULL,
    TipoServicio VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO servicios (NombreServicio, TipoServicio)
VALUES 
    ('Pintura', 'Arte'),
    ('Ciclismo', 'Deporte'),
    ('Panadería', 'Gastronomía'),
    ('Ajedrez', 'Recreación'),
    ('Zumba', 'Deporte'),
    ('Inglés', 'Educación'),
    ('Repostería', 'Gastronomía'),
    ('Costura', 'Manualidades');

CREATE TABLE usuario (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    NombreUsuario VARCHAR(50) NOT NULL,
    TipoDocumento ENUM('TI', 'CC') NOT NULL,
    Documento VARCHAR(50) NOT NULL UNIQUE,
    Rol ENUM('usuario', 'administrador') NOT NULL DEFAULT 'usuario',
    Id_M1 INT NULL,
    FOREIGN KEY (Id_M1) REFERENCES manzanas (Id_M) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO usuario (NombreUsuario, TipoDocumento, Documento, Rol, Id_M1)
VALUES 
    ('CamilaR', 'CC', '9001', 'administrador', 1),
    ('Esteban', 'TI', '9002', 'usuario', 2),
    ('Valentina', 'TI', '9003', 'usuario', 1),
    ('Santiago', 'CC', '9004', 'usuario', 3),
    ('Lucía', 'TI', '9005', 'usuario', 1),
    ('Mauricio', 'TI', '9006', 'administrador', 2),
    ('Fernanda', 'TI', '9007', 'usuario', 1),
    ('Tatiana', 'CC', '9008', 'usuario', 3),
    ('Gabriel', 'TI', '9009', 'usuario', 1),
    ('Natalia', 'TI', '9010', 'usuario', 1),
    ('Héctor', 'CC', '9011', 'usuario', 2);

CREATE TABLE solicitudes (
    Id_solicitudes INT AUTO_INCREMENT PRIMARY KEY,
    Fecha DATETIME,
    Id1 INT,
    CodigoS INT,
    FOREIGN KEY (Id1) REFERENCES usuario (Id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CodigoS) REFERENCES servicios (Id_S) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO solicitudes (Fecha, Id1, CodigoS)
VALUES 
    ('2024-03-01 10:00:00', 1, 2),
    ('2024-03-01 10:00:00', 1, 5);

CREATE TABLE m_s (
    Id_M1 INT,
    Id_S1 INT,
    PRIMARY KEY (Id_M1, Id_S1),
    FOREIGN KEY (Id_M1) REFERENCES manzanas (Id_M) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Id_S1) REFERENCES servicios (Id_S) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO m_s (Id_M1, Id_S1)
VALUES 
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (2, 6),
    (3, 2),
    (3, 3),
    (3, 7),
    (3, 8),
    (3, 5);

SET foreign_key_checks = 1;

SELECT m.NombreManzana, s.NombreServicio
FROM m_s
JOIN manzanas m ON m.Id_M = m_s.Id_M1
JOIN servicios s ON s.Id_S = m_s.Id_S1
ORDER BY m.NombreManzana;

SELECT Id_solicitudes, COUNT(*) 
FROM solicitudes 
GROUP BY Id_solicitudes 
HAVING COUNT(*) > 1;
