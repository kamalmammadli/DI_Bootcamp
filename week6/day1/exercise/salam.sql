-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Turkish_Turkey.1251'
--     LC_CTYPE = 'Turkish_Turkey.1251'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE items(
-- item_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- price  NOT NULL)



-- INSERT INTO items(first_name, price)
-- VALUES ('Small Desk', 100);
-- INSERT INTO items(first_name, price)
-- VALUES ('Large desk', 300);
-- INSERT INTO items(first_name, price)
-- VALUES ('Fan', 80);
-- SELECT * FROM items;

-- CREATE TABLE customers(
-- item_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (100) NOT NULL);


-- INSERT INTO customers(first_name, last_name)
-- VALUES ('Grey', 'Jones');
-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Sandra', 'Jones');
-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Scott', 'Scott');
-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Trevor', 'Green');
-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Melanie', 'Johnson');

SELECT * FROM customers;
SELECT * FROM items WHERE (price > 80);
SELECT * FROM items WHERE (price <= 300);
SELECT * FROM customers WHERE last_name LIKE 'Smith';
SELECT * FROM customers WHERE last_name LIKE 'Jones';
SELECT * FROM customers WHERE first_name NOT LIKE 'Scott';






