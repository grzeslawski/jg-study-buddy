import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js';
import { Wrapper, StyledName, StyledAttendance } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average.js';

function UserListItem({ deleteUser, userData: { average, name, attendance = '0%' } }) {
  return (
    <Wrapper>
      <Average average={average} />
      <div>
        <StyledName>{name}</StyledName>
        <StyledAttendance>attendance: {attendance}</StyledAttendance>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
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
