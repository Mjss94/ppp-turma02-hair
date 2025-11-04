const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../resources/swagger.json');
const userRoutes = require('./routes/userRoutes');
const treatmentRoutes = require('./routes/treatmentRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/treatments', treatmentRoutes);
app.use('/logs', logRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('API Cronograma Capilar');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
