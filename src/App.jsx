import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home'; 
import Privacy from './Pages/Privacy'; 
import Terms from './Pages/Terms';
import Refund from './Pages/Refund'; 
import Leaderboard from './Pages/Leaderboard'; 
import ContactUs from './Pages/ContactUs/ContactUs'; 
import Index3 from './Pages/index3'; 

import Pricing from './Pages/Pricing'
import './App.css';
import StarBackground from './assets/star.mp4'

function App() {
  return (
    <>
    <div className="video-container">

    <video playsInline autoPlay muted loop className="background-video">
    <source src={StarBackground} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/Index3" element={<Index3 />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes></>
  );
}

export default App;
