import styled from 'styled-components';

export const Wrapper = styled.li`
  padding: 25px 0;
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledAverage = styled.div`
  margin-right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
