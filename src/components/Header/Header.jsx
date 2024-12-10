import React, { useState, useEffect } from 'react';
import {
  HeaderContainer,
  StyledLink,
  NLink,
  NavList,
  NavItem,
  NavSpan,
  SignSpan,
} from './Header.styled';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight); // Проверяет, прошли ли 100vh
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <StyledLink to="/SanityAi">
        <NavSpan isScrolled={isScrolled}>SANITY AI</NavSpan>
      </StyledLink>
      <NavList>
        <NavItem>
          <StyledLink to="/SanityAi#Products">
            <NavSpan isScrolled={isScrolled}>Products</NavSpan>
          </StyledLink>
        </NavItem>
        <NavItem>
          <NLink to="/Company">
            <NavSpan isScrolled={isScrolled}>Company</NavSpan>
          </NLink>
        </NavItem>
        <NavItem>
          <NLink to="/Services">
            <NavSpan isScrolled={isScrolled}>Services</NavSpan>
          </NLink>
        </NavItem>
      </NavList>
      <SignSpan isScrolled={isScrolled}>Sign up</SignSpan>
    </HeaderContainer>
  );
};