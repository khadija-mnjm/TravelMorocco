import React from 'react';
import '../about.css';
import Header from '../header';

import { FaLinkedin ,FaInstagram,FaFacebook } from 'react-icons/fa';
const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h2>🌍 Découvrez le Maroc</h2>
        <p>
          Bienvenue sur notre site touristique dédié à vous faire découvrir la richesse culturelle du Maroc 🇲🇦.
          Le Maroc est un pays d'une incroyable diversité, offrant une multitude de sites touristiques fascinants.
          De ses majestueuses villes impériales comme Marrakech et Fès, à ses splendides déserts du Sahara,
          en passant par ses magnifiques plages sur la côte atlantique, le Maroc a tant à offrir aux voyageurs.
        </p>
        <p>
          Venez explorer les souks animés, déguster la délicieuse cuisine marocaine, découvrir l'architecture
          traditionnelle, et vous immerger dans l'hospitalité chaleureuse de son peuple. Notre site est là
          pour vous guider et vous aider à planifier votre prochaine aventure au Maroc !
        </p>
        <p>
          Plongez dans l'histoire, la culture et la beauté naturelle du Maroc, et préparez-vous à vivre une expérience
          de voyage inoubliable au cœur du Maghreb. Que votre voyage soit rempli de découvertes et de moments
          exceptionnels ! 🌟
        </p>
        <p>
          La culture marocaine est riche et diversifiée, influencée par une histoire ancienne et des traditions
          uniques. De la musique et de la danse traditionnelles aux festivals colorés, chaque coin du Maroc
          révèle une facette captivante de cette culture vibrante.
        </p>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contactez-nous</h2>
          <p>Email: contact@tourisme.ma</p>
          <p>Téléphone: +212 655886197</p>
        </div>
        <div className="footer-section">
          <h2>Liens rapides</h2>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/about">À propos de nous</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Suivez-nous</h2>
          <div className="social-icons">
          <a className='A' href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> Connect with me on LinkedIn
            </a>
                  
                  <a className='A' href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />  Instagram
            </a>
            <a className='A' href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
              <FaFacebook />  Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Tourisme Maroc. Do it by khadija Sabrin Hassna.</p>
      </div>
    </>
  );
};

export default About;
