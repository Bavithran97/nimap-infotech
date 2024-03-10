// models/productModel.js
const db = require('../config/db');

class Product {
  static async getAllProducts() {
    const result = await db.query('SELECT * FROM products');
    return result.rows;
  }

  // Add other CRUD methods for products...
}

module.exports = Product;