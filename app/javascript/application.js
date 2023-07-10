// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
