import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/students/{id}')
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ViewWrapper>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
