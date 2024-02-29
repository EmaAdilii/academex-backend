const ContactService = require('../services/ContactService');

class ContactController {
  async getAllContacts(req, res) {
    try {
      const contacts = await ContactService.getAllContacts();
      res.json(contacts);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET ALL CONTACTS controller');
    }
  }

  async getContactById(req, res) {
    try {
      const id = req.params.id;
      const contact = await ContactService.getContactById(id);
      res.json(contact);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET CONTACT BY ID controller');
    }
  }

  async createContact(req, res) {
    try {
      const result = await ContactService.createContact(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - CREATE CONTACT controller');
    }
  }

  async updateContact(req, res) {
    try {
      const result = await ContactService.updateContact(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - UPDATE CONTACT controller');
    }
  }

  async deleteContact(req, res) {
    try {
      const id = req.params.id;
      const result = await ContactService.deleteContact(id);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - DELETE CONTACT controller');
    }
  }
}

module.exports = new ContactController();
