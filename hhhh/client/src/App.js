import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    // Fetch data from the Node.js server when the component mounts
    fetch('/api/data') // Assuming your server exposes an endpoint at /api/data
      .then(response => response.json())
      .then(data => setServerData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React App!</h1>
        <p>Data from Node.js server: {serverData}</p>
      </header>
    </div>
  );
}

export default App;