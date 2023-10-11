-- Database: HollyWood

-- DROP DATABASE IF EXISTS "HollyWood";

-- CREATE DATABASE "HollyWood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Turkish_Turkey.1251'
--     LC_CTYPE = 'Turkish_Turkey.1251'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )



-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Angelina','Jolie','11/10/1970', 4);

-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Taylor','Swift','5/04/1990', 2);

-- SELECT COUNT(actor_id) FROM actors;



-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Orxan','Mehraliyev','11/05/1990', 4), ('Kamal','Mammadli','10/04/2000', 4), ('Nurlan','Mushayev','11/10/2000', 4)


-- SELECT avg(number_oscars) AS average_number_oscars FROM actors;

-- SELECT DISTINCT number_oscars FROM actors ORDER BY number_oscars DESC;

-- SELECT * FROM actors WHERE age >= '01/01/1970' ;

-- SELECT * FROM actors WHERE first_name in ('David', 'Morgan', 'Will');

-- UPDATE actors SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon';


-- UPDATE actors 
-- SET number_oscars='4'
-- WHERE first_name='Angelina' AND last_name='Jolie'
-- RETURNING first_name, last_name, age, number_oscars;


-- ALTER TABLE actors RENAME COLUMN age TO birth_date;


-- DELETE FROM actors WHERE actor_id=4
-- RETURNING actor_id, first_name, last_name, number_oscars


-- SELECT * FROM actors; 

-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );



INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
    ( 'Good Will Hunting', 
    'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
    ( 'Oceans Eleven', 
    'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

SELECT * FROM actors; 



SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id;

