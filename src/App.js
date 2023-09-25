import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import "./assets/style/side.scss";
import Liderboard from "./pages/Liderboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liderboard" element={<Liderboard />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
