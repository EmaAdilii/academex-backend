const CategoryDao = require('../daos/CategoryDao');

class CategoryService { 
    async getAllCategories() {
        return await CategoryDao.getAllCategories();
    }

    async getCategoryById(id) {
      return await CategoryDao.getCategoryById(id);
    }
  
    async createCategory(categoryData) {
      return await CategoryDao.createCategory(categoryData);
    }

    async updateCategory(updateCategoryData) {
      return await CategoryDao.updateCategory(updateCategoryData);
    }

    async deleteCategory(id) {
      const result = await CategoryDao.deleteCategory(id);
      if(result.affectedRows === 0) {
        return 'Category not found';
      } else if(result.affectedRows === 1){
        return 'Category deleted successfully!';
      }
    }
}
  
module.exports = new CategoryService();
