const treatmentService = require('../services/treatmentService');

function list(req, res) {
  res.json(treatmentService.listTreatments());
}

function getByType(req, res) {
  const { type } = req.params;
  const result = treatmentService.getTreatmentsByType(type);
  if (result.length === 0) {
    return res.status(404).json({ error: 'Tipo de tratamento não encontrado' });
  }
  res.json(result);
}

module.exports = { list, getByType };
