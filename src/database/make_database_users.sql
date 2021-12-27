SHOW DATABASES;
DROP SCHEMA IF EXISTS `users`;
CREATE SCHEMA IF NOT EXISTS `users`
    DEFAULT CHARACTER SET = 'utf8mb4';
USE `users`;

-- Tablas sin llaves foraneas:
-- Crear Tabla de Status de una Tarea/Task:
DROP TABLE IF EXISTS `users`.`fullname`;
CREATE TABLE IF NOT EXISTS `users`.`fullname`(
  `id` INT(15) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(80) NOT NULL DEFAULT " ",
  `apellidos` VARCHAR(80) NOT NULL DEFAULT " ",
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `users`.`datos`;
CREATE TABLE IF NOT EXISTS `users`.`datos`(
  `id` INT(15) NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(20) NOT NULL,
  `direccion` VARCHAR(60) NOT null,
  `telefono` VARCHAR(100) NOT NULL,
  PRIMARY KEY(`id`)
);
/*
-- ALTER TABLE `users` ADD PRIMARY KEY(id);
-- ALTER TABLE `users` MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
*/
DESCRIBE `users`.`datos`;
-- LINKS TABLE
DROP TABLE IF EXISTS `users`.`status`;
CREATE TABLE IF NOT EXISTS `users`.`status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_user` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

SELECT * FROM `users`.`status`;
