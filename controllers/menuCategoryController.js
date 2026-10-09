const MenuCategory = require('../models/MenuCategory');

// GET ALL MENU CATEGORIES

const getMenuCategories = async (req, res) => {
  try {
    const categories = await MenuCategory.find()
      .sort({ sortOrder: 1 });

    res.status(200).json(categories);

  } catch (error) {

    console.error('Get menu categories error:', error.message);

    res.status(500).json({
      message: error.message
    });

  }
};


// GET SINGLE MENU CATEGORY

const getMenuCategoryById = async (req, res) => {
  try {

    const category = await MenuCategory.findById(
      req.params.id
    );

    if (!category) {

      return res.status(404).json({
        message: 'Menu category not found'
      });

    }

    res.status(200).json(category);

  } catch (error) {

    console.error(
      'Get menu category error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// CREATE MENU CATEGORY

const createMenuCategory = async (req, res) => {
  try {
    const category = await MenuCategory.create(
      req.body
    );

    res.status(201).json(category);

  } catch (error) {

    console.error(
      'Create menu category error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// UPDATE MENU CATEGORY

const updateMenuCategory = async (req, res) => {
  try {

    const category =
      await MenuCategory.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    if (!category) {

      return res.status(404).json({
        message: 'Menu category not found'
      });

    }

    res.status(200).json(category);

  } catch (error) {

    console.error(
      'Update menu category error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// DELETE MENU CATEGORY

const deleteMenuCategory = async (req, res) => {
  try {

    const category =
      await MenuCategory.findByIdAndDelete(
        req.params.id
      );

    if (!category) {

      return res.status(404).json({
        message: 'Menu category not found'
      });

    }

    res.status(200).json({
      message: 'Menu category deleted successfully',
      category
    });

  } catch (error) {

    console.error(
      'Delete menu category error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getMenuCategories,
  getMenuCategoryById,
  createMenuCategory,
  updateMenuCategory,
  deleteMenuCategory
};