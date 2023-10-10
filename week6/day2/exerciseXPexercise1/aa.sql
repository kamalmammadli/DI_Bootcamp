-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Turkish_Turkey.1251'
--     LC_CTYPE = 'Turkish_Turkey.1251'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


SELECT * FROM customer;
 
 
SELECT (first_name, last_name) AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;


SELECT * FROM customer ORDER BY first_name DESC;


SELECT (film_id, title, description, release_year, rental_rate)
FROM film
ORDER BY rental_rate ASC;


SELECT address, phone, district FROM address WHERE district='Texas';


SELECT * FROM film WHERE film_id=15 or film_id=150;

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title= 'My Favorite Movie';

SELECT film_id, title, description, length, rental_rate
FROM film WHERE title LIKE 'Ab%';

SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate
LIMIT 10;


SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate
LIMIT 10 OFFSET 10;
   
SELECT * FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory)

SELECT city, country FROM city INNER JOIN country ON city.country_id=country.country_id
