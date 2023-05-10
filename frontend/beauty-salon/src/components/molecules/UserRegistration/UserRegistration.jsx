import React, { useState } from 'react';
import { StyledBody, StyledForm, StyledInput } from './UserRegistration.styled';
import { registerNewUser } from '../../../api-calls/users/users';

export default function UserRegistration() {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    registrationDate: '',
  });

  async function createUser() {
    try {
      await registerNewUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledBody>
      <h2>New Client Registration</h2>
      <StyledForm>
        <div>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <StyledInput
            type="text"
            id="surname"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="date">Date and Time</label>
          <StyledInput
            type="datetime-local"
            id="date"
            value={user.registrationDate}
            onChange={(e) => setUser({ ...user, registrationDate: e.target.value })}
          />
        </div>
        <button type="button" onClick={createUser}>
          Add
        </button>
      </StyledForm>
    </StyledBody>
  );
}
