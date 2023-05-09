import React from 'react';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from './Administrator.styled';

export default function AdministratorLogin() {
  return (
    <StyledForm>
      <StyledLabel htmlFor="username">Username</StyledLabel>
      <StyledInput type="text" name="username" id="username" />
      <br />
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput type="text" name="password" id="password" /> <br />
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
}
