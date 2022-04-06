import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionsContainer from './components/missions/missions.container';
import Profile from './components/profile/profile';
import Rockets from './components/rockets/Rockets';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/mission" element={<MissionsContainer />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default Router;
