const TeacherService = require('../services/TeacherService');

class TeacherController {
  
  async getAllTeachers(req, res) {
    try {
      const teachers = await TeacherService.getAllTeachers();
      res.json(teachers);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET ALL TEACHERS controller');
    }
  }

  async getTeacherById(req, res) {
      try {
        const id = req.params.id;
        const teachers = await TeacherService.getTeacherById(id);
        res.json(teachers);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error - controller');
      }
    }

  async createTeacher(req, res) {
    try {
      const result = await TeacherService.createTeacher(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async updateTeacher(req, res) {
    try {
      const result = await TeacherService.updateTeacher(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async deleteTeacher(req, res) {
    try{
      const id = req.params.id;
      const result = await TeacherService.deleteTeacher(id);
      res.json(result);
    }catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }
}

module.exports = new TeacherController();
