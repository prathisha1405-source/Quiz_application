import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./Pages.jsx/Login";
import Home from "./Pages.jsx/Home";
import Quiz_questions from "./Pages.jsx/Quiz_questions";
import Result from "./Pages.jsx/Result";

function ProtectedRoute({ children }) {
  const email = localStorage.getItem("email");

  if (!email) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/:level"
          element={
            <ProtectedRoute>
              <Quiz_questions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Result />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;