const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/add', authenticateToken, logController.add);
router.get('/list', authenticateToken, logController.list);

module.exports = router;
