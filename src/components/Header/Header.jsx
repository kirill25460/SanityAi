import {
  HeaderContainer,
  Link,
  NavItem,
  NavList,
  NavSpan,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <NavList>
        <NavItem>
          <Link to="/Products" >
            <NavSpan>Products</NavSpan>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Company" >
            <NavSpan>Company</NavSpan>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Services" >
            <NavSpan>Services</NavSpan>
          </Link>
        </NavItem>
      </NavList>
    </HeaderContainer>
  );
};
