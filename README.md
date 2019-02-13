# mysql-express-pm2-employees

#--------------Database ----------------

CREATE DATABASE IF NOT EXISTS empleados;

USE empleados;

CREATE TABLE empleado (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) DEFAULT NULL,
  salario INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);


DESCRIBE empleado;

                   
INSERT INTO empleado values
(1, 'Kelly Tobar', 10000000),
(2, 'Miguel Ortega', 11000000),
(3, 'Jorge Quintero', 5000000);

SELECT * FROM employee;
