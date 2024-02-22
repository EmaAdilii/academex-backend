const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async createUser(userData) {
    try {
      userData.password = await bcrypt.hash(userData.password, 10);
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

  async login(email, password) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error('User not found');
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
  
      const tokenPayload = { userId: user.id, email: user.email, name: user.name, role: user.role };
      console.log('Token payload:', tokenPayload);
  
      const token = jwt.sign(tokenPayload, "my-secret-key", { expiresIn: '1h' });
  
      return { token, userRole: user.role };
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  }
  
}
  
module.exports = new UserService();
