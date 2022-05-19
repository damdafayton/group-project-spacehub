import { NavLink } from 'react-router-dom';
import planet from '../../icons/planet.png';

export default function Nav() {
  return (
    <nav className="my-3 d-flex justify-content-between mx-sm-5 align-items-center px-3 px-sm-0">
      <span className="d-flex align-items-center">
        <img alt="logo" src={planet} className="me-3" />
        <h1 className="text-nowrap d-sm-block d-none fs-3">Space Traveler&apos;s Hub</h1>
      </span>
      <ul className="d-flex">
        <li className="nav-li">
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
        <li className="nav-li">
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
