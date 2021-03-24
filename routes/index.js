const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/new', homeController.new);
router.post('/new', homeController.newAction);

module.exports = router;