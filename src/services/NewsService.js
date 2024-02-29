const News = require('../models/newsModel');

class NewsService {
  async getAllNews() {
    return await News.findAll();
  }

  async getNewsById(id) {
    return await News.findByPk(id);
  }

  async createNews(newsData) {
    try {
      const newNews = await News.create(newsData);
      return newNews;
    } catch (error) {
      console.error('Error creating news:', error);
      throw error;
    }
  }

  async updateNews(updateNewsData) {
    try {
      const news = await News.findByPk(updateNewsData.id);
      if (!news) {
        return 'News not found';
      }

      await news.update(updateNewsData);

      return news;
    } catch (error) {
      console.error('Error updating news:', error);
      throw error;
    }
  }

  async deleteNews(id) {
    try {
      const news = await News.findByPk(id);
      if (!news) {
        return 'News not found';
      }

      await news.destroy();
      return 'News deleted successfully!';
    } catch (error) {
      console.error('Error deleting news:', error);
      throw error;
    }
  }
}

module.exports = new NewsService();
