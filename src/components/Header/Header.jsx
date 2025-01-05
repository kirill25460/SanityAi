import React, { useState, useEffect } from 'react';
import { HeaderArrow, HeaderContainer, NavItem, NavList, SignUp, StyledLink } from './Header.styled';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <StyledLink to="/SanityAi" isScrolled={isScrolled}>SANITY AI</StyledLink>
      <NavList>
        <NavItem to="/SanityAi" isScrolled={isScrolled}>Products</NavItem>
        <NavItem to="/Company" isScrolled={isScrolled}>Company</NavItem>
        <NavItem to="/Services" isScrolled={isScrolled}>Services</NavItem>
      </NavList>
      <SignUp isScrolled={isScrolled}>Sign up <HeaderArrow isScrolled={isScrolled} /></SignUp>
    </HeaderContainer>
  );
};