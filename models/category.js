// models/Category.js
// models/categoryModel.js

const db = require('../config/db');

class Category {

static async getCategoryById(id) {
        const result = await db.query('SELECT * FROM categories WHERE id = $1::uuid', [id]);
        return result.rows[0];
    }
    

  static async getAllCategories() {
    const result = await db.query('SELECT * FROM categories');
    return result.rows;
  }

  static async addCategory(name) {
    const result = await db.query('INSERT INTO categories(id, name) VALUES(uuid_generate_v4(), $1) RETURNING *', [name]);
    return result.rows[0];
  }

  
  static async updateCategory(id, name) {
    try {
        const result = await db.query('UPDATE categories SET name = $2 WHERE id = $1 RETURNING *', [id, name]);
        console.log(result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
}



  static async deleteCategory(id) {
    const result = await db.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Category;
