import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace the API URL with the dog breed API
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setData(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Dog Breeds:</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {Object.keys(data).map(breed => (
            <li key={breed}>{breed}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Data;
