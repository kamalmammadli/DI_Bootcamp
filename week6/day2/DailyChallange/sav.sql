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




-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )  yeni table yaradir id ve ad verir



-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')  DEYERLER VERIR ID VE NAME-E

-- SELECT * FROM FirstTab  BUTUN TABLE -I GOSTERIR

-- CREATE TABLE SecondTab (
--     id integer 
-- ) YENI TABLE YARADIR 

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL) ID- DEYERINE 5 VERIR


-- SELECT * FROM SecondTab
--   IKINCI TABLE NI GOSTERIR 



-- Q1. Aşağıdakı ifadənin NƏTİCƏSİ nə olacaq?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--  tabledeki idlerde null olmuyan setirlerin sayini qaytaracaq

-- Q2. Aşağıdakı ifadənin NƏTİCƏSİ nə olacaq?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--  id si 5 olmuyanlarin sayini gosterecek

-- Q3. Aşağıdakı ifadənin NƏTİCƏSİ nə olacaq?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

--  table ler arasinda idleri eyni olmuyanlarin sayini gostersin

-- Q4. Aşağıdakı ifadənin NƏTİCƏSİ nə olacaq?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--  secondtabin icerisinde olmuyan idleri firstabda otursun


