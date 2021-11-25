const express = require('express');
const router = express.Router();
const db = require('../database/index');

//CREATE DATA
router.post('/', async (req, res, next) => {
  try {
    const employee = req.body;
    const sqlText = `INSERT INTO employees (name, gender, departement, about, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const sqlParams = [
      employee.name,
      employee.gender,
      employee.departement,
      employee.about,
      employee.email,
      employee.password,
    ];
    const result = (await db.query(sqlText, sqlParams)).rows;
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//UPDATE DATA
router.put('/:id', async (req, res, next) => {
  try {
    const employee = req.body;
    const sqlText = `UPDATE employees SET name = $1, gender = $2, departement = $3, about = $4, email = $5, password = $6
        WHERE id = $7 RETURNING *`;
    const sqlParams = [
      employee.name,
      employee.gender,
      employee.departement,
      employee.about,
      req.params.id,
    ];
    const result = (await db.query(sqlText, sqlParams)).rows;
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//READ DATA
router.get('/', async (req, res, next) => {
  try {
    let sql = `SELECT * FROM employees`;
    let result = (await db.query(sql)).rows;
    res.send(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//DELETE DATA
router.delete('/:id', async (req, res, next) => {
  try {
    const sqlText = `DELETE FROM employees WHERE id = $1 RETURNING *`;
    const sqlParams = [req.params.id];
    const result = (await db.query(sqlText, sqlParams)).rows;
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//GET DATA FROM SPECIFIC ID
router.get('/:id', async (req, res, next) => {
  try {
    const sqlText = `SELECT * FROM employees WHERE id = $1`;
    const sqlParams = [req.params.id];
    const result = (await db.query(sqlText, sqlParams)).rows;
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
