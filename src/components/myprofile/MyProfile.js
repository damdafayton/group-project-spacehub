import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="mx-5">
      <h2>My Rockets</h2>
      <ul className="list-group">
        {reservedRockets.length
          ? reservedRockets.map((rocket) => (
            <li key={uuidv4()} className="list-group-item">{rocket.name}</li>))
          : <li>You haven't reserved any rockets yet.</li>}
      </ul>
    </section>
  );
}
