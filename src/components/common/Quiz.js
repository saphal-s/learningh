import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timer, setTimer] = useState(30);

  // Define your questions and answers
  const questions = [
    {
      id: "1",
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id: "2",
      question: "What is 3 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
    {
      id: "3",
      question: "What is 2 + 3?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
  ];

  useEffect(() => {
    let interval;
    if (quizStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted]);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    clearInterval(timer);
    if (selectedOption === questions[currentQuestion]?.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
    setTimer(30); // Reset timer for the next question
  };

  return (
    <div className="quiz_container">
      {!quizStarted ? (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <div>
          {currentQuestion < questions.length ? (
            <>
              <h2>{questions[currentQuestion].question}</h2>
              <p>Time Left: {timer} seconds</p>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={option}
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionSelect(option)}
                    />
                    <label htmlFor={option}>&nbsp;{option}</label>
                  </li>
                ))}
              </ul>
              <button onClick={handleNextQuestion}>Next</button>
            </>
          ) : (
            <div>
              <h2>Quiz Completed!</h2>
              <p>
                Your score: {score} out of {questions.length}
              </p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedOption("");
                  setScore(0);
                  setTimer(30);
                }}
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
