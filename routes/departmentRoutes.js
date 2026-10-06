const express = require('express');

const {
  getDepartments,
  createDepartment,
  getDepartmentByid,
  updateDepartment,
  deleteDepartment
} = require('../controllers/departmentController');

const router = express.Router();

router.get('/', getDepartments);
router.get('/:id', getDepartmentByid);
router.post('/', createDepartment);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);


module.exports = router;
