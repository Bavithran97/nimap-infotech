const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getCategoryById = async (req, res) => {
    console.log(req.params)
    const { id } = req.params;
    console.log(id)
    try {
      const category = await Category.getCategoryById(id);
      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.addCategory(name);
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const updateCategory = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name)
  try {
    const updatedCategory = await Category.updateCategory(id, name);
    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.deleteCategory(id);
    res.json(deletedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryById
};