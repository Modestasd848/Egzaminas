import React from 'react';
import { StyledButton, StyledH2, StyledSection, StyledTable } from './UserInfo.styled';

export default function UsersInfo() {
  return (
    <StyledSection>
      <StyledH2>adding and adjusting customers</StyledH2>
      <StyledTable>
        <tr>
          <th>Customer's first and last name </th>
          <th>Email</th>
          <th>registration date and time</th>
        </tr>
        <tr>
          <td>Modestas Pavardenis</td>
          <td>Modestaskazkoks@gmail.com</td>
          <td>2022-05-10 20:00</td>
          <StyledButton>Update</StyledButton>
          <StyledButton>Delete</StyledButton>
        </tr>
      </StyledTable>
    </StyledSection>
  );
}
