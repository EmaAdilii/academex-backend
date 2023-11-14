const CourseCrud = require('../cruds/courseCrud');

class CourseService {
  async getAllCourses() {
    return await CourseCrud.getAllCourses();
  }

  async getCourseById(id) {
    return await CourseCrud.getCourseById(id);
  }

  async createCourse(courseData) {
    return await CourseCrud.createCourse(courseData);
  }

  async updateCourse(updateCourseData) {
    return await CourseCrud.updateCourse(updateCourseData);
  }

  async deleteCourse(id) {
    return await CourseCrud.deleteCourse(id);
  }
}

module.exports = new CourseService();
