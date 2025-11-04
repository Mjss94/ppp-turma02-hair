const treatments = require('../models/treatmentModel');

function listTreatments() {
  return treatments;
}

function getTreatmentsByType(type) {
  return treatments.filter(t => t.type === type);
}

module.exports = { listTreatments, getTreatmentsByType };
