const logService = require('../services/logService');

function add(req, res) {
  const { date, treatment, feedback } = req.body;
  if (!date || !treatment) {
    return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
  }
  const log = logService.addLog({ userId: req.user.id, date, treatment, feedback });
  res.status(201).json(log);
}

function list(req, res) {
  const logs = logService.listLogs(req.user.id);
  res.json(logs);
}

module.exports = { add, list };
