const connection = require('../database/db-connection');

class StudentDao {
  constructor() {
    this.tableName = 'students';
  }

  async getAllStudents() {
    const sql = `SELECT * FROM ${this.tableName}`;

    try {
      const [rows] = await connection.promise().query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getStudentById(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createStudent(studentData) {
    const sql = `INSERT INTO ${this.tableName} (name, surname, email, username, password, birthday, city, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    try {
      const [rows] = await connection.promise().query(sql, [studentData.name, studentData.surname, studentData.email, studentData.username,
        studentData.password, studentData.birthday, studentData.city, studentData.address]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateStudent(updateStudentData) {
    const sql = `UPDATE ${this.tableName} SET name = ?, surname = ?, email = ?, username = ?, password = ?, birthday = ?, 
    city = ?, address = ? WHERE ID = ?`;
    try {
      const [rows] = await connection.promise().query(sql, [updateStudentData.name, updateStudentData.surname,
        updateStudentData.email, updateStudentData.username, updateStudentData.password, updateStudentData.birthday, updateStudentData.city,
        updateStudentData.address, updateStudentData.studentId]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteStudent(id) {
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

module.exports = new StudentDao();