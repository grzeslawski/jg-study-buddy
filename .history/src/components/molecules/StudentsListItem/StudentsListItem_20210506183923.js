import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js';
import { Wrapper, StyledName, StyledAttendance } from './StudentsListItem.styles';
import Average from 'components/atoms/Average/Average.js';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' } }) {
  const { deleteUser } = useContext(UsersContext);

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

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
