import { useState } from "react";
import SideNav from "../../components/header/SideNav";
import TopNav from "../../components/header/TopNav";
import { FaRegPlayCircle } from "react-icons/fa";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    selectedAnswer: null,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
    selectedAnswer: null,
  },
  {
    id: 3,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correctAnswer: "Mitochondria",
    selectedAnswer: null,
  },
  // Add more questions here
];

const Mcq = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  const [answers, setAnswers] = useState(
    questions.map((question) => ({
      id: question.id,
      selectedAnswer: null,
    }))
  );
  const [showScore, setShowScore] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [time, setTime] = useState(3600); // 1 hour in seconds

  const handleAnswerOptionClick = (questionId, selectedOption) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer) => {
        if (answer.id === questionId) {
          return { ...answer, selectedAnswer: selectedOption };
        }
        return answer;
      })
    );
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.id);
      if (question.correctAnswer === answer.selectedAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  const resetQuiz = () => {
    setAnswers(
      questions.map((question) => ({
        id: question.id,
        selectedAnswer: null,
      }))
    );
    setShowScore(false);
    setTime(3600);
  };

  const startTimer = () => {
    setShowScore(false);
    setShowQuestion(true);
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000); // Update timer every second

    // Clear interval when timer reaches 0
    setTimeout(() => {
      clearInterval(timerInterval);
      setShowScore(true);
    }, time * 1000);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="home_section">
      <div className={show ? "show" : "hidden"}>
        <SideNav />
        <div className="overlay" onClick={handleShow}></div>
      </div>
      <div className="right">
        <TopNav handleShow={handleShow} show={show} />
        <div className="home_container p-3 p-lg-4">
          <div className="quiz-container">
            {!showScore ? (
              <>
                {showQuestion ? (
                  <>
                    <div className="timer">
                      <p>Time: {formatTime()}</p>
                      <p>
                        F.M : 60 <br /> P.M : 40
                      </p>
                    </div>
                    <div className="questions">
                      {questions.map((question, index) => (
                        <div key={question.id} className="question">
                          <div className="question-text">
                            {index + 1}. {question.question}
                          </div>
                          <div className="answer-options">
                            {question.options.map((option) => (
                              <label key={option}>
                                <input
                                  type="radio"
                                  name={`question-${question.id}`}
                                  value={option}
                                  checked={
                                    answers.find(
                                      (answer) => answer.id === question.id
                                    ).selectedAnswer === option
                                  }
                                  onChange={() =>
                                    handleAnswerOptionClick(question.id, option)
                                  }
                                />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button onClick={handleSubmit} className="mt-4">
                      Submit
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={startTimer} className="start_button">
                      Start <FaRegPlayCircle />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="score-section">
                <p>
                  You scored {calculateScore()} out of {questions.length}
                </p>
                <button onClick={resetQuiz}>Retry</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
