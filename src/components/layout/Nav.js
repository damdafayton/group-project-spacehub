import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
<<<<<<< HEAD
    <NavBarContainer>
      <LogoContainer>
        <LogoImg src={Logo} />
        <LogoText>Space Hub</LogoText>
      </LogoContainer>
      <NavLinkContainer>
        <NavLinks to="/">Rocket</NavLinks>
        &nbsp; &nbsp;
        <NavLinks to="/mission">Mission</NavLinks>
        &nbsp;|&nbsp;
        <NavLinks to="/profile">Profile</NavLinks>

      </NavLinkContainer>
    </NavBarContainer>
=======
    <nav>
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
>>>>>>> parent of 40cc77a... Added mission with redux persist
  );
}
