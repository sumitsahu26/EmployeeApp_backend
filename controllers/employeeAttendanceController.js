const EmployeeAttendance = require('../models/EmployeeAttendance');

// GET all attendance
const getEmployeeAttendances = async (req, res) => {
  try {
    const attendance = await EmployeeAttendance.find();

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET attendance by ID
const getEmployeeAttendanceById = async (req, res) => {
  try {
    const attendance = await EmployeeAttendance.findById(
      req.params.id
    );

    if (!attendance) {
      return res.status(404).json({
        message: 'Attendance not found'
      });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// CREATE attendance
const createEmployeeAttendance = async (req, res) => {
  try {
    const attendance = await EmployeeAttendance.create(req.body);

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE attendance
const updateEmployeeAttendance = async (req, res) => {
  try {
    const attendance =
      await EmployeeAttendance.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    if (!attendance) {
      return res.status(404).json({
        message: 'Attendance not found'
      });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE attendance
const deleteEmployeeAttendance = async (req, res) => {
  try {
    const attendance =
      await EmployeeAttendance.findByIdAndDelete(
        req.params.id
      );

    if (!attendance) {
      return res.status(404).json({
        message: 'Attendance not found'
      });
    }

    res.status(200).json({
      message: 'Attendance deleted successfully',
      attendance
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getEmployeeAttendances,
  getEmployeeAttendanceById,
  createEmployeeAttendance,
  updateEmployeeAttendance,
  deleteEmployeeAttendance
};