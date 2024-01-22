const filterQuestions = (questions, category, difficulty) => {
    return questions.results.filter(question =>
      question.category === category && question.difficulty === difficulty
    );
  };
  
  const fetchRandomQuestion = (questions) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };
  
  module.exports = { filterQuestions, fetchRandomQuestion };
  