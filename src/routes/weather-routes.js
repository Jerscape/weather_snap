const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weathercontrollers');

router.post('/snap', weatherController.saveSnap);

module.exports = router;