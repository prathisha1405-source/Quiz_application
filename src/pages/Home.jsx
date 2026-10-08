import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const startQuiz = (level) => {

    localStorage.setItem("score", "0");

    navigate(`/quiz/${level}`);
  };

  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  return (
    <div className="home-page">

      <div className="home-card">

        <span className="welcome-badge">
          Welcome 👋
        </span>

        <h1>
          Ready for the Challenge?
        </h1>

        <p>
          Hello, <strong>{email}</strong>
        </p>

        <div className="quiz-info">

          <div>
            <h2>60</h2>
            <span>Questions</span>
          </div>

          <div>
            <h2>60</h2>
            <span>Minutes</span>
          </div>

          <div>
            <h2>3</h2>
            <span>Levels</span>
          </div>

        </div>

        <h2 className="choose-title">
          Choose Your Level
        </h2>

        <div className="levels">

          {/* EASY */}

          <div
            className="level easy"
            onClick={() => startQuiz("easy")}
          >

            <div className="level-icon">
              🌱
            </div>

            <h3>Easy</h3>

            <p>20 Questions</p>

            <span>
              Beginner
            </span>

          </div>


          {/* MEDIUM */}

          <div
            className="level medium"
            onClick={() => startQuiz("medium")}
          >

            <div className="level-icon">
              ⚡
            </div>

            <h3>Medium</h3>

            <p>20 Questions</p>

            <span>
              Intermediate
            </span>

          </div>


          {/* HARD */}

          <div
            className="level hard"
            onClick={() => startQuiz("hard")}
          >

            <div className="level-icon">
              🔥
            </div>

            <h3>Hard</h3>

            <p>20 Questions</p>

            <span>
              Advanced
            </span>

          </div>

        </div>

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

export default Home;