import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export const StyledSection = styled.section`
  margin: 5% auto;
  text-align: left;
  width: 60%;
  text-align: center;
  background-color: #8e9be5;
  padding: 7px;
`;

export const StyledH2 = styled.h2`
  font-weight: 500;
`;

export const StyledTr = styled.tr`
  height: 2rem;
`;

export const StyledTable = styled.table`
  margin: 5% auto;
  text-align: left;
  width: 80%;
  background-color: #e5e5e5;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  padding: 0px 5px;
  margin-left: 10px;
  margin-top: 5px;
`;

export const StyledAiFillEdit = styled(AiFillEdit)`
  color: orange;
  vertical-align: top;
`;

export const StyledAiFillDelete = styled(AiFillDelete)`
  color: red;
  vertical-align: top;
`;
