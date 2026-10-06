const express = require('express');

const {
  getEmployeeSalarySettlements,
  getEmployeeSalarySettlementById,
  createEmployeeSalarySettlement,
  updateEmployeeSalarySettlement,
  deleteEmployeeSalarySettlement
} = require('../controllers/employeeSalarySettlementController');

const router = express.Router();

router.get('/', getEmployeeSalarySettlements);

router.get('/:id', getEmployeeSalarySettlementById);

router.post('/', createEmployeeSalarySettlement);

router.put('/:id', updateEmployeeSalarySettlement);

router.delete('/:id', deleteEmployeeSalarySettlement);

module.exports = router;