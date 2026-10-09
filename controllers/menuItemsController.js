const MenuItem = require('../models/MenuItems');

// GET ALL MENU ITEMS

const getMenuItems = async (req, res) => {
  try {

    const items = await MenuItem.find()
      .sort({ sortOrder: 1 });

    res.status(200).json(items);

  } catch (error) {

    console.error(
      'Get menu items error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// GET MENU ITEMS BY CATEGORY

const getMenuItemsByCategory = async (req, res) => {
  try {

    const items = await MenuItem.find({
      categoryId: req.params.categoryId
    }).sort({
      sortOrder: 1
    });

    res.status(200).json(items);

  } catch (error) {

    console.error(
      'Get category menu items error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// GET SINGLE MENU ITEM

const getMenuItemById = async (req, res) => {
  try {

    const item = await MenuItem.findById(
      req.params.id
    );

    if (!item) {

      return res.status(404).json({
        message: 'Menu item not found'
      });

    }

    res.status(200).json(item);

  } catch (error) {

    console.log(
      'Get menu item error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// CREATE MENU ITEM

const createMenuItem = async (req, res) => {
  try {

    const item = await MenuItem.create(
      req.body
    );

    res.status(201).json(item);

  } catch (error) {

    console.error(
      'Create menu item error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// UPDATE MENU ITEM

const updateMenuItem = async (req, res) => {
  try {
    const item =
      await MenuItem.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    if (!item) {

      return res.status(404).json({
        message: 'Menu item not found'
      });

    }

    res.status(200).json(item);

  } catch (error) {

    console.error(
      'Update menu item error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// DELETE MENU ITEM

const deleteMenuItem = async (req, res) => {
  try {

    const item =
      await MenuItem.findByIdAndDelete(
        req.params.id
      );

    if (!item) {

      return res.status(404).json({
        message: 'Menu item not found'
      });

    }

    res.status(200).json({
      message: 'Menu item deleted successfully',
      item
    });

  } catch (error) {

    console.error(
      'Delete menu item error:',
      error.message
    );

    res.status(500).json({
      message: error.message
    });

  }
};


// EXPORT

module.exports = {
  getMenuItems,
  getMenuItemsByCategory,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
};