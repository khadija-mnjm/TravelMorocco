import React from 'react';

const PlaceDetails = ({ place }) => (
  <div>
    <h3>{place.nom}</h3>
    <p>{place.description}</p>
    <p>Type: {place.type}</p>
    <p>Latitude: {place.latitude}</p>
    <p>Longitude: {place.longitude}</p>
    <img src={place.images} alt={place.nom} style={{ maxWidth: '100%' }} />
  </div>
);

export default PlaceDetails;
