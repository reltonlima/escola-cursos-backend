// filepath: /src/models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Definindo as associações
  User.associate = (models) => {
    User.hasMany(models.Enrollment, { foreignKey: 'userId', as: 'enrollments' });
  };

  return User;
};