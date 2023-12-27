// Header1.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './menu.css';


const Header1 = () => (
  <nav className='nav1'>
    <ul className='ul1'>
      <li className='li2'>
        <Link className='title1' to="/">
          touristique
        </Link>
      </li>
      
      <li className='li1'>
        {/* Utilisez Link pour naviguer vers /authentifier */}
        <Link to="/authentifier">
          <button className='button1'><FaUser /> Se connecter </button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header1;
