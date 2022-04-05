import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionsContainer from './components/missions/missions.container';
import Rockets from './components/rockets/Rockets';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/mission" element={<MissionsContainer />} />
    </Routes>
  );
}

export default Router;
