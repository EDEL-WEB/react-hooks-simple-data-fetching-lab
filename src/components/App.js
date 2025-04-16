import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error loading image</p>; 
  }

  return (
    <div>
      <h1>Data:</h1>
      <img
        src={data.message}
        alt="A Random Dog"
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
