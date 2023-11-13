import React, { useState, useEffect } from 'react';
import './Data.css';

function Data() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dog breeds from the API and update the state
    fetch('https://dogapi.dog/api/v2/breeds')
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data.data);
        setLoading(false); // Mark loading as false when data is loaded
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Mark loading as false in case of an error
      });
  }, []);

  const handleBreedClick = (breedName) => {
    setSelectedBreed(breeds.find((breed) => breed.attributes.name === breedName));
  };

  return (
    <div className="data-container">
      <div className="list-details">
        <h1>Dog Breeds:</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {breeds.map((breed) => (
              <li
                key={breed.id}
                onClick={() => handleBreedClick(breed.attributes.name)}
              >
                {breed.attributes.name}
              </li>
            ))}
          </ul>
        )}
        {selectedBreed && (
          <div>
            <h2>Selected Breed: {selectedBreed.attributes.name}</h2>
            <p>Description: {selectedBreed.attributes.description}</p>
            <p>Maximum Age: {selectedBreed.attributes.life.max} years</p>
            <p>Minimum Age: {selectedBreed.attributes.life.min} years</p>
            <p>
              Male Weight: {selectedBreed.attributes.male_weight.min} -{' '}
              {selectedBreed.attributes.male_weight.max} kg
            </p>
            <p>
              Female Weight: {selectedBreed.attributes.female_weight.min} -{' '}
              {selectedBreed.attributes.female_weight.max} kg
            </p>
          </div>
        )}
      </div>
      <div className="image-container">
        <img
          src="https://media.giphy.com/media/3oFzlW8dht4DdvwBqg/giphy.gif"
          alt="Dog sticker"
          className="breed-image"
        />
      </div>
    </div>
  );
}

export default Data;