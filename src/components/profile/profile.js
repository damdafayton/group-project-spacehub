import React from 'react';
import MissionProfile from './mission.profile';
import RocketProfile from './rocket.profile';

function Profile() {
  return (
    <section id="profile" className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <RocketProfile />
        </div>
        <div className="col-lg-6">
          <MissionProfile />
        </div>
      </div>
    </section>
  );
}

export default Profile;
