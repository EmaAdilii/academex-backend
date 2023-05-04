const CourseDao = require('../daos/CourseDao');

class CategoryService { 
    async getAllCourses() {
        return await CourseDao.getAllCourses();
    }

    async getCourseById(id) {
      return await CourseDao.getCourseById(id);
    }
  
    async createCourse(categoryData) {
      return await CourseDao.createCourse(categoryData);
    }

    async updateCourse(updateCategoryData) {
      return await CourseDao.updateCourse(updateCategoryData);
    }

    async deleteCourse(id) {
      const result = await CourseDao.deleteCourse(id);
      if(result.affectedRows === 0) {
        return 'Category not found';
      } else if(result.affectedRows === 1){
        return 'Category deleted successfully!';
      }
    }
}
  
module.exports = new CategoryService();
