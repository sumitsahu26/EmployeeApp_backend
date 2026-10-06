const Department = require('../models/Department');
const SalaryLedger = require('../models/SalaryLedger');

// GET all Ledgers
const getSalaryLedgers = async (req, res) => {
  try {
    const filter = {};

    if (req.query.employeeid) {
      filter.employeeid = req.query.employeeid;
    }

    const ledgers = await SalaryLedger.find(filter);

    res.status(200).json(ledgers);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createSalaryLedgers = async (req, res) => {
  try {

    const ledgers = await SalaryLedger.create(req.body);

    res.status(200).json(ledgers);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getSalaryLedgers,
  createSalaryLedgers
};