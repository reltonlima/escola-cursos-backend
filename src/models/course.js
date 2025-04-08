// filepath: /src/models/course.js
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Course.associate = (models) => {
    Course.hasMany(models.Lesson, { foreignKey: 'courseId', as: 'lessons' }); // Associação com alias 'lessons'
  };

  return Course;
};