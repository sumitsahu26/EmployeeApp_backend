const Department = require('../models/Department');

// GET all departments
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET single department
const getDepartmentByid = async (req, res) => {
  try {
    const department = await Department.findByid(req.params.id);

    if (!department) {
      return res.status(404).json({
        message: 'Department not found'
      });
    }

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// CREATE department
const createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);

    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE department
const updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!department) {
      return res.status(404).json({
        message: 'Department not found'
      });
    }

    res.status(200).json(department);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE department
const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(
      req.params.id
    );

    if (!department) {
      return res.status(404).json({
        message: 'Department not found'
      });
    }

    res.status(200).json({
      message: 'Department deleted successfully',
      department
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getDepartments,
  getDepartmentByid,
  createDepartment,
  updateDepartment,
  deleteDepartment
};