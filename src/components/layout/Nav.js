import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="mb-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'navlink-active' : undefined)}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/mission"
        className={({ isActive }) => (isActive ? 'navlink-active' : undefined)}
      >
        Missions
      </NavLink>
    </nav>
  );
}
