import React from 'react';
import {
  StyledAiFillDelete,
  StyledAiFillEdit,
  StyledButton,
  StyledH2,
  StyledSection,
  StyledTable,
  StyledTr,
} from './UserInfo.styled';

export default function UsersInfo() {
  return (
    <StyledSection>
      <StyledH2>adding and adjusting customers</StyledH2>
      <StyledTable>
        <tbody>
          <StyledTr>
            <th>Customer's first and last name </th>
            <th>Email</th>
            <th>registration date and time</th>
          </StyledTr>
          <StyledTr>
            <td>Modestas Pavardenis</td>
            <td>Modestaskazkoks@gmail.com</td>
            <td>2022-05-10 20:00</td>
            <StyledButton>
              <StyledAiFillEdit />
            </StyledButton>
            <StyledButton>
              <StyledAiFillDelete />
            </StyledButton>
          </StyledTr>
        </tbody>
      </StyledTable>
    </StyledSection>
  );
}
