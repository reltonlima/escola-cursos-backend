'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Lessons', 'courseId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses', // Nome da tabela referenciada
        key: 'id',        // Chave primária da tabela referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Lessons', 'courseId');
  },
};