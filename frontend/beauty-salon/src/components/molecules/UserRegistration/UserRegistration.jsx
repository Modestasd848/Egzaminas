import React, { useState, useEffect } from 'react';
import {
  StyledBody,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledInputGroup,
  StyledLabel,
} from './UserRegistration.styled';
import { registerNewUser, getAllUsers } from '../../../api-calls/users/users';

export default function UserRegistration() {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    registrationDate: '',
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  async function createUser() {
    try {
      await registerNewUser(user);
      setUsers([...users, user]); // Pridedame naują vartotoją prie vartotojų sąrašo
      setUser({
        name: '',
        lastName: '',
        email: '',
        registrationDate: '',
      }); // Išvalome formos laukus
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledBody>
      <h2>New Client Registration</h2>
      <StyledForm>
        <StyledInputGroup>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="surname">Surname</StyledLabel>
          <StyledInput
            type="text"
            id="surname"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="date">Date and Time</StyledLabel>
          <StyledInput
            type="datetime-local"
            id="date"
            value={user.registrationDate}
            onChange={(e) => setUser({ ...user, registrationDate: e.target.value })}
          />
        </StyledInputGroup>
        <StyledButton type="button" onClick={createUser}>
          Add User
        </StyledButton>
      </StyledForm>
    </StyledBody>
  );
}
