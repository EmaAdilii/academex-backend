const AboutUs = require('../models/aboutUsModel');

class AboutUsService {
  async getAllAboutUs() {
    return await AboutUs.findAll();
  }

  async getAboutUsById(id) {
    return await AboutUs.findByPk(id);
  }

  async createAboutUs(aboutUsData) {
    try {
      const newAboutUs = await AboutUs.create(aboutUsData);
      return newAboutUs;
    } catch (error) {
      console.error('Error creating AboutUs:', error);
      throw error;
    }
  }

  async updateAboutUs(updateAboutUsData) {
    try {
      const aboutUs = await AboutUs.findByPk(updateAboutUsData.aboutUsId);
      if (!aboutUs) {
        return 'AboutUs not found';
      }

      await aboutUs.update(updateAboutUsData);

      return aboutUs;
    } catch (error) {
      console.error('Error updating AboutUs:', error);
      throw error;
    }
  }

  async deleteAboutUs(id) {
    try {
      const aboutUs = await AboutUs.findByPk(id);
      if (!aboutUs) {
        return 'AboutUs  not found';
      }

      await aboutUs.destroy();
      return 'AboutUs deleted successfully!';
    } catch (error) {
      console.error('Error deleting AboutUs:', error);
      throw error;
    }
  }
}

module.exports = new AboutUsService();
