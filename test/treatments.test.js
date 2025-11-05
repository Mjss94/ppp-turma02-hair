const treatmentService = require('../src/services/treatmentService');

function list(req, res) {
  const treatments = treatmentService.listAll();
  res.status(200).json(treatments);
}

function listByType(req, res) {
  const type = req.params.type.toLowerCase();
  const treatments = treatmentService.listAll().filter(t => t.type.toLowerCase() === type);

  if (treatments.length === 0) {
    return res.status(404).json({ error: 'Tipo de tratamento não encontrado' });
  }

  res.status(200).json(treatments);
}

module.exports = { list, listByType };
