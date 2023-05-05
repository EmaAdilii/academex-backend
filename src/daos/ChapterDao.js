const connection = require('../database/db-connection');

class ChapterDao {
  constructor() {
    this.tableName = 'chapters';
  }

  async getAllChapters() {
    const sql = `SELECT * FROM ${this.tableName}`;
    try {
      const [rows] = await connection.promise().query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getChapterById(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createChapter(chapterData) {
    const sql = `INSERT INTO ${this.tableName} (name, course_id) VALUES (?, ?)`;
    try {
      const [rows] = await connection.promise().query(sql, [chapterData.name, chapterData.course_id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateChapter(updateChapterData) {
    const sql = `UPDATE ${this.tableName} SET name = ?, course_id = ?,  WHERE ID = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [updateChapterData.name, 
        updateChapterData.course_id, updateChapterData.id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteChapter(id) {
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

module.exports = new ChapterDao();