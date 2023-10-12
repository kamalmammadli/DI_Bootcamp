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


-- SELECT * FROM language;

-- SELECT film.title, film.description, language.name
-- From film
-- inner join language on film.language_id = language.language_id;


-- select film.title, film.description, language.name
-- From film
-- left outer join language on film.language_id = language.language_id;

-- create table new_film (
-- film_id serial Primary key,
-- film_name VARCHAR(100)	)


-- insert into new_film (film_name)
-- values ('Film1'), ('Film2'), ('Film3');

-- select * from new_film


-- create table customer_review(
-- review_id serial primary key,
-- film_id serial  references new_film(film_id) on delete cascade ,
-- language_id serial,
-- title varchar(100),
-- rating integer,
-- review_text TEXT,
-- last_update date )



-- insert into customer_review(film_id,language_id,title,rating, review_text, last_update)

-- values (1, 1, 'testt1', 5, 'Testt2','6.10.2000'),
--     (2, 2, 'test3', 4, 'Testt2','7.10.2000')
-- 	select * from customer_review;


-- delete from new_film where film_id=1;

-- exercise 2


-- update film set language_id = 3 where film_id = 1;

-- DROP TABLE customer_review;


-- select * from rental order by return_date DESC;

	
	
-- SELECT COUNT(*) AS return_date
-- FROM rental
-- WHERE return_date is NULL;

-- select film.title, film.replacement_cost
-- from film
-- inner join rental on film_id = rental_id where return_date DESC
-- LIMIT 30;

-- select * from film order by rental_rate
-- limit 30;

-- select * from film


-- select * from film inner join inventory on inventory.inventory_id


-- select * from film
-- inner join actor
-- on film_id = actor_id 
-- where actor.first_name = 'Penelope';



select * from film 
where length > 60 and rating = 'R';



