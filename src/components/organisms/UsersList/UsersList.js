import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((usersData) => (
            <UsersListItem deleteUser={deleteUser} key={usersData.name} userData={usersData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
