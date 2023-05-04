const connection = require('../database/db-connection');

class CategoryDao {
  constructor() {
    this.tableName = 'categories';
  }

  async getAllCategories() {
    const sql = `SELECT * FROM ${this.tableName}`;

    try {
      const [rows] = await connection.promise().query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCategoryById(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createCategory(categoryData) {
    const sql = `INSERT INTO ${this.tableName} (name, description) VALUES (?, ?)`;
    try {
      const [rows] = await connection.promise().query(sql, [categoryData.name, categoryData.description]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateCategory(updateCategoryData) {
    const sql = `UPDATE ${this.tableName} SET name = ?, description = ? WHERE ID = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [updateCategoryData.name, updateCategoryData.description, updateCategoryData.categoryId]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteCategory(id) {
    const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
    try{
      const[rows] = await connection.promise().query(sql, [id]);
      console.log(rows);
      return rows;
    }catch (error) {
      console.log(error);
      throw error;
    }
  }

}

module.exports = new CategoryDao();