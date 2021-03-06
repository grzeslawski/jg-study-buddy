import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  margin-left: 20px;
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    width: 12px;
    height: 12px;
  }
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.error};
  }
`;
