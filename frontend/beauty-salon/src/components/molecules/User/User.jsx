import React from 'react';
import { StyledAiFillDelete, StyledAiFillEdit, StyledButton, StyledTr } from './User.styled';

export default function User({ user, deleteButtonHandler }) {
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
      <td>
        <StyledButton>
          <StyledAiFillEdit />
        </StyledButton>
        <StyledButton onClick={deleteButtonHandler}>
          <StyledAiFillDelete />
        </StyledButton>
      </td>
    </StyledTr>
  );
}
