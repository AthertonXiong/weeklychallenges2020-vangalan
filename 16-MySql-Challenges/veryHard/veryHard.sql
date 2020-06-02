-- Very Hard​: Copy the table from your Very Easy Challenge 
-- Write a query to add in three cars at once 
-- Write a query to add in prices and colors for each of these cars 
-- Write a query to put the Make and Model together in one column 

DROP DATABASE IF EXISTS alans_db;
CREATE DATABASE alans_db;
USE alans_db;

CREATE TABLE cars (make VARCHAR(255),
model VARCHAR(255),
carYear INT);

INSERT INTO cars (make, model, carYear)
VALUES ("Acura", "TL", 2005),
("Honda", "Accord", 2020),
("Toyota", "Camery", 2020);

-- Add 3 cars in a single query
INSERT INTO cars (make, model, carYear)
VALUE("BMW", "Z4", 2018),
("Nissan", "GTR", 2020),
("Toyota", "Tacoma", 2020);

-- Add price and color column
ALTER TABLE cars
ADD (price DECIMAL(10,2), color VARCHAR(50));

-- Update Cars table with new data
UPDATE cars 
SET 
    price = 30000.00,
    color = 'white'
WHERE
    model = 'TL';

UPDATE cars 
SET 
    price = 20000.00,
    color = 'red'
WHERE
    model = 'Accord';

UPDATE cars 
SET 
    price = 29000.00,
    color = 'purple'
WHERE
    model = 'Camery';

UPDATE cars 
SET price = 40000.00, color = "black"
WHERE model = "Z4";

UPDATE cars 
SET 
    price = 200000.00,
    color = 'blue'
WHERE
    model = 'GTR';

UPDATE cars 
SET 
    price = 32000.00,
    color = 'green'
WHERE
    model = 'Tacoma';

SELECT CONCAT(make, ' ', model) AS 'vehicle' FROM cars;

-- counts how many of the same make of cars there are.
SELECT make, COUNT(1) FROM cars GROUP BY make;

SELECT * FROM cars;

