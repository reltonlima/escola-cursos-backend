const { Pool } = require('pg');
const dbConfig = require('../db/dbConfig');

// Create a new pool instance for PostgreSQL connection
const pool = new Pool(dbConfig);

// User model for interacting with the users table
const UserModel = {
  // Create a new user
  createUser: async (userData) => {
    const { name, email, password } = userData;
    const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Find a user by email
  findUserByEmail: async (email) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Get all users
  getAllUsers: async () => {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    return result.rows;
  },

  // Update user information
  updateUser: async (id, userData) => {
    const { name, email } = userData;
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    const values = [name, email, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Delete a user
  deleteUser: async (id) => {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  },
};

module.exports = UserModel;