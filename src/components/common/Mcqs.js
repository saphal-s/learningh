import React, { useState } from "react";

const Mcqs = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  // Define your questions and answers
  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 3 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
    {
      question: "What is 2 + 3?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
    {
      question: "What is 3 + 3?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "6",
    },
    {
      question: "What is 1 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "3",
    },
    // Add more questions here
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz_container">
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
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
                <label htmlFor={option}>&nbsp; {option}</label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
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
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Mcqs;
