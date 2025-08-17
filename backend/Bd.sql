
CREATE DATABASE manzanasxd
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE manzanasxd


 SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



CREATE TABLE `manzanas` (
  `Id_M` int(11) NOT NULL,
  `NombreManzana` varchar(25) NOT NULL,
  `Dir` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `manzanas` (`Id_M`, `NombreManzana`, `Dir`) VALUES
(1, 'Bosa', 'Calle 72'),
(2, 'Soacha', 'Calle 666'),
(3, 'Usme','El Cerro 777')



CREATE TABLE `m_s` (
  `Id_M1` int(11) NOT NULL,
  `Id_S1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `m_s` (`Id_M1`, `Id_S1`) VALUES
(1, 4),
(1, 6),
(1, 7),
(2, 3),
(2, 6),
(2, 8);



CREATE TABLE `servicios` (
  `Id_S` int(11) NOT NULL,
  `NombreServicio` varchar(25) NOT NULL,
  `TipoServicio` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `servicios` (`Id_S`, `NombreServicio`, `TipoServicio`) VALUES
(1, 'Clase de baile', 'Entretenimiento'),
(2, 'Cine', 'Entretenimiento'),
(3, 'Piscina', 'Deporte'),
(4, 'Gym', 'Deporte'),
(5, 'Cocina', 'Gastronomia'),
(6, 'Lavanderia', 'Aseo'),
(7, 'Coser', 'Maquina'),
(8, 'Yoga', 'Deporte');



CREATE TABLE `solicitudes` (
  `Id_solicitudes` int(11) NOT NULL,
  `Fecha` datetime DEFAULT NULL,
  `Id1` int(11) DEFAULT NULL,
  `CodigoS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `solicitudes` (`Id_solicitudes`, `Fecha`, `Id1`, `CodigoS`) VALUES
(1, '2024-02-13 12:11:00', 1, 4),
(2, '2024-02-13 12:11:00', 1, 6);


CREATE TABLE `usuario` (
  `Id` int(11) NOT NULL,
  `NombreUsuario` varchar(50) NOT NULL,
  `TipoDocumento` enum('TI','CC') NOT NULL,
  `Documento` varchar(50) NOT NULL,
  `Rol` enum('usuario','administrador') NOT NULL DEFAULT 'usuario',
  `Id_M1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;




INSERT INTO `usuario` (`Id`, `NombreUsuario`, `TipoDocumento`, `Documento`, `Rol`, `Id_M1`) VALUES
(1, 'Johan', 'CC', '1234', 'administrador', 1),
(2, 'Laura', 'TI', '12345', 'usuario', 2),
(3, 'Messi', 'TI', '7890', 'usuario', 1),
(4, 'Cristiano', 'CC', '1020', 'usuario', NULL),
(5, 'Rooney', 'TI', '1120', 'usuario', 1),
(6, 'James', 'TI', '1121', 'administrador', 1),
(7, 'Alexa', 'TI', '1122', 'usuario', 1),
(8, 'Paul', 'CC', '5565', 'usuario', NULL),
(9, 'PaloMio', 'TI', '123123', 'usuario', 1),
(10, 'Tilin', 'TI', '0000', 'usuario', 1),
(11, 'Papu', 'CC', '5555', 'usuario', 1);


--
ALTER TABLE `manzanas`
  ADD PRIMARY KEY (`Id_M`);


ALTER TABLE `m_s`
  ADD PRIMARY KEY (`Id_M1`,`Id_S1`),
  ADD KEY `Id_S1` (`Id_S1`);


ALTER TABLE `servicios`
  ADD PRIMARY KEY (`Id_S`);


ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`Id_solicitudes`),
  ADD KEY `Id1` (`Id1`),
  ADD KEY `CodigoS` (`CodigoS`);


ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Documento` (`Documento`),
  ADD KEY `Id_M1` (`Id_M1`);


ALTER TABLE `manzanas`
  MODIFY `Id_M` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


ALTER TABLE `servicios`
  MODIFY `Id_S` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;


ALTER TABLE `solicitudes`
  MODIFY `Id_solicitudes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `usuario`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;


ALTER TABLE `m_s`
  ADD CONSTRAINT `m_s_ibfk_1` FOREIGN KEY (`Id_M1`) REFERENCES `manzanas` (`Id_M`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `m_s_ibfk_2` FOREIGN KEY (`Id_S1`) REFERENCES `servicios` (`Id_S`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`Id1`) REFERENCES `usuario` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`CodigoS`) REFERENCES `servicios` (`Id_S`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`Id_M1`) REFERENCES `manzanas` (`Id_M`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

DROP DATABASE manzanasxd;