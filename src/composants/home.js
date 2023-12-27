import React, { useState } from 'react';
import jsonData from './places.json';
import '../styleHompages.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import Header from '../header';


const CityList = ({ cities, onCityClick }) => (
  <ul className='ul'>
    {cities.map((city, index) => (
      <li className='li' key={index}>
        <a className='a' href="#" onClick={() => onCityClick(city)}>
          <img className='imgProfil' src={city.img1} alt={city.img1} style={{ maxWidth: '100%' }} />
          {city.nom}
        </a>
      </li>
    ))}
  </ul>
);

const PlaceList = ({ places, onPlaceClick }) => (
  <ul className='ulPlace'>
    {places.map((place, index) => (
      <li className='ulPlace' key={index}>
        <a  className='ulPlace' href="#" onClick={() => onPlaceClick(place)}>
          {place.nom}
        </a>
      </li>
    ))}
  </ul>
);

const CityDetails = ({ details, onPlaceClick }) => (
  <div>
    <h2 className='Titre'>{details.nom}</h2>
    <PlaceList places={details.lieux} onPlaceClick={onPlaceClick} />
  </div>
);

const Home = () => {
  const cities = jsonData.villes;
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setSelectedPlace(null);
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setLikes(place.likes || 0);
    setComments(place.comments || []);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (inputValue.trim() !== '') {
      const updatedComments = [...comments, inputValue];
      setComments(updatedComments);
      setInputValue(''); // Réinitialise l'input après avoir ajouté le commentaire
    }
  };

  return (
    <>
    <Header />
    <div className='divA'>
    
      <CityList className='list' cities={cities} onCityClick={handleCityClick} />
      {selectedCity && !selectedPlace && (
        <CityDetails details={selectedCity} onPlaceClick={handlePlaceClick} />
      )}
      {selectedPlace && (
        <div>
          
          <div className="instagram-post">
          <div className="image-container">
            <img src={selectedPlace.images} alt={selectedPlace.nom} style={{ maxWidth: '100%' }} className="first-image"/>
            <img  src={selectedPlace.images1} alt={selectedPlace.nom} style={{ maxWidth: '100%' }} className="second-image"/>
            </div>
            <div className="post-details">
              <h3>{selectedPlace.nom}</h3>
              <p>{selectedPlace.description}</p>
              <p>Type: {selectedPlace.type}</p>
              {/* Section commentaire */}
              <div className="interaction-section">
              <div className="like-section">
                <button onClick={handleLikeClick} className="btn btn-danger">
                <FontAwesomeIcon icon={faHeart} /> </button>
                <span>{likes}</span>
                
                 {/* Bouton de like */}
              </div>
              <div className="comment-section">
  <div className="comment-input">
    <input
      className="input"
      type="text"
      placeholder="add a comment"
      value={inputValue}
      onChange={handleInputChange}
    />
    <button onClick={handleCommentSubmit} className="btn-outline-secondary">
      <FontAwesomeIcon icon={faComment} />
    </button>
  </div>
  {/* Liste des commentaires */}
  <ul className="comment-list">
    {comments.map((comment, index) => (
      <li className="liCmnt" key={index}>{comment}</li>
    ))}
  </ul>
</div>
             
              </div>
            </div>
          </div>
        
          <button className='btnRtn' onClick={() => setSelectedPlace(null)}>Retour</button>
        </div>
      )}
    </div>
    </>
  );
};

export default Home;