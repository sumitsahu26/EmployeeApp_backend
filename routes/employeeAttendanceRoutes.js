const express = require('express');

const {
  getEmployeeAttendances,
  getEmployeeAttendanceById,
  createEmployeeAttendance,
  updateEmployeeAttendance,
  deleteEmployeeAttendance
} = require('../controllers/employeeAttendanceController');

const router = express.Router();

router.get('/', getEmployeeAttendances);

router.get('/:id', getEmployeeAttendanceById);

router.post('/', createEmployeeAttendance);

router.put('/:id', updateEmployeeAttendance);

router.delete('/:id', deleteEmployeeAttendance);

module.exports = router;