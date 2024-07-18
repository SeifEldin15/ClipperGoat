import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home'; 
import Privacy from './Pages/Privacy'; 
import Terms from './Pages/Terms';
import Refund from './Pages/Refund'; 
import Leaderboard from './Pages/Leaderboard'; 

import './App.css';

function App() {
  return (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
  );
}

export default App;
