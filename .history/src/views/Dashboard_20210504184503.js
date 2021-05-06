import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const params = useParams();

  return (
    <ViewWrapper>
      {console.log(params);}
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
