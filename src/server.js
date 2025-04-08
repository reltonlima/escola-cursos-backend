// filepath: /src/server.js
require('dotenv').config(); // Certifique-se de que esta linha está no início do arquivo

const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});