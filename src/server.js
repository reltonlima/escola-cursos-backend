// filepath: /src/server.js
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});