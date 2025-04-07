const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Middleware to protect routes
router.use(authMiddleware.verifyToken);

// Additional routes can be added here for authenticated users

module.exports = router;