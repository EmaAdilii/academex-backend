const StudentCrud = require('../cruds/studentCrud');

class StudentService { 
    async getAllStudents() {
        return await StudentCrud.getAllStudents();
    }

    async getStudentById(id) {
      return await StudentCrud.getStudentById(id);
    }
  
    async createStudent(studentData) {
      return await StudentCrud.createStudent(studentData);
    }

    async updateStudent(updateStudentData) {
      return await StudentCrud.updateStudent(updateStudentData);
    }

    async deleteStudent(id) {
      const result = await StudentCrud.deleteStudent(id);
      if(result.affectedRows === 0) {
        return 'Student not found';
      } else if(result.affectedRows === 1){
        return 'Student deleted successfully!';
      }
    }
}
  
module.exports = new StudentService();
