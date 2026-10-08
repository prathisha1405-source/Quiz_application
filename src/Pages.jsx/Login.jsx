import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    localStorage.setItem("email", email);

    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          📝
        </div>

        <h1>Quiz Master</h1>

        <p>
          Test your knowledge and improve your skills
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Start Learning →
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;