import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin: 10% auto;
  border: 1px solid black;
  padding: 80px 20px;
  background-color: #e5bce2;
`;

export const StyledButton = styled.button`
  width: 30%;
  background-color: #3277ff;
  border: 0px;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 7px;
`;

export const StyledInput = styled.input`
  width: 50%;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
`;

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;
