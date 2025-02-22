// models/User.js
const mongoose = require('mongoose');

// Definição do schema para o usuário
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Campo obrigatório
  email: { type: String, required: true, unique: true } // Email único
});

// Criar o modelo a partir do schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
