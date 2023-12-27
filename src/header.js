// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUser,FaRobot } from 'react-icons/fa';
import './header.css'; // Include the CSS file
import exampleImage from './image/image3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <nav>
      <ul className='ul1'>
        <li className='li1'>
          <Link to="/">
          <img className='example-image' src={exampleImage} alt="Example" />
          </Link>
          
        </li>
        
        <li className='li1'>
          <Link className="a1" to="/home">
            <FaHome /> Home
          </Link>
        </li>
        <li className='li1'>
          <Link className="a1" to="/plan">
            <FaRobot /> Guid
          </Link>
        </li>
        <li className='li1'>
          <Link className="a1" to="/todo">
          <FontAwesomeIcon icon={faRobot} /> Plan
          </Link>
        </li>
        <li className='li1'>
          <Link className="a1" to="/about">
            <FaInfoCircle /> About
          </Link>
        </li>
      
      </ul>
    </nav>
  );
};

export default Header;
