import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../data/question";
import "../App.css";

function Quiz_questions() {

  const { level } = useParams();

  const navigate = useNavigate();

  // Filter questions according to level

  const filteredQuestions = questions.filter(
    (q) => q.level.toLowerCase() === level.toLowerCase()
  );

  // Current question

  const [currentIndex, setCurrentIndex] = useState(0);

  // Selected answers

  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Timer - 60 minutes

  const [timeLeft, setTimeLeft] = useState(60 * 60);


  const currentQuestion =
    filteredQuestions[currentIndex];


  // Timer

  useEffect(() => {

    if (timeLeft <= 0) {

      submitQuiz();

      return;
    }

    const timer = setInterval(() => {

      setTimeLeft((time) => time - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft]);


  // Format timer

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;


  // Select option

  const handleOptionClick = (option) => {

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: option
    });

  };


  // Calculate score and submit

  const submitQuiz = () => {

    let score = 0;

    filteredQuestions.forEach((question) => {

      if (
        selectedAnswers[question.id] ===
        question.answer
      ) {
        score++;
      }

    });

    localStorage.setItem(
      "score",
      score
    );

    navigate("/result");

  };


  // Next

  const nextQuestion = () => {

    if (
      currentIndex <
      filteredQuestions.length - 1
    ) {

      setCurrentIndex(currentIndex + 1);

    }

  };


  // Previous

  const previousQuestion = () => {

    if (currentIndex > 0) {

      setCurrentIndex(currentIndex - 1);

    }

  };


  return (
    <div className="quiz-page">

      <div className="quiz-card">


        {/* TOP */}

        <div className="quiz-top">

          <div>

            <span className="quiz-level">
              {level.toUpperCase()}
            </span>

            <h1>
              Quiz
            </h1>

          </div>


          <div className="timer">

            ⏱️

            {" "}

            {String(minutes).padStart(2, "0")}:

            {String(seconds).padStart(2, "0")}

          </div>

        </div>


        {/* PROGRESS */}

        <div className="progress-area">

          <div className="progress-text">

            <span>
              Question {currentIndex + 1}
            </span>

            <span>
              {filteredQuestions.length} Questions
            </span>

          </div>


          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${
                  ((currentIndex + 1) /
                    filteredQuestions.length) *
                  100
                }%`
              }}
            />

          </div>

        </div>


        {/* QUESTION */}

        <div className="question-box">

          <h2>
            {currentQuestion.question}
          </h2>

        </div>


        {/* OPTIONS */}

        <div className="options-container">

          {currentQuestion.options.map(
            (option, index) => {

              const isSelected =
                selectedAnswers[
                  currentQuestion.id
                ] === option;

              return (

                <button
                  key={option}
                  className={
                    isSelected
                      ? "option-btn selected"
                      : "option-btn"
                  }
                  onClick={() =>
                    handleOptionClick(option)
                  }
                >

                  <span className="option-number">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>
                    {option}
                  </span>

                  {isSelected && (
                    <span className="check">
                      ✓
                    </span>
                  )}

                </button>

              );

            }
          )}

        </div>


        {/* NAVIGATION */}

        <div className="navigation-buttons">


          {/* PREVIOUS */}

          <button
            className="nav-btn previous-btn"
            onClick={previousQuestion}
            disabled={currentIndex === 0}
          >
            ← Previous
          </button>


          {/* NEXT / SUBMIT */}

          {currentIndex ===
          filteredQuestions.length - 1 ? (

            <button
              className="nav-btn submit-btn"
              onClick={submitQuiz}
            >
              Submit ✓
            </button>

          ) : (

            <button
              className="nav-btn next-btn"
              onClick={nextQuestion}
            >
              Next →
            </button>

          )}

        </div>


      </div>

    </div>
  );
}

export default Quiz_questions;