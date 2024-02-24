const Category = require('../models/categoryModel');

class CategoryService { 
  async getAllCategories() {
    return await Category.findAll();
  }

  async getCategoryById(id) {
    return await Category.findByPk(id);
  }

  async createCategory(categoryData, userRole) {
    try {
        if (userRole !== 'admin') {
            throw new Error('User does not have admin privileges to create a category.');
        }

        const newCategory = await Category.create(categoryData);
        return newCategory;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
}

  async updateCategory(updateCategoryData) {
    try {
      const category = await Category.findByPk(updateCategoryData.id);
      if (!category) {
        return 'Category not found';
      }

      await category.update(updateCategoryData);

      return category;
    } catch (error) {
      console.error('Error updating category:', error);
      throw error;
    }
  }

  async deleteCategory(id) {
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return 'Category not found';
      }

      await category.destroy();
      return 'Category deleted successfully!';
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  }
}
  
module.exports = new CategoryService();
