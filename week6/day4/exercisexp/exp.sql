-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Turkish_Turkey.1251'
--     LC_CTYPE = 'Turkish_Turkey.1251'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;



-- select first_name as first, last_name as last from employees;

-- select distinct department_id from employees;



-- select * from employees order by first_name desc;


-- select first_name, last_name, salary * 0.15 as PF from employees;



-- select first_name, last_name, salary from employees order by salary asc;
-- !!! azalan order DESC

-- select sum(salary) as totalsalary from employees;


-- SELECT MAX(salary) AS MaximumSalary, MIN(salary) AS MinimumSalary
-- FROM employees;

-- SELECT AVG(salary) AS AverageSalary
-- FROM employees;



-- SELECT COUNT(*) AS NumberOfEmployees
-- FROM employees;

-- SELECT UPPER(first_name) FROM employees;

-- SELECT SUBSTRING(first_name, 1, 3) FROM employees;



-- SELECT CONCAT(first_name, ' ', last_name) FROM employees;




-- SELECT 
--     first_name,
--     last_name,
--     LENGTH(CONCAT(first_name, ' ', last_name))
-- FROM 
--     employees;



-- SELECT 
--     first_name
-- FROM 
--     employees
-- WHERE 
--     first_name'[0-9]';

-- !!! refex istifadesi zamani
-- !!! option  2
    select * from employees where first_name ~ '\d';
-- ~ for regex
-- \ escape operator
-- d regex for number ve ya [0-9]
 --   !!!

-- select * from employees limit 10;

-- select first_name, last_name, salary from employees
-- where salary between 10000 and 15000;


-- SELECT *
-- FROM employees
-- WHERE first_name LIKE '%c%' AND first_name LIKE '%e%';

-- !!! ilike boyuk kicik herf ucun

-- select * from employees

-- SELECT last_name, job_title, salary
-- FROM employees join jobs on employees.job_id=jobs.job_id
-- WHERE job_title  NOT IN ('Programmer', 'Shipping Clerk')
-- AND salary NOT IN (4500, 10000, 15000);

-- select * from jobs
-- select * from employees

-- SELECT last_name
-- FROM employees
-- WHERE LENGTH(last_name) = 6;


-- SELECT last_name
-- FROM employees
-- WHERE SUBSTRING(last_name, 3, 1) = 'e';


-- SELECT DISTINCT job_title
-- FROM employees join jobs on employees.job_id=jobs.job_id




-- select * from employees where UPPER(last_name) in ('JONES','BLAKE','SCOTT','KING','FORD')





























	
	