import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledBody,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './Administrator.styled';
import { useAuth } from '../../../Auth/Auth';

export default function AdministratorLogin() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <StyledForm>
      <StyledLabel htmlFor="username">Username</StyledLabel>
      <StyledInput
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />{' '}
      <br />
      <StyledButton
        type="button"
        onClick={() => {
          auth.signIn(user, () => {
            navigate('/users');
          });
        }}
      >
        Login
      </StyledButton>
    </StyledForm>
  );
}
