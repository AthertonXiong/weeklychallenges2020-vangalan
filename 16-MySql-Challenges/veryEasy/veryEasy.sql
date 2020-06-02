DROP DATABASE IF EXISTS alans_db;
CREATE DATABASE alans_db;
USE alans_db;

CREATE TABLE cars (make VARCHAR(255),
Model VARCHAR(255),
carYear INT);

INSERT INTO cars (make, model, carYear)
VALUES ("Acura", "TL", "2005"),
("Honda", "Accord", "2020"),
("Toyota", "Camery", "2020");

INSERT INTO cars (make, model, carYear)
VALUE("BMW", "Z4", "2018"),
("Nissan", "GTR", "2020");


SELECT * FROM cars;

-- Very Easy​: Create a table with your top three cars and 
-- include make, model, year. 
-- Create a query to add in two more cars