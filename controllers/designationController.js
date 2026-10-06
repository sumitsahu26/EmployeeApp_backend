const Designation = require('../models/Designation');

// GET all designations
const getDesignations = async (req, res) => {
  try {
    const designations = await Designation.find();

    res.status(200).json(designations);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET single designation
const getDesignationById = async (req, res) => {
  try {
    const designation = await Designation.findById(req.params.id);

    if (!designation) {
      return res.status(404).json({
        message: 'Designation not found'
      });
    }

    res.status(200).json(designation);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// CREATE designation
const createDesignation = async (req, res) => {
  try {
    const designation = await Designation.create(req.body);

    res.status(201).json(designation);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE designation
const updateDesignation = async (req, res) => {
  try {
    const designation = await Designation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!designation) {
      return res.status(404).json({
        message: 'Designation not found'
      });
    }

    res.status(200).json(designation);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE designation
const deleteDesignation = async (req, res) => {
  try {
    const designation = await Designation.findByIdAndDelete(
      req.params.id
    );

    if (!designation) {
      return res.status(404).json({
        message: 'Designation not found'
      });
    }

    res.status(200).json({
      message: 'Designation deleted successfully',
      designation
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getDesignations,
  getDesignationById,
  createDesignation,
  updateDesignation,
  deleteDesignation
};