import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
