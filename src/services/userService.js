const users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const SECRET = 'cronograma_secret';

function registerUser({ username, password, hairType }) {
  if (users.find(u => u.username === username)) {
    throw new Error('Usuário já existe');
  }
  const user = { id: users.length + 1, username, password, hairType };
  users.push(user);
  return user;
}

function loginUser({ username, password }) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) throw new Error('Credenciais inválidas');
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1d' });
  return { token };
}

function getUserById(id) {
  return users.find(u => u.id === id);
}

module.exports = { registerUser, loginUser, getUserById, SECRET };
