const express = require('express');

const {
  getDesignations,
  getDesignationById,
  createDesignation,
  updateDesignation,
  deleteDesignation
} = require('../controllers/designationController');

const router = express.Router();

router.get('/', getDesignations);
router.get('/:id', getDesignationById);
router.post('/', createDesignation);
router.put('/:id', updateDesignation);
router.delete('/:id', deleteDesignation);

module.exports = router;