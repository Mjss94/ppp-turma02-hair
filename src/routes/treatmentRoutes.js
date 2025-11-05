const express = require('express');
const router = express.Router();
const treatmentController = require('../controllers/treatmentController');

// Lista todos os tratamentos
router.get('/list', treatmentController.list);

// Lista tratamentos por tipo
router.get('/type/:type', treatmentController.listByType);

module.exports = router;
