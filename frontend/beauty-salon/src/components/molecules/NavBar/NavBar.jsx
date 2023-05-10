import { StyledLink, StyledNav } from './NavBar.styled';

export default function NavBar() {
  return (
    <StyledNav>
      <StyledLink to="/">Register</StyledLink>
      <StyledLink to="/">All Client</StyledLink>
    </StyledNav>
  );
}
