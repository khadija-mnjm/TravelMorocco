// Plan.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../plan.css';
import Header from '../header';

const generateFakeSuggestions = (destination, placesOfInterest, daysOfTravel) => {
  const placesList = placesOfInterest.split(',').map(place => place.trim());
  const suggestions = [];

  for (let day = 1; day <= daysOfTravel; day++) {
    suggestions.push(
      `Jour ${day} : Explorer ${placesList.join(', ')} 🌍`,
      `Jour ${day} : Activité culturelle à ${placesList.join(', ')} 🎭`,
      `Jour ${day} : Repos bien mérité 😴`
    );
  }

  suggestions.push(`Retour au Maroc le Vendredi 🏡`);

  return suggestions;
};

function Plan() {
  const [destination, setDestination] = useState('');
  const [placesOfInterest, setPlacesOfInterest] = useState('');
  const [daysOfTravel, setDaysOfTravel] = useState('');
  const [generatedSuggestions, setGeneratedSuggestions] = useState([]);
  const [visitedPlaces, setVisitedPlaces] = useState([]);

  const generatePlan = () => {
    const suggestions = generateFakeSuggestions(destination, placesOfInterest, daysOfTravel);
    setGeneratedSuggestions(suggestions);
  };

  const addVisitedPlace = (place) => {
    setVisitedPlaces([...visitedPlaces, place]);
  };

  const deleteVisitedPlace = (index) => {
    const updatedPlaces = [...visitedPlaces];
    updatedPlaces.splice(index, 1);
    setVisitedPlaces(updatedPlaces);
  };

  const addAllSuggestionsToList = () => {
    setVisitedPlaces([...visitedPlaces, ...generatedSuggestions]);
  };

  return (
    <>
    <Header/>
      <div className='app2'>
        <h1>Bienvenue!</h1>
        <p>Quel est votre plan d'aujourd'hui?
          <p>quelle sont les places qui s'intérecer pour voyager dans le Maroc</p>
        </p>
      </div>
      <div className="App">
        <div>
          <label htmlFor="destination">Destination au Maroc :</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
  
        <div>
          <label htmlFor="places-of-interest">Lieux d'intérêt pour le voyage :</label>
          <input
            type="text"
            id="places-of-interest"
            value={placesOfInterest}
            onChange={(e) => setPlacesOfInterest(e.target.value)}
          />
        </div>
  
        <div>
          <label htmlFor="days-of-travel">Jours de voyage :</label>
          <input
            type="text"
            id="days-of-travel"
            value={daysOfTravel}
            onChange={(e) => setDaysOfTravel(e.target.value)}
          />
        </div>
  
        <button onClick={generatePlan} style={{ backgroundColor: '#756AB6', color: '#fff' }}>
          Générer le plan
          <i className="fas fa-rocket" style={{ marginLeft: '5px' }}></i>
        </button>
  
        <div>
          <h2>Résultats générés :</h2>
          {generatedSuggestions.map((suggestion, index) => (
            <div key={index}>
              <h3>Jour {Math.floor(index / 3) + 1}</h3>
              <p>{suggestion}</p>
              <button onClick={() => addVisitedPlace(suggestion)} style={{ backgroundColor: '#F7B787#F9E8D9#527853', color: '#fff' }}>
                Add liste <i className="fas fa-plus-circle"></i>
              </button>
            </div>
          ))}
        </div>
  
        <div>
          <h2>Liste des lieux visités :</h2>
          <ul>
            {visitedPlaces.map((place, index) => (
              <li key={index}>
                {place}
                <button onClick={() => deleteVisitedPlace(index)} style={{ backgroundColor: '#AC87C5', color: '#fff' }}>
                  Supprimer <i className="fas fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
  
        <button onClick={addAllSuggestionsToList} style={{ backgroundColor: '#453C67', color: '#fff' }}>
          Ajouter 
          <i className="fas fa-plus-circle" style={{ marginLeft: '5px' }}></i>
        </button> &nbsp; &nbsp;
  
        <Link to="/home">
          <button style={{ backgroundColor: '#E0AED0', color: '#fff' }}>
            Retour
            <i className="fas fa-arrow-left" style={{ marginLeft: '5px' }}></i>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Plan;
