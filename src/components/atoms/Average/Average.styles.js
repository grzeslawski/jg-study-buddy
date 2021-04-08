import styled from 'styled-components';

const backgroundColorMixin = ({ average, theme }) => {
  switch (true) {
    case average < 2:
      return `background-color: ${theme.colors.grey}`;
    case average <= 3:
      return `background-color: ${theme.colors.error}`;
    case average > 3 && average < 4:
      return `background-color: ${theme.colors.warning}`;
    default:
      return `background-color: ${theme.colors.success}`;
  }
};

export const StyledAverage = styled.div`
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  ${backgroundColorMixin};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
