const EmployeeSalarySettlement = require('../models/EmployeeSalarySettlement');
const SalaryLedger = require('../models/SalaryLedger');

// GET all advances
const getEmployeeSalarySettlements = async (req, res) => {
  try {
    const settlements =
      await EmployeeSalarySettlement.find();

    res.status(200).json(settlements);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET single advance
const getEmployeeSalarySettlementById = async (req, res) => {
  try {
    const settlement =
      await EmployeeSalarySettlement.findById(
        req.params.id
      );

    if (!settlement) {
      return res.status(404).json({
        message: 'Salary settlement not found'
      });
    }

    res.status(200).json(settlement);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// CREATE advance
const createEmployeeSalarySettlement = async (req, res) => {
    try {
      const settlement =
        await EmployeeSalarySettlement.create(req.body);
  
      const ledger = {
        employeeid: settlement.employeeid,
        referenceid: settlement._id.toString(),
        date: settlement.date,
        transactionType: 'ADVANCE',
        debit: settlement.payment,
        credit: 0,
        description: 'Salary Advance',
        status: 'Active'
      };
  
      const createdLedger =
        await SalaryLedger.create(ledger);
  
      res.status(201).json({
        settlement,
        ledger: createdLedger
      });
  
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        message: error.message
      });
    }
  };

// UPDATE advance
const updateEmployeeSalarySettlement = async (req, res) => {
    try {
      const settlement =
        await EmployeeSalarySettlement.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true
          }
        );
  
      if (!settlement) {
        return res.status(404).json({
          message: 'Salary settlement not found'
        });
      }
  
      const oldLedger = await SalaryLedger.findOne({
        referenceid: settlement._id.toString(),
        status: 'Active'
      });
  
      if (oldLedger) {
        oldLedger.status = 'Inactive';
        await oldLedger.save();
      }
  
      const newLedger = await SalaryLedger.create({
        employeeid: settlement.employeeid,
        referenceid: settlement._id.toString(),
        date: settlement.date,
        transactionType: 'ADVANCE',
        debit: settlement.payment,
        credit: 0,
        description: 'Salary Advance',
        status: 'Active'
      });
  
      res.status(200).json({
        settlement,
        ledger: newLedger
      });
  
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        message: error.message
      });
    }
  };

// DELETE advance
const deleteEmployeeSalarySettlement = async (req, res) => {
  try {
    const settlement =
      await EmployeeSalarySettlement.findByIdAndDelete(
        req.params.id
      );

      if (!settlement) {
        return res.status(404).json({
          message: 'Salary settlement not found'
        });
      }

      const oldLedger = await SalaryLedger.findOne({
        referenceid: settlement._id.toString(),
        status: 'Active'
      });

      if (oldLedger) {
        oldLedger.status = 'Inactive';
        await oldLedger.save();
      }

    res.status(200).json({
      message: 'Salary settlement deleted successfully',
      settlement
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getEmployeeSalarySettlements,
  getEmployeeSalarySettlementById,
  createEmployeeSalarySettlement,
  updateEmployeeSalarySettlement,
  deleteEmployeeSalarySettlement
};