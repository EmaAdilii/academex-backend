const CategoryCrud = require('../cruds/categoryCrud');

class CategoryService { 
    async getAllCategories() {
        return await CategoryCrud.getAllCategories();
    }

    async getCategoryById(id) {
      return await CategoryCrud.getCategoryById(id);
    }
  
    async createCategory(categoryData) {
      return await CategoryCrud.createCategory(categoryData);
    }

    async updateCategory(updateCategoryData) {
      return await CategoryCrud.updateCategory(updateCategoryData);
    }

    async deleteCategory(id) {
      const result = await CategoryCrud.deleteCategory(id);
      if(result.affectedRows === 0) {
        return 'Category not found';
      } else if(result.affectedRows === 1){
        return 'Category deleted successfully!';
      }
    }
}
  
module.exports = new CategoryService();
