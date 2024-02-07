const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Endpoint to get a random question
router.get('/quiz/:category/:difficulty', quizController.getQuizQuestion);

module.exports = router;
