const TeacherCrud = require('../cruds/teacherCrud');

class TeacherService { 
    async getAllTeachers() {
        return await TeacherCrud.getAllTeachers();
    }

    async getTeacherById(id) {
      return await TeacherCrud.getTeacherById(id);
    }
  
    async createTeacher(teacherData) {
      return await TeacherCrud.createTeacher(teacherData);
    }

    async updateTeacher(updateTeacherData) {
      return await TeacherCrud.updateTeacher(updateTeacherData);
    }

    async deleteTeacher(id) {
      const result = await TeacherCrud.deleteTeacher(id);
      if(result.affectedRows === 0) {
        return 'Teacher not found';
      } else if(result.affectedRows === 1){
        return 'Teacher deleted successfully!';
      }
    }
}
  
module.exports = new TeacherService();
