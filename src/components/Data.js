import React, { useState, useEffect } from 'react';

function Data() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    // Fetch dog breeds from the API and update the state
    fetch('https://dogapi.dog/api/v2/breeds?page[number]=1')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleBreedClick = breedName => {
    // Set the selected breed when a breed is clicked
    setSelectedBreed(breeds.find(breed => breed.attributes.name === breedName));
  };

  return (
    <div>
      <h1>Dog Breeds:</h1>
      <ul>
        {breeds.map(breed => (
          <li
            key={breed.id}
            onClick={() => handleBreedClick(breed.attributes.name)}
          >
            {breed.attributes.name}
          </li>
        ))}
      </ul>
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
  );
}

export default Data;
