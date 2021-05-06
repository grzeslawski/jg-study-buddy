import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
