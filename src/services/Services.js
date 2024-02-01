const CourseService = require('../services/CourseService');
const StudentService = require('../services/StudentService');
const TeacherService = require('../services/TeacherService');
const CategoryService = require('../services/CategoryService');
const NewsService = require('../services/NewsService');

class Service {
  async getAllData() {
    const courses = await CourseService.getAllCourses();
    const students = await StudentService.getAllStudents();
    const teachers = await TeacherService.getAllTeachers();
    const categories = await CategoryService.getAllCategories();
    const news = await NewsService.getAllNews();

    return {
      courses,
      students,
      teachers,
      categories,
      news,
      // Add other data as needed
    };
  }
}

module.exports = new Service();
