import React, { useState } from 'react';
import { updateUser } from '../../../api-calls/users/users';
import {
  StyledOverlay,
  StyledModal,
  StyledForm,
  StyledInput,
  StyledButton,
} from './UserUpdate.styled';

export default function UserUpdate({ user, onUpdate }) {
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    registrationDate: user.registrationDate,
  });

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const data = await updateUser(user._id, updatedUser);
      onUpdate(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledOverlay onClick={() => onUpdate(user)}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledForm onSubmit={handleUpdate}>
          <StyledInput
            type="text"
            value={updatedUser.name}
            onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
            placeholder="Name"
            required
          />
          <StyledInput
            type="text"
            value={updatedUser.lastName}
            onChange={(e) => setUpdatedUser({ ...updatedUser, lastName: e.target.value })}
            placeholder="Last Name"
            required
          />
          <StyledInput
            type="email"
            value={updatedUser.email}
            onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
            placeholder="Email"
            required
          />
          <StyledInput
            type="datetime-local"
            value={updatedUser.registrationDate}
            onChange={(e) => setUpdatedUser({ ...updatedUser, registrationDate: e.target.value })}
            placeholder="Registration Date"
            required
          />
          <StyledButton type="submit">Update</StyledButton>
        </StyledForm>
      </StyledModal>
    </StyledOverlay>
  );
}
