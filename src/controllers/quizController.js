const questions = require('../../questions.json');
const quizService = require('../services/quizService');


//Get a random quesiton using this funciton 
const getQuizQuestion = (req, res) => {
  const { category, difficulty } = req.params;
  const filteredQuestions = quizService.filterQuestions(questions, category, difficulty); 
  
  if (filteredQuestions.length === 0) {
    return res.status(404).json({ error: 'No questions found for the specified category and difficulty.' });
  }

  const randomQuestion = quizService.fetchRandomQuestion(filteredQuestions);
  res.json(randomQuestion);
};

module.exports = { getQuizQuestion };
