const express = require('express');

const {
  getSalaryLedgers,
  createSalaryLedgers
} = require('../controllers/salaryLedgerController');

const router = express.Router();

router.get('/', getSalaryLedgers);
router.post('/', createSalaryLedgers)

module.exports = router;