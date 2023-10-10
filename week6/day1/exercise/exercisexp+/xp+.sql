-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Turkish_Turkey.1251'
--     LC_CTYPE = 'Turkish_Turkey.1251'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;



-- CREATE TABLE students(
-- students_id SERIAL PRIMARY KEY,
-- last_name VARCHAR (100) NOT NULL,
-- first_name VARCHAR (50) NOT NULL,
-- birth_date  DATE);


-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES ('Marc', 'Benichou', '02/11/1998');
-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES ('Yoan', 'Cohen', '03/12/2010');
-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES ('lea', 'Benichou', '27/07/1987');
-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES ('Amelia', 'Dux', '07/04/1996');
-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES ('David', 'Grez', '14/06/2003');
-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES ('Omer', 'Simpson', '03/10/1980');



-- SELECT first_name, last_name FROM students;
-- SELECT * FROM students WHERE students_id = 2;
-- SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Mark';
-- SELECT * FROM students WHERE first_name ILIKE '%a%';
-- SELECT * FROM students WHERE first_name LIKE 'a%';

-- !!! first letter deyirse boyukle yazilmalidi 
--!!! SELECT * FROM students WHERE first_name LIKE 'A%'; 

-- SELECT * FROM students WHERE first_name LIKE '%a';
-- SELECT * FROM students WHERE first_name LIKE '%a%';
-- SELECT * FROM students WHERE students_id = 1 or students_id = 3;

SELECT * FROM students WHERE birth_date >= '1/01/2000';

