import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import ExampleComponent from './ExampleComponent';

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
    <Provider store={store}>
      <ExampleComponent />
      <h1>
        {greeting.text}
      </h1>
    </Provider>
  );
}

export default App;
