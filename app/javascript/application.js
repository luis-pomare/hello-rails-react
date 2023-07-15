import "@hotwired/turbo-rails";
import "./controllers";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/greeting" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
