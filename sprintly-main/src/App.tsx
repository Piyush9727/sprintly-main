import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
