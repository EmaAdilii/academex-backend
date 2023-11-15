const Teacher = require('../models/teacherModel');

class TeacherService { 
  async getAllTeachers() {
    return await Teacher.findAll();
  }

  async getTeacherById(id) {
    return await Teacher.findByPk(id);
  }

  async createTeacher(teacherData) {
    try {
      const newTeacher = await Teacher.create(teacherData);
      return newTeacher;
    } catch (error) {
      console.error('Error creating teacher:', error);
      throw error;
    }
  }

  async updateTeacher(updateTeacherData) {
    try {
      const teacher = await Teacher.findByPk(updateTeacherData.id);
      if (!teacher) {
        return 'Teacher not found';
      }
  
      await teacher.update(updateTeacherData);
  
      return teacher;
    } catch (error) {
      console.error('Error updating teacher:', error);
      throw error;
    }
  }
  
  async deleteTeacher(id) {
    try {
      const teacher = await Teacher.findByPk(id);
      if (!teacher) {
        return 'Teacher not found';
      }

      await teacher.destroy();
      return 'Teacher deleted successfully!';
    } catch (error) {
      console.error('Error deleting teacher:', error);
      throw error;
    }
  }
}
  
module.exports = new TeacherService();
