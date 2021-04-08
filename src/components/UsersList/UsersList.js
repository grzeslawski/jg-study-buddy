import React from 'react';
import { users } from 'data/users.js';
import UserListItem from 'components/UsersListItem/UserListItem';

function UsersList(props) {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
