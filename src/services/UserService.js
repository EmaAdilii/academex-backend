const User = require('../models/userModel');

class UserService { 
  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async createUser(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser(updateUserData) {
    try {
      const user = await User.findByPk(updateUserData.id);
      if (!user) {
        return 'User not found';
      }
  
      await user.update(updateUserData);
  
      return user;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }
  
  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return 'User not found';
      }

      await user.destroy();
      return 'User deleted successfully!';
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}
  
module.exports = new UserService();
