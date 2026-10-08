import { useNavigate } from "react-router-dom";

function Result() {

  const navigate = useNavigate();

  const email =
    localStorage.getItem("email");

  const score =
    Number(
      localStorage.getItem("score")
    ) || 0;


  const percentage =
    Math.round(
      (score / 20) * 100
    );


  const getMessage = () => {

    if (percentage >= 80) {
      return "Excellent! 🎉";
    }

    if (percentage >= 60) {
      return "Great Job! 👏";
    }

    if (percentage >= 40) {
      return "Good Try! 👍";
    }

    return "Keep Practicing! 💪";
  };


  const tryAgain = () => {

    localStorage.setItem(
      "score",
      "0"
    );

    navigate("/home");

  };


  const logout = () => {

    localStorage.clear();

    navigate("/");

  };


  return (
    <div className="result-page">

      <div className="result-card">

        <div className="result-icon">
          🏆
        </div>

        <h1>
          Quiz Completed!
        </h1>

        <p>
          Well done, {email}
        </p>


        <div className="score-circle">

          <strong>
            {score}
          </strong>

          <span>
            / 20
          </span>

        </div>


        <h2>
          {percentage}%
        </h2>


        <h3>
          {getMessage()}
        </h3>


        <button
          className="primary-btn"
          onClick={tryAgain}
        >
          Try Again
        </button>


        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Result;