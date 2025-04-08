// filepath: /src/routes/index.js
const express = require('express');
const router = express.Router();

// Importação de roteadores
const authRoutes = require('./authRoutes');
const courseRoutes = require('./courseRoutes');
const progressRoutes = require('./progressRoutes');
const lessonRoutes = require('./lessonRoutes');

// Registro de rotas
router.use('/auth', authRoutes); // Rotas de autenticação
router.use('/courses', courseRoutes); // Rotas de cursos
router.use('/progress', progressRoutes); // Rotas de progresso
router.use('/lessons', lessonRoutes); // Rotas de lições

module.exports = router;