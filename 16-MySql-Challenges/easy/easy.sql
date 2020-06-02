-- Easy​: Create a table with your top five favorite books with 
-- Title, Publish Date, and Author First/Last 
-- Name Create a query to add in two new books 
-- Remove the oldest book Provide an additional query giving the sum of all books

DROP DATABASE IF EXISTS alans_db;
CREATE DATABASE alans_db;
USE alans_db;

CREATE TABLE books (
id INT AUTO_INCREMENT,
Title VARCHAR(255),
PublishDate VARCHAR(255),
Author VARCHAR(255),
PRIMARY KEY(id));


INSERT INTO books (Title, PublishDate, Author)
VALUE("Rich Dad Poor Dad", "April 11, 2017", "Robert T. Kiyosaki"),
("FAKE: Fake Money, Fake Teachers, Fake Assets: How Lies Are Making the Poor and Middle Class Poorer", "April 16, 2019", "Robert T. Kiyosaki"),
("How to Manage Your Money When You Don't Have Any", "March 8, 2012", "Erik Wecks"),
("A Beginner's Guide to the Stock Market: Everything You Need to Start Making Money Today", "May 20, 2019", "Matthew Kratter"),
("Rich Dad's CASHFLOW Quadrant: Rich Dad's Guide to Financial Freedom", "August 16, 2011", "Robert T. Kiyosaki");

INSERT INTO books (Title, PublishDate, Author)
VALUE("Why the Rich Are Getting Richer", "July 18, 2017", "Robert T. Kiyosaki"),
("The Business of the 21st Century", "February 22, 2012", "Robert T. Kiyosaki");

DELETE FROM books 
WHERE
    id = 7;

SELECT 
    count(Title)
FROM
    books;

SELECT * FROM books;








