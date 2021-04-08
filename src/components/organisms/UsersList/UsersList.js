import React from 'react';
import { users } from 'data/users.js';
import UserListItem from 'components/molecules/UsersListItem/UserListItem';
import { Wrapper, StyledList } from './UsersList.styles';

function UsersList() {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
