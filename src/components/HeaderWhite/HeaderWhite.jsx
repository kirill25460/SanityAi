import { HeaderArrowWhite, HeaderContainerWhite, NavItemWhite, NavListWhite, SignUpWhite, StyledLinkWhite } from "./HeaderWhite.styled";

const HeaderWhite = () => {

    return (
        <HeaderContainerWhite>
            <StyledLinkWhite to="/SanityAi">SANITY AI</StyledLinkWhite>
            <NavListWhite>
                <NavItemWhite to="/SanityAi" >Products</NavItemWhite>
                <NavItemWhite to="/Company">Company</NavItemWhite>
                <NavItemWhite to="/Services">Services</NavItemWhite>
            </NavListWhite>
            <SignUpWhite >Sign up <HeaderArrowWhite /></SignUpWhite>
        </HeaderContainerWhite>
    );
}

export default HeaderWhite;