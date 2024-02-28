const Course = require('../models/courseModel');
const Category = require('../models/categoryModel');

class CourseService {
  async getAllCourses() {
    return await Course.findAll({
      include: [{ model: Category, as: 'category' }],
    });
  }

  async getCourseById(id) {
    return await Course.findByPk(id, {
      include: [{ model: Category, as: 'category' }],
    });
  }

  async createCourse(courseData) {
    try {
      const newCourse = await Course.create(courseData);
      return newCourse;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  }

  async updateCourse(updateCourseData) {
    try {
      const course = await Course.findByPk(updateCourseData.id);
      if (!course) {
        return 'Course not found';
      }

      await course.update(updateCourseData);

      return course;
    } catch (error) {
      console.error('Error updating course:', error);
      throw error;
    }
  }

  async deleteCourse(id) {
    try {
      const course = await Course.findByPk(id);
      if (!course) {
        return 'Course not found';
      }

      await course.destroy();
      return 'Course deleted successfully!';
    } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
    }
  }
}

module.exports = new CourseService();
