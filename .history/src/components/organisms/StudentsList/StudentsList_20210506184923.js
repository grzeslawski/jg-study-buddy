import React from 'react';
import PropTypes from 'prop-types';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users = [] }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((usersData) => (
          <StudentsListItem key={usersData.name} userData={usersData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
