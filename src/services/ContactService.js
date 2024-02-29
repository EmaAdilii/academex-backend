const Contact = require('../models/ContactModel');

class ContactService {
    async getAllContacts() {
        return await Contact.findAll();
      }
    
  async getContactById(id) {
    try {
      return await Contact.findByPk(id);
    } catch (error) {
      console.error('Error getting contact by id:', error);
      throw error;
    }
  }

  async createContact(contactData) {
    try {
      const newContact = await Contact.create(contactData);
      return newContact;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  }

  async updateContact(updateContactData) {
    try {
      const { contactId, ...updateData } = updateContactData;
      const [updatedRowsCount] = await Contact.update(updateData, {
        where: { id: contactId },
      });
      if (updatedRowsCount === 0) {
        throw new Error('Contact not found');
      }
      const updatedContact = await Contact.findByPk(contactId);
      return updatedContact;
    } catch (error) {
      console.error('Error updating contact:', error);
      throw error;
    }
  }

  async deleteContact(id) {
    try {
      const deletedRowCount = await Contact.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        throw new Error('Contact not found');
      }
      return 'Contact deleted successfully!';
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  }
}

module.exports = new ContactService();