import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Rockets from './components/rockets/Rockets';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/mission" element={<div>hi</div>} />
    </Routes>
  );
}

export default Router;
