import { NavLink } from 'react-router-dom';
import planet from '../../icons/planet.png';

export default function Nav() {
  return (
    <nav className="my-3 d-flex justify-content-between mx-sm-5">
      <span>
        <img alt="logo" src={planet} className="me-3" />
        <h1 className="text-nowrap">Space Traveler&apos;s Hub</h1>
      </span>
      <ul className="d-flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'navlink-active' : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/mission"
            className={({ isActive }) => (isActive ? 'navlink-active' : undefined)}
          >
            Missions
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/myprofile"
            className={({ isActive }) => (isActive ? 'navlink-active' : undefined)}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
