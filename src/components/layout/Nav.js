import {
  LogoContainer, LogoImg, LogoText, NavBarContainer, NavLinkContainer, NavLinks,
} from './nav.style';
import Logo from '../../icons/planet-1.png';

export default function Nav() {
  return (
    <NavBarContainer>
      <LogoContainer>
        <LogoImg src={Logo} />
        <LogoText>Space Hub</LogoText>
      </LogoContainer>
      <NavLinkContainer>
        <NavLinks to="/">Rocket</NavLinks>
        {' '}
        |
        <NavLinks to="/mission">Mission</NavLinks>
      </NavLinkContainer>
    </NavBarContainer>
  );
}
