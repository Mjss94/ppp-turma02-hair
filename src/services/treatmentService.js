const treatments = require('../models/treatmentModel');

function listTreatments() {
  return treatments;
}

function getTreatmentsByType(type) {
  return treatments.filter(t => t.type.toLowerCase() === type.toLowerCase());
}

module.exports = { listTreatments, getTreatmentsByType };
