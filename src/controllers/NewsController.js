const NewsService = require('../services/NewsService');

class NewsController {
  
  async getAllNews(req, res) {
      try {
          const news = await NewsService.getAllNews();
          res.json(news);
      } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error - GET ALL NEWS controller');
      }
  }

  async getNewsById(req, res) {
      try {
        const id = req.params.id;
        const news = await NewsService.getNewsById(id);
        res.json(news);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error - GET NEWS BY ID controller');
      }
    }

  async createNews(req, res) {
    try {
      const result = await NewsService.createNews(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - CREATE NEWS controller');
    }
  }

  async updateNews(req, res) {
    try {
      const result = await NewsService.updateNews(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - UPDATE NEWS controller');
    }
  }

  async deleteNews(req, res) {
    try{
      const id = req.params.id;
      const result = await NewsService.deleteNews(id);
      res.json(result);
    }catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - DELETE NEWS controller');
    }
  }
}

module.exports = new NewsController();
