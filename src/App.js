// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Header> </Header>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<HomePage />} path="/" exact />
          </Route>
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </Router>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
