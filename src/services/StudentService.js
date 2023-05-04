const StudentDao = require('../daos/StudentDao');

class StudentService { 
    async getAllStudents() {
        return await StudentDao.getAllStudents();
    }

    async getStudentById(id) {
      return await StudentDao.getStudentById(id);
    }
  
    async createStudent(studentData) {
      return await StudentDao.createStudent(studentData);
    }

    async updateStudent(updateStudentData) {
      return await StudentDao.updateStudent(updateStudentData);
    }

    async deleteStudent(id) {
      const result = await StudentDao.deleteStudent(id);
      if(result.affectedRows === 0) {
        return 'Student not found';
      } else if(result.affectedRows === 1){
        return 'Student deleted successfully!';
      }
    }
}
  
module.exports = new StudentService();
