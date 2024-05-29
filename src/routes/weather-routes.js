const express = require('express');
const router = express.Router();
const { saveSnapData } = require('/models/weatherModel');

router.post('/snap', weatherController.saveSnap);

module.exports = router;