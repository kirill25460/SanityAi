import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: ${({ isScrolled }) => (isScrolled ? '#fff' : 'transparent')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.3)' : 'none')};
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

`;

export const StyledLink = styled(HashLink)`
  text-decoration: none;
`;

export const NLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
  transition: color 0.3s;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  gap: 30px; /* Единообразные расстояния между элементами */

  @media (min-width: 768px) {
    gap: 40px; /* Увеличение расстояний на больших экранах */
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  @media (min-width: 1400px) {
    font-size: 16px;
    line-height: 20px; /* Более крупный текст на больших экранах */
  }
`;

export const NavSpan = styled.span`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
  transition: color 0.3s;
  margin-left: 60px;

  &:hover {
    color: #007bff;
  }

  @media (min-width: 1400px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SignSpan = styled.p`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
  transition: color 0.3s;
  margin-right: 60px;

  &:hover {
    color: #007bff;
  }

  @media (min-width: 1400px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
