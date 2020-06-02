-- Hard​: Make a copy of your Medium Challenge 
-- Write out the queries that would add the director’s First Name and Last Name into two separate columns. 
-- Create a query that puts the names together. 
-- Create a query to put the list in alphabetical order by the last name from A-Z After you order the list, 
-- remove the Movies where the Last Name ends with ”R-Z” 
-- Write a query where the first three appear

DROP DATABASE IF EXISTS alans_db;
CREATE DATABASE alans_db;
USE alans_db;

CREATE TABLE myMovies (
id INT AUTO_INCREMENT,
Title VARCHAR(255),
releaseDate VARCHAR(255),
rating INT,
PRIMARY KEY(id)
);

INSERT INTO myMovies (Title, releaseDate, rating)
VALUES
("Extraction", "April 24, 2020", 68),
("Train to Busan", "July 22, 2016", 94),
("Bright", "December 13, 2017", 28),
("Avengers: Infinity War", "April 27, 2018", 85),
("Bad Boys for Life", "January 17, 2020", 77),
("Bumblebee", "December 21, 2018", 92),
("The Forbidden Kingdom", "April 18, 2008 ", 64),
("Mulan", "March 27, 2020", 77),
("Ip Man 4: The Finale", "December 25, 2019", 90),
("Rush Hour", "September 18, 1998", 60);
-- Write out the queries that would add the director’s First Name and Last Name into two separate columns. 
ALTER TABLE myMovies ADD COLUMN firstName VARCHAR(50);
ALTER TABLE myMovies ADD COLUMN lastName VARCHAR(50);
SELECT * FROM myMovies;

UPDATE myMovies 
SET 
    firstName = 'Sam',
    lastName = 'Hargrave'
WHERE
    title = 'Extraction';
    
UPDATE myMovies 
SET 
    firstName = 'Yeon',
    lastName = 'Sang-ho'
WHERE
    title = 'Train to Busan';
    
UPDATE myMovies 
SET 
    firstName = 'David',
    lastName = 'Ayer'
WHERE
    title = 'Bright';
    
UPDATE myMovies 
SET 
    firstName = 'Ross',
    lastName = 'Whedon'
WHERE
    title = 'Avengers: Infinity War';
    
UPDATE myMovies 
SET 
    firstName = 'Bilall',
    lastName = 'Fallah'
WHERE
    title = 'Bad Boys for Life';
    
UPDATE myMovies 
SET 
    firstName = 'Travis',
    lastName = 'Knight'
WHERE
    title = 'Bumblebee';
    
UPDATE myMovies 
SET 
    firstName = 'Rob',
    lastName = 'Minkoff'
WHERE
    title = 'The Forbidden Kingdom';
    
UPDATE myMovies 
SET 
    firstName = 'Niki',
    lastName = 'Caro'
WHERE
    title = 'Mulan';
    
UPDATE myMovies 
SET 
    firstName = 'Wilson',
    lastName = 'Yip'
WHERE
    title = 'Ip Man 4: The Finale';
    
UPDATE myMovies 
SET 
    firstName = 'Brett',
    lastName = 'Ratner'
WHERE
    title = 'Rush Hour';

ALTER TABLE myMovies ADD COLUMN fullname VARCHAR(50);
UPDATE myMovies SET fullname = CONCAT(firstName, ' ', lastName);
SELECT * FROM myMovies ORDER BY fullname;
DELETE FROM myMovies WHERE REGEXP_LIKE(lastName, '[r-z]$');
SELECT * FROM myMovies ORDER BY fullname LIMIT 3;
SELECT * FROM myMovies;

