const express = require('express');

const {
  getMenuCategories,
  getMenuCategoryById,
  createMenuCategory,
  updateMenuCategory,
  deleteMenuCategory
} = require('../controllers/menuCategoryController');

const router = express.Router();

router.get('/', getMenuCategories);
router.get('/:id', getMenuCategoryById);
router.post('/', createMenuCategory);
router.put('/:id', updateMenuCategory);
router.delete('/:id', deleteMenuCategory);


module.exports = router;
