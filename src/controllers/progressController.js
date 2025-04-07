// src/controllers/progressController.js

const Progress = require('../models/progressModel'); // Importar o modelo de progresso
const Enrollment = require('../models/enrollmentModel'); // Importar o modelo de matrícula

// Função para registrar o progresso de uma aula
const recordProgress = async (req, res) => {
    const { lessonId } = req.body;
    const userId = req.user.id; // ID do usuário autenticado

    try {
        // Verificar se o usuário está matriculado na aula
        const enrollment = await Enrollment.findOne({ where: { userId, lessonId } });
        if (!enrollment) {
            return res.status(404).json({ message: 'Matrícula não encontrada.' });
        }

        // Registrar o progresso
        await Progress.create({ userId, lessonId });
        return res.status(201).json({ message: 'Progresso registrado com sucesso.' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao registrar progresso.', error });
    }
};

// Função para obter o progresso de um usuário
const getProgress = async (req, res) => {
    const userId = req.user.id; // ID do usuário autenticado

    try {
        const progress = await Progress.findAll({ where: { userId } });
        return res.status(200).json(progress);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao obter progresso.', error });
    }
};

// Exportar as funções
module.exports = {
    recordProgress,
    getProgress,
};