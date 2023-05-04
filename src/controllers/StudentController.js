const StudentService = require('../services/StudentService');

class StudentController {
  
  async getAllStudents(req, res) {
      try {
          const users = await StudentService.getAllStudents();
          res.json(users);
      } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error - controller');
      }
  }

  async getStudentById(req, res) {
      try {
        const id = req.params.id;
        const user = await StudentService.getStudentById(id);
        res.json(user);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error - controller');
      }
    }

  async createStudent(req, res) {
    try {
      const result = await StudentService.createStudent(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async updateStudent(req, res) {
    try {
      const result = await StudentService.updateStudent(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async deleteStudent(req, res) {
    try{
      const id = req.params.id;
      const result = await StudentService.deleteStudent(id);
      res.json(result);
    }catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }
}

module.exports = new StudentController();
