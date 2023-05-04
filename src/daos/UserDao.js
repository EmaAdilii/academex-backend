const connection = require('../database/db-connection');

class UserDao {
  constructor() {
    this.tableName = 'users';
  }

  async getAllUsers() {
    const sql = `SELECT * FROM ${this.tableName}`;

    try {
      const [rows] = await connection.promise().query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getUserById(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createUser(userData) {
    const sql = `INSERT INTO ${this.tableName} (username, password) VALUES (?, ?)`;
    try {
      const [rows] = await connection.promise().query(sql, [userData.username, userData.password]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateUser(updateUserData) {
    const sql = `UPDATE ${this.tableName} SET username = ?, password = ? WHERE ID = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [updateUserData.username, updateUserData.password, updateUserData.userId]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteUser(id) {
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

module.exports = new UserDao();