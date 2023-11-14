const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const connection = require('../database/db-connection');


const register = express()
register.use(cors());
register.use(express.json());

class Register{
    constructor() {
      this.tableName = 'users';
    }
}
  
// register.post('/register', (req,res) => (
//     const sql = "INSERT INTO users ('name', 'emai)"
// ))