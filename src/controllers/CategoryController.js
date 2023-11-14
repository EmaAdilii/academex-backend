const CategoryService = require('../services/CategoryService');

class CategoryController {
  
  async getAllCategories(req, res) {
      try {
          const category = await CategoryService.getAllCategories();
          res.json(category);
      } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error - controller');
      }
  }

  async getCategoryById(req, res) {
      try {
        const id = req.params.id;
        const category = await CategoryService.getCategoryById(id);
        res.json(category);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error - controller');
      }
    }

  async createCategory(req, res) {
    try {
      const result = await CategoryService.createCategory(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async updateCategory(req, res) {
    try {
      const result = await CategoryService.updateCategory(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async deleteCategory(req, res) {
    try{
      const id = req.params.id;
      const result = await CategoryService.deleteCategory(id);
      res.json(result);
    }catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }
}

module.exports = new CategoryController();
