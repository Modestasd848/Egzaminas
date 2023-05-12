import styled from 'styled-components';

export const StyledBody = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://zolmi.com/assets/img/com/blog/black-hair-salon-logo.png') no-repeat
    center center fixed;
  background-size: cover;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
