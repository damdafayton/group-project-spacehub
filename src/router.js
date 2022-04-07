import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionsContainer from './components/missions/missionContainer';
import MyProfile from './components/myprofile/MyProfile';
import Rockets from './components/rockets/Rockets';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/mission" element={<MissionsContainer />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  );
}

export default Router;
