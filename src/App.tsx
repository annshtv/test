import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Episodes from './pages/Episodes';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
