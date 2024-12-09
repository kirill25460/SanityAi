import {
  HeaderContainer,
  NLink,
  NavItem,
  NavList,
  NavSpan,
  StyledLink,
} from './Header.styled';


export const Header = () => {



  return (
    <HeaderContainer>
        <StyledLink to="/SanityAi" ><NavSpan>SANITY AI</NavSpan></StyledLink>
      <NavList>
        <NavItem>
        <StyledLink  to="/SanityAi#Products">
            <NavSpan>Products</NavSpan>
          </StyledLink>
        </NavItem>
        <NavItem>
          <NLink to="/Company" >
            <NavSpan>Company</NavSpan>
          </NLink>
        </NavItem>
        <NavItem>
          <NLink to="/Services" >
            <NavSpan>Services</NavSpan>
          </NLink>
        </NavItem>
      </NavList>
      <p>Sign up</p>
    </HeaderContainer>
  );
};
