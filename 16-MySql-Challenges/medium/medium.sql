-- Medium​: Create a table with your top 10 movies. 
-- Include title, release date, and rating 
-- Create a query that pulls all movies, in order of release date, where the title includes the letter “s”.

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
VALUE
("Extraction", "April 24, 2020", "68"),
("Train to Busan", "July 22, 2016", "94"),
("Bright", "December 13, 2017", "28"),
("Avengers: Infinity War", "April 27, 2018", "85"),
("Bad Boys for Life", "January 17, 2020", "77"),
("Bumblebee", "December 21, 2018", "92"),
("The Forbidden Kingdom", "April 18, 2008 ", "64"),
("Mulan", "March 27, 2020", "77"),
("Ip Man 4: The Finale", "December 25, 2019", "90"),
("Rush Hour", "September 18, 1998", "60");
-- All numbers in rating column are percentages.

SELECT title, releaseDate, rating
FROM myMovies
WHERE title LIKE '%s%'
ORDER BY releaseDate;


SELECT * FROM myMovies;







