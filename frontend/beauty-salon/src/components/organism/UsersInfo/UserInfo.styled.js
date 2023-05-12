import styled from 'styled-components';

export const StyledBody = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #007bff, #33bbff);
`;

export const StyledSection = styled.section`
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const StyledLogoutButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
