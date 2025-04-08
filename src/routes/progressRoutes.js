const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

// Rotas de progresso
router.get('/', progressController.getProgress);
router.post('/', progressController.updateProgress);
router.post('/add-enrollment', progressController.addEnrollment);

module.exports = router;