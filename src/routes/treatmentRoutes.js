const express = require('express');
const router = express.Router();
const treatmentController = require('../controllers/treatmentController');

router.get('/list', treatmentController.list);
router.get('/type/:type', treatmentController.getByType);

module.exports = router;
