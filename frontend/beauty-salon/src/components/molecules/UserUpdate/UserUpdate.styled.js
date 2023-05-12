import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const StyledModal = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
