const AboutUsService = require('../services/AboutUsService');

class AboutUsController {

  async getAllAboutUsEntries(req, res) {
    try {
      const aboutUsEntries = await AboutUsService.getAllAboutUsEntries();
      res.json(aboutUsEntries);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET ALL ABOUT US ENTRIES controller');
    }
  }

  async getAboutUsEntryById(req, res) {
    try {
      const id = req.params.id;
      const aboutUsEntry = await AboutUsService.getAboutUsEntryById(id);
      res.json(aboutUsEntry);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET ABOUT US ENTRY BY ID controller');
    }
  }

  async createAboutUsEntry(req, res) {
    try {
      const result = await AboutUsService.createAboutUsEntry(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - CREATE ABOUT US ENTRY controller');
    }
  }

  async updateAboutUsEntry(req, res) {
    try {
      const result = await AboutUsService.updateAboutUsEntry(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - UPDATE ABOUT US ENTRY controller');
    }
  }

  async deleteAboutUsEntry(req, res) {
    try {
      const id = req.params.id;
      const result = await AboutUsService.deleteAboutUsEntry(id);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - DELETE ABOUT US ENTRY controller');
    }
  }
}

module.exports = new AboutUsController();
