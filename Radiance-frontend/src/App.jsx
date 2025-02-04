import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Homepage from "./pages/homepage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* rgb(3, 89, 70); */}
      </Routes>
    </Router>
  );
}

export default App;
