const UserDao = require('../daos/UserDao');

class UserService { 
    async getAllUsers() {
        return await UserDao.getAllUsers();
    }

    async getUserById(id) {
      return await UserDao.getUserById(id);
    }
  
    async createUser(userData) {
      return await UserDao.createUser(userData);
    }

    async updateUser(updateUserData) {
      return await UserDao.updateUser(updateUserData);
    }

    async deleteUser(id) {
      const result = await UserDao.deleteUser(id);
      if(result.affectedRows === 0) {
        return 'User not found';
      } else if(result.affectedRows === 1){
        return 'User deleted successfully!';
      }
    }
}
  
module.exports = new UserService();
