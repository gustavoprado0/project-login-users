// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importando o modelo do usuário

// Rota para obter todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Buscar todos os usuários
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para criar um novo usuário
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para atualizar um usuário
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para deletar um usuário
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.json({ message: "Usuário deletado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
