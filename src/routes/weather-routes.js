const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weathercontrollers'); // Ensure correct variable name

router.post('/snap', weatherController.saveSnap); // Correct variable name

module.exports = router;
