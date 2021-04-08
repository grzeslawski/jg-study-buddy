import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button.js';
import { Wrapper, StyledName, StyledAttendance } from './UserListItem.styles';
import Average from 'components/atoms/Average/Average.js';

function UserListItem({ userData: { average, name, attendance = '0%' } }) {
  return (
    <Wrapper>
      <Average average={average} />
      <div>
        <StyledName>{name}</StyledName>
        <StyledAttendance>attendance: {attendance}</StyledAttendance>
      </div>
      <Button />
    </Wrapper>
  );
}

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
