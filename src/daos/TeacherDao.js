const connection = require('../database/db-connection');

class TeacherDao {
  constructor() {
    this.tableName = 'teachers';
  }

  async getAllTeachers() {
    const sql = `SELECT * FROM ${this.tableName}`;

    try {
      const [rows] = await connection.promise().query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getTeacherById(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createTeacher(teacherData) {
    const sql = `INSERT INTO ${this.tableName} (name, surname, email, username, password, birthday, city, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    try {
      const [rows] = await connection.promise().query(sql, [teacherData.name, teacherData.surname, teacherData.email, teacherData.username,
        teacherData.password, teacherData.birthday, teacherData.city, teacherData.address]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateTeacher(updateTeacherData) {
    const sql = `UPDATE ${this.tableName} SET name = ?, surname = ?, email = ?, username = ?, password = ?, birthday = ?, 
    city = ?, address = ? WHERE ID = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [updateTeacherData.name, updateTeacherData.surname,
        updateTeacherData.email, updateTeacherData.username, updateTeacherData.password, updateTeacherData.birthday, updateTeacherData.city,
        updateTeacherData.address, updateTeacherData.teacherId]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteTeacher(id) {
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

module.exports = new TeacherDao();