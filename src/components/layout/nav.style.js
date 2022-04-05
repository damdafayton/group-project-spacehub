import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.nav`
display: flex;
justify-content: space-between;
height: 50px;
padding: 30px 20px;
background-color: #eee;
`;

export const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const LogoImg = styled.img`
height: 50px;
width: 50px;
object-fit: cover;
`;
export const LogoText = styled.h1`
margin-left: 10px;
`;
export const NavLinkContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const NavLinks = styled(NavLink)`
margin-left: 10px;
`;
