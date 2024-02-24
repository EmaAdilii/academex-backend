const CourseService = require('../services/CourseService');
const UserService = require('../services/UserService');
const CategoryService = require('../services/CategoryService');
const NewsService = require('../services/NewsService');

class Service {
  async getAllData() {
    const courses = await CourseService.getAllCourses();
    const users = await UserService.getAllUsers();
    const teachers = await TeacherService.getAllTeachers();
    const categories = await CategoryService.getAllCategories();
    const news = await NewsService.getAllNews();

    return {
      courses,
      users,
      teachers,
      categories,
      news,
      // Add other data as needed
    };
  }
}

module.exports = new Service();
