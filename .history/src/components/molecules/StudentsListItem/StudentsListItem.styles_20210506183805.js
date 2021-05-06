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
