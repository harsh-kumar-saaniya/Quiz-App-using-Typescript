import React, { useState } from 'react';
import { QuestionCard } from './Components/QuestionCard';
import { fetchQuestions, Difficulty } from './API';


const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startQuiz = async () => { }
  const nextQuestion = async () => { }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => { };


  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startQuiz}>Begin Quiz</button>
      <p className="score">Score: </p>
      <p>
        Loading
      </p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
