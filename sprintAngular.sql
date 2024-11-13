-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-11-2024 a las 23:07:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sprintAngular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `inicio` datetime NOT NULL,
  `fin` datetime NOT NULL,
  `descripcion` text DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizado_en` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `inicio`, `fin`, `descripcion`, `color`, `creado_en`, `actualizado_en`) VALUES
(31, 'Reunión de trabajo', '2024-11-01 09:00:00', '2024-11-03 11:00:00', 'Reunión mensual de seguimiento de proyectos', '#FF5733', '2024-11-13 21:31:36', '2024-11-13 21:32:42'),
(32, 'Conferencia de marketing', '2024-11-05 10:00:00', '2024-11-07 16:00:00', 'Conferencia sobre tendencias en marketing digital', '#33C1FF', '2024-11-13 21:31:36', '2024-11-13 21:32:59'),
(33, 'Cumpleaños de Ana', '2024-11-10 18:00:00', '2024-11-11 22:00:00', 'Fiesta de cumpleaños de Ana en su casa', '#FFD700', '2024-11-13 21:31:36', '2024-11-13 21:32:18'),
(34, 'Exposición de arte', '2024-11-15 11:00:00', '2024-11-16 20:00:00', 'Exposición de pintura contemporánea en el museo local', '#8A2BE2', '2024-11-13 21:31:36', '2024-11-13 21:33:16'),
(35, 'Taller de cocina', '2024-11-20 17:00:00', '2024-11-25 19:00:00', 'Taller práctico de cocina italiana', '#228B22', '2024-11-13 21:31:36', '2024-11-13 21:33:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localizaciones`
--

CREATE TABLE `localizaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `latitud` decimal(10,8) NOT NULL,
  `longitud` decimal(11,8) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `localizaciones`
--

INSERT INTO `localizaciones` (`id`, `nombre`, `descripcion`, `latitud`, `longitud`, `categoria`) VALUES
(6, 'Centro Comercial Maremagnum', 'Centro comercial junto al puerto con tiendas, restaurantes y entretenimiento.', 41.37530000, 2.18340000, 'Centro Comercial'),
(7, 'Centro Comercial La Maquinista', 'Gran centro comercial al aire libre con numerosas tiendas y restaurantes.', 41.44230000, 2.19230000, 'Centro Comercial'),
(8, 'Centro Comercial Diagonal Mar', 'Amplio centro comercial con tiendas, cines y zona de restaurantes.', 41.41070000, 2.21640000, 'Centro Comercial'),
(9, 'Centro Comercial Glòries', 'Centro comercial moderno con tiendas de moda, restaurantes y un supermercado.', 41.40360000, 2.19150000, 'Centro Comercial'),
(10, 'Centro Comercial L’illa Diagonal', 'Centro comercial de lujo con boutiques, restaurantes y un supermercado gourmet.', 41.39160000, 2.13430000, 'Centro Comercial'),
(11, 'Parque de la Ciutadella', 'Parque urbano con un lago, museos, una fuente y mucha vegetación.', 41.38850000, 2.18640000, 'Parque'),
(12, 'Parque Güell', 'Famoso parque con diseños de Gaudí, rodeado de jardines y con vistas a la ciudad.', 41.41450000, 2.15270000, 'Parque'),
(13, 'Parque de Montjuïc', 'Parque montañoso con miradores, museos y el castillo de Montjuïc.', 41.36370000, 2.15800000, 'Parque'),
(14, 'Parque del Guinardó', 'Parque natural con senderos, zonas de pícnic y miradores sobre la ciudad.', 41.41750000, 2.16510000, 'Parque'),
(15, 'Parque Joan Miró', 'Parque con amplias zonas de césped y la famosa escultura de Joan Miró.', 41.37900000, 2.14520000, 'Parque'),
(16, 'Hospital Clínic de Barcelona', 'Hospital de referencia en investigación médica y atención especializada.', 41.38520000, 2.15910000, 'Hospital'),
(17, 'Hospital de la Santa Creu i Sant Pau', 'Hospital histórico con arquitectura modernista y servicios médicos completos.', 41.41220000, 2.17440000, 'Hospital'),
(18, 'Hospital del Mar', 'Hospital universitario ubicado junto al mar, especializado en varias áreas médicas.', 41.38490000, 2.19560000, 'Hospital'),
(19, 'Hospital Vall d’Hebron', 'Uno de los hospitales más grandes de Barcelona, con varias especialidades.', 41.42140000, 2.15690000, 'Hospital'),
(20, 'Hospital Quirónsalud Barcelona', 'Centro privado especializado en varias ramas de la medicina.', 41.39100000, 2.14160000, 'Hospital');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(6) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `localizacion` varchar(100) NOT NULL,
  `hobby` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `nombre`, `apellido`, `email`, `telefono`, `localizacion`, `hobby`) VALUES
(14, 'Juan', 'Pérez', 'juan.perez@email.com', '612345678', 'Madrid', 'Futbol'),
(15, 'Ana', 'Gómez', 'ana.gomez@email.com', '623456789', 'Barcelona', 'Lectura'),
(16, 'Carlos', 'Martínez', 'carlos.martinez@email.com', '634567890', 'Valencia', 'Ciclismo'),
(17, 'Laura', 'Sánchez', 'laura.sanchez@email.com', '645678901', 'Sevilla', 'Pintura'),
(18, 'Pedro', 'Ramírez', 'pedro.ramirez@email.com', '656789012', 'Zaragoza', 'Cine'),
(19, 'Marta', 'Fernández', 'marta.fernandez@email.com', '667890123', 'Bilbao', 'Cocina'),
(20, 'Luis', 'López', 'luis.lopez@email.com', '678901234', 'Alicante', 'Senderismo'),
(21, 'María', 'Díaz', 'maria.diaz@email.com', '689012345', 'Murcia', 'Viajes'),
(22, 'Javier', 'Hernández', 'javier.hernandez@email.com', '690123456', 'Palma de Mallorca', 'Fotografía');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `mes` varchar(20) NOT NULL,
  `ventas` decimal(10,2) NOT NULL,
  `unidades_vendidas` int(11) NOT NULL,
  `devoluciones` int(11) NOT NULL,
  `ingresos_devoluciones` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `mes`, `ventas`, `unidades_vendidas`, `devoluciones`, `ingresos_devoluciones`) VALUES
(1, 'Enero', 12000.00, 300, 10, 200.00),
(2, 'Febrero', 15000.00, 350, 12, 240.00),
(3, 'Marzo', 13000.00, 320, 8, 160.00),
(4, 'Abril', 17000.00, 400, 15, 300.00),
(5, 'Mayo', 16000.00, 380, 9, 180.00),
(6, 'Junio', 14000.00, 350, 11, 220.00),
(7, 'Julio', 18000.00, 450, 14, 280.00),
(8, 'Agosto', 19000.00, 460, 18, 360.00),
(9, 'Septiembre', 21000.00, 500, 20, 400.00),
(10, 'Octubre', 23000.00, 520, 25, 500.00),
(11, 'Noviembre', 22000.00, 510, 23, 460.00),
(12, 'Diciembre', 25000.00, 550, 30, 600.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `localizaciones`
--
ALTER TABLE `localizaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `localizaciones`
--
ALTER TABLE `localizaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
