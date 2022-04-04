import { NavLink } from 'react-bootstrap';

const activeStyle = { color: 'red' };

export default function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/mission"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Missions
      </NavLink>
    </nav>
  );
}
