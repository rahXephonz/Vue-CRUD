--CREATE A DATABASE

CREATE DATABASE department;

--CREATE A TABLES

CREATE TABLE IF NOT EXISTS employees (
    id serial,
    name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    departement VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    about TEXT,
    PRIMARY KEY(id)
);

--INSERT DATA (CREATE)
INSERT INTO employees (name, gender, departement, about) VALUES ('Valerian Trifa', 'Male', 'FrontEnd Developer', 'He is a senior frontend developer from kata.ai')

--GET ALL DATA (READ)
SELECT * FROM employees

--GET DATA FROM SPECIFIC
SELECT * FROM employees WHERE id = {variable}

--UPDATE DATA (UPDATE)
UPDATE employees SET name = 'New Name', gender = 'New Gender', departement = 'New Departement', about = 'New About'
        WHERE id = {variable} RETURNING *

--DELETE DATA
DELETE FROM employees WHERE id = {variable}

--RESET INCREMENT VARIABLE ID
TRUNCATE TABLE someTable RESTART IDENTITY;