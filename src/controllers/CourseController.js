const CourseService = require('../services/CourseService');

class CourseController {
  
  async getAllCourses(req, res) {
      try {
          const course = await CourseService.getAllCourses();
          res.json(course);
      } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error - GET ALL COURSES controller');
      }
  }

  async getCourseById(req, res) {
      try {
        const id = req.params.id;
        const course = await CourseService.getCourseById(id);
        res.json(course);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error - controller');
      }
    }

  async createCourse(req, res) {
    try {
      const result = await CourseService.createCourse(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async updateCourse(req, res) {
    try {
      const result = await CourseService.updateCourse(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async deleteCourse(req, res) {
    try{
      const id = req.params.id;
      const result = await CourseService.deleteCourse(id);
      res.json(result);
    }catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }
}

module.exports = new CourseController();
