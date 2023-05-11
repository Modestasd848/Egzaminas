import React, { useState } from 'react';
import { StyledAiFillDelete, StyledAiFillEdit, StyledButton, StyledTr } from './User.styled';
import UserUpdate from '../UserUpdate/UserUpdate';

export default function User({ user, deleteButtonHandler, updateUser }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  function handleUpdate(updatedUser) {
    updateUser(updatedUser);
    setShowUpdateModal(false);
  }

  return (
    <StyledTr>
      <td>
        {user.name} {user.lastName}
      </td>
      <td>{user.email}</td>
      <td>
        {new Date(user.registrationDate).toLocaleString('lt-LT', {
          dateStyle: 'short',
          timeStyle: 'short',
        })}
      </td>
      <td></td>
      <td>
        <StyledButton onClick={() => setShowUpdateModal(true)}>
          <StyledAiFillEdit />
        </StyledButton>
        <StyledButton onClick={deleteButtonHandler}>
          <StyledAiFillDelete />
        </StyledButton>
        {showUpdateModal && (
          <td>
            <UserUpdate user={user} onUpdate={handleUpdate} />
          </td>
        )}
      </td>
    </StyledTr>
  );
}
