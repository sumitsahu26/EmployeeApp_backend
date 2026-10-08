const express = require('express');

const {
  getMenuItems,
  getMenuItemsByCategory,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} = require('../controllers/menuItemsController');

const router = express.Router();

router.get('/', getMenuItems);
router.get('/:id', getMenuItemsByCategory);
router.get('/:id', getMenuItemById);
router.post('/', createMenuItem);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);


module.exports = router;
