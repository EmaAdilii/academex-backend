const AboutUsService = require('../services/AboutUsService');

class AboutUsController {

  async getAllAboutUs(req, res) {
    try {
      const aboutUs = await AboutUsService.getAllAboutUs();
      res.json(aboutUs);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET ALL ABOUT US controller');
    }
  }

  async getAboutUsById(req, res) {
    try {
      const id = req.params.id;
      const aboutUs = await AboutUsService.getAboutUsById(id);
      res.json(aboutUs);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET ABOUT US BY ID controller');
    }
  }

  async createAboutUs(req, res) {
    try {
      const result = await AboutUsService.createAboutUs(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - CREATE ABOUT US controller');
    }
  }

  async updateAboutUs(req, res) {
    try {
      const result = await AboutUsService.updateAboutUs(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - UPDATE ABOUT US controller');
    }
  }

  async deleteAboutUs(req, res) {
    try {
      const id = req.params.id;
      const result = await AboutUsService.deleteAboutUs(id);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - DELETE ABOUT US controller');
    }
  }
}

module.exports = new AboutUsController();
