import React, { useEffect, useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState([]);

  useEffect(() => {
    fetch('/greeting/api')
      .then(response => response.json())
      .then(data => {
        setGreeting(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <h1>
      {greeting.text}
    </h1>
  );
}

export default App;
