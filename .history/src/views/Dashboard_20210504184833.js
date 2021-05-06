import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('/students').then(({ data }) => setStudents(data.students));
  }, []);

  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
