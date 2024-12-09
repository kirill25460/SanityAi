import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
position: fixed;
z-index: 999;
  background-color: transparent;
  width: 100vw;

  @media (min-width: 768px) {
 
  }
`;


export const StyledLink = styled(HashLink)`
  text-decoration: none;

`;

export const NLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  gap:40px;
  justify-content: space-between;

  @media (min-width: 768px) {
  
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;

  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;

color: #FFFFFF;


  @media (min-width: 768px) {


  }

  @media (min-width: 1400px) {
   
  }
`;

export const NavSpan = styled.span`
  position: relative;
  text-decoration: none;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;

color: #000;


  @media (min-width: 768px) {

  }

  @media (min-width: 1400px) {

  }

`;