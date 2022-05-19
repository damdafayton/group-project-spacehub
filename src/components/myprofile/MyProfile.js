import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function MyProfile() {
  const { rockets, missions } = useSelector((state) => state);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const { joined_mission: joinedMission, missions: Missions } = missions;
  const selectMission = (id) => Missions.find((mission) => mission.mission_id === id);
  return (
    <section className="container">
      <div className="row gy-3">
        <div className="col-lg-6">
          <h2 className="fs-4">My Rockets</h2>
          <ul className="list-group">
            {reservedRockets.length
              ? reservedRockets.map((rocket) => (
                <li key={uuidv4()} className="list-group-item">{rocket.name}</li>))
              : <li>You haven&apos;t reserved any rockets yet.</li>}
          </ul>
        </div>
        <div className="col-lg-6">
          <h2 className="fs-4"`>Joined Missions</h2>
          <ul className="list-group">
            {joinedMission.length
              ? joinedMission.map((id) => {
                const mission = selectMission(id);
                return (
                  <li key={mission.id} className="list-group-item">
                    {mission.mission_name}
                  </li>
                );
              })
              : <li>You have not joined any mission yet.</li>}
          </ul>
        </div>
      </div>

    </section>
  );
}
