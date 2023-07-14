import "@hotwired/turbo-rails";
import "./controllers";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Updated import statement

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
