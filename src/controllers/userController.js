const userService = require('../services/userService');

function register(req, res) {
  try {
    const { username, password, hairType } = req.body;
    if (!username || !password || !hairType) {
      return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
    }
    const user = userService.registerUser({ username, password, hairType });
    res.status(201).json(user);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
}

function login(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
    }
    const result = userService.loginUser({ username, password });
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

module.exports = { register, login };
