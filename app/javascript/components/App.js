import React from 'react';
import Greetings from './greetings'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
        <Route path="/greeting" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
