// Homepage.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import jsonData from './places.json';
import Home from './composants/home';
import About from './composants/about';
import Profile from './composants/profile';
import Authentifier from './composants/Authentifier';
import { FaHome, FaSearch ,FaInfoCircle, FaUser } from 'react-icons/fa';
import './menu.css';
import Header from './header';

const Homepage = () => {
  const cities = jsonData.villes;
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={<Home cities={cities} onCityClick={handleCityClick} selectedCity={selectedCity} />}
          />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/authentifier" element={<Authentifier />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Homepage;
