// filepath: /src/models/lesson.js
module.exports = (sequelize, DataTypes) => {
    const Lesson = sequelize.define('Lesson', {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
    });
    return Lesson;
  };