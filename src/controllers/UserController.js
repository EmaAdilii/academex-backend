const UserService = require('../services/UserService');

class UserController {
  
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async getUserById(req, res) {
    try {
      const id = req.params.id;
      const user = await UserService.getUserById(id);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async createUser(req, res) {
    try {
      const result = await UserService.createUser(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async updateUser(req, res) {
    try {
      const result = await UserService.updateUser(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const result = await UserService.deleteUser(id);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const { token, userRole } = await UserService.login(email, password);
      res.json({ token, userRole });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - controller');
    }  
  }
}

module.exports = new UserController();
