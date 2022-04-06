import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyProfile from './components/myprofile/MyProfile';
import Rockets from './components/rockets/Rockets';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/mission" element={<div className="text-center">UNDER CONSTRUCTION</div>} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  );
}

export default Router;
