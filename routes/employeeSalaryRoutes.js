const express = require('express');

const {
  getEmployeeSalaries,
  getEmployeeSalaryById,
  createEmployeeSalary,
  updateEmployeeSalary,
  deleteEmployeeSalary
} = require('../controllers/employeeSalaryController');

const router = express.Router();

router.get('/', getEmployeeSalaries);

router.get('/:id', getEmployeeSalaryById);

router.post('/', createEmployeeSalary);

router.put('/:id', updateEmployeeSalary);

router.delete('/:id', deleteEmployeeSalary);

module.exports = router;