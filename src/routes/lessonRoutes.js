const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// Rotas de lições
router.post('/', lessonController.createLesson);

module.exports = router;