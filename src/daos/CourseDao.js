const connection = require('../database/db-connection');

class CourseDao {
  constructor() {
    this.tableName = 'courses';
  }

  async getAllCourses() {
    const sql = `SELECT * FROM ${this.tableName}`;

    try {
      const [rows] = await connection.promise().query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCourseById(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createCourse(courseData) {
    const sql = `INSERT INTO ${this.tableName} (name, description, teacher_id, category_id) VALUES (?, ?, ?, ?)`;
    try {
      const [rows] = await connection.promise().query(sql, [courseData.name, courseData.description, courseData.teacher_id,
        courseData.category_id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateCourse(updateCourseData) {
    const sql = `UPDATE ${this.tableName} SET name = ?, description = ?, teacher_id = ?, category_id = ? WHERE ID = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [updateCourseData.name, updateCourseData.description, updateCourseData.teacher_id,
        updateCourseData.category_id, updateCourseData.courseId]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteCourse(id) {
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

module.exports = new CourseDao();