// Import necessary libraries and components
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './menu.css';
import Authentifier from './composants/Authentifier';
import About from './composants/about';
import Profile from './composants/profile';
import Home from './composants/home';
import Todo from './composants/todo';
import jsonData from './places.json';
import Plan from './composants/plan';
import ImageSlider  from './ImageSlider';
import Header from './header';

// Rename the Header component to PageHeader
const PageHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showConnectButton = location.pathname === '/' || location.pathname === '/authentifier';

  const handleConnectClick = () => {
    navigate('/authentifier');
  };

  
};

// Define AuthentifierPage, HomePage, and Page components
const AuthentifierPage = () => (
  <div>
    <Authentifier />
  </div>
);

const HomePage = ({ onCityClick }) => (
  <div>
    <Header /> {/* Use the renamed PageHeader component here */}
    <ImageSlider/>
  </div>
);

const Page = () => {
  const cities = jsonData.villes;
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city, history) => {
    setSelectedCity(city);
    // You can navigate to a different route using the history object
    // Example: history.push('/about');
  };

  return (
    <Router>
      <div>
        <PageHeader /> {/* Use the renamed PageHeader component here */}
        <Routes>
          <Route
            path="/"
            element={<HomePage onCityClick={(city, history) => handleCityClick(city, history)} />}
          />
          <Route path="/authentifier" element={<AuthentifierPage />} />
          <Route
            path="/home"
            element={<Home cities={cities} onCityClick={handleCityClick} selectedCity={selectedCity} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Page;
