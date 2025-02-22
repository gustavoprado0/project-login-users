// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Carregar variáveis de ambiente do .env

const app = express();
app.use(cors());
app.use(express.json()); // Para processar o corpo da requisição como JSON

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Importando as rotas de usuário
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes); // Usando as rotas de usuário

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
