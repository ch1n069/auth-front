// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </Router>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
