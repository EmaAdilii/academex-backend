const Student = require('../models/studentModel');

class StudentService { 
  async getAllStudents() {
    return await Student.findAll();
  }

  async getStudentById(id) {
    return await Student.findByPk(id);
  }

  async createStudent(studentData) {
    try {
      const newStudent = await Student.create(studentData);
      return newStudent;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  }

  async updateStudent(updateStudentData) {
    try {
      const student = await Student.findByPk(updateStudentData.id);
      if (!student) {
        return 'Student not found';
      }
  
      await student.update(updateStudentData);
  
      return student;
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
  }
  
  async deleteStudent(id) {
    try {
      const student = await Student.findByPk(id);
      if (!student) {
        return 'Student not found';
      }

      await student.destroy();
      return 'Student deleted successfully!';
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
    }
  }
}
  
module.exports = new StudentService();
