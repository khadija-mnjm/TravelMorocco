// Sidenav.js
import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from "@mui/material";
import Home from "../composants/home";
import profile from "../composants/profile";

function Sidenav() {
  return (
    <Router>
      <div className="sidenav">
        {/* ... Your existing code ... */}
        
        <div className="sidenav__buttons">
          <Link to="/home" className="sidenav__button">
            <HomeIcon />
            <span>Home</span>
          </Link>
          {/* Add a Link to the Profile component */}
          <Link to="/profile" className="sidenav__button">
            <FavoriteBorderIcon />
            <span>Profile</span>
          </Link>
          {/* ... Your other buttons ... */}
        </div>

        {/* Render Route components for Home and Profile without using Switch */}
        <Route path="/home" component={Home} />
        <Route path="/profile" component={profile} />
      </div>
    </Router>
  );
}

export default Sidenav;
