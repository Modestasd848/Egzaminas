import React from 'react';
import { StyledBody, StyledForm, StyledInput } from './UserRegistration.styled';

export default function UserRegistration() {
  return (
    <StyledBody>
      <h2>New Client Registration</h2>
      <StyledForm>
        <div>
          <label htmlFor="name">Name</label>
          <StyledInput type="text" name="name" id="name" /> <br />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <StyledInput type="text" name="surname" id="surname" /> <br />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" id="email" /> <br />
        </div>
        <div>
          <label htmlFor="date">Date and Time</label>
          <StyledInput type="date" name="date" id="date" /> <br />
        </div>
      </StyledForm>
    </StyledBody>
  );
}
