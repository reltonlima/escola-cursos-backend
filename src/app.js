const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const progressRoutes = require('./routes/progressRoutes');
const { authMiddleware } = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Authentication middleware for protected routes
app.use(authMiddleware);

// Route definitions
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/progress', progressRoutes);

// Export the app for use in server.js
module.exports = app;