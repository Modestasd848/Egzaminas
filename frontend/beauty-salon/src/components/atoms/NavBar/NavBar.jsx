import { StyledLink } from './NavBar.styled';

export default function NavBar() {
  return (
    <nav>
      <StyledLink to="/">Register</StyledLink>
      <StyledLink to="/">All Client</StyledLink>
    </nav>
  );
}
