// routes/categoryRoutes.js
const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.get('/get-by-id/:id', categoryController.getCategoryById);
router.post('/create-Category', categoryController.addCategory);
router.put('/update-Category',categoryController.updateCategory);
router.delete('/delete-Category',categoryController.deleteCategory);
// Add other routes for categories...

module.exports = router;