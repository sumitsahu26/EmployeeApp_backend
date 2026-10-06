const EmployeeSalary = require('../models/EmployeeSalary');
const SalaryLedger = require('../models/SalaryLedger');

// GET all employee salaries
const getEmployeeSalaries = async (req, res) => {
  try {
    const salaries = await EmployeeSalary.find();

    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET single employee salary
const getEmployeeSalaryById = async (req, res) => {
  try {
    const salary = await EmployeeSalary.findById(
      req.params.id
    );

    if (!salary) {
      return res.status(404).json({
        message: 'Employee salary not found'
      });
    }

    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// CREATE employee salary
const createEmployeeSalary = async (req, res) => {
  try {
    const salary = await EmployeeSalary.create(req.body);

    res.status(201).json(salary);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE employee salary
const updateEmployeeSalary = async (req, res) => {
  try {
    const salary =
      await EmployeeSalary.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    if (!salary) {
      return res.status(404).json({
        message: 'Employee salary not found'
      });
    }

    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE employee salary
const deleteEmployeeSalary = async (req, res) => {
  try {
    const salary =
      await EmployeeSalary.findByIdAndDelete(
        req.params.id
      );

    if (!salary) {
      return res.status(404).json({
        message: 'Employee salary not found'
      });
    }

    res.status(200).json({
      message: 'Employee salary deleted successfully',
      salary
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getEmployeeSalaries,
  getEmployeeSalaryById,
  createEmployeeSalary,
  updateEmployeeSalary,
  deleteEmployeeSalary
};