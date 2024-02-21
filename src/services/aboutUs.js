const AboutUs = require('../models/aboutUsModel'); // Adjust the path as necessary

class AboutUsService {
  async getAllSections() {
    return await AboutUs.findAll();
  }

  async getSectionById(id) {
    return await AboutUs.findByPk(id);
  }

  async createSection(sectionData) {
    try {
      const newSection = await AboutUs.create(sectionData);
      return newSection;
    } catch (error) {
      console.error('Error creating section:', error);
      throw error;
    }
  }

  async updateSection(updateSectionData) {
    try {
      const section = await AboutUs.findByPk(updateSectionData.id);
      if (!section) {
        return 'Section not found';
      }

      await section.update(updateSectionData);
      return section;
    } catch (error) {
      console.error('Error updating section:', error);
      throw error;
    }
  }

   async deleteSection(id) {
    try {
      const section = await AboutSection.findByPk(id);
      if (!section) {
        return 'Section not found';
      }

      await section.destroy();
      return 'Section deleted successfully!';
    } catch (error) {
      console.error('Error deleting section:', error);
      throw error;
    }
  }
}

module.exports = new AboutUsService();