const TeacherDao = require('../daos/TeacherDao');

class TeacherService { 
    async getAllTeachers() {
        return await TeacherDao.getAllTeachers();
    }

    async getTeacherById(id) {
      return await TeacherDao.getTeacherById(id);
    }
  
    async createTeacher(teacherData) {
      return await TeacherDao.createTeacher(teacherData);
    }

    async updateTeacher(updateTeacherData) {
      return await TeacherDao.updateTeacher(updateTeacherData);
    }

    async deleteTeacher(id) {
      const result = await TeacherDao.deleteTeacher(id);
      if(result.affectedRows === 0) {
        return 'Teacher not found';
      } else if(result.affectedRows === 1){
        return 'Teacher deleted successfully!';
      }
    }
}
  
module.exports = new TeacherService();
