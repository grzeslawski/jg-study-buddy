import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
