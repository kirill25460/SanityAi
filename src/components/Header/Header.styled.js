import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../images/arrowHeader.svg';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled ? '#fff' : 'transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.3)' : 'none'};
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
`;

export const StyledLink = styled(HashLink)`
  text-decoration: none;
  font-weight: bold;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
  transition: color 0.3s;
  margin-left: 60px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const NavList = styled.div`
  display: flex;
  gap: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const SignUp = styled.span`
  font-size: 15px;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};

  transition: color 0.3s;
  margin-right: 60px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  fill: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};

  cursor: pointer;

  &:hover {
    color: #007bff;
    fill: #007bff;
  }
`;

export const HeaderArrow = styled(ArrowIcon)`
  margin-left: 5px;
`;
