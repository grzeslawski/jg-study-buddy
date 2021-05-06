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
      .get('/students')
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ViewWrapper>
      <UsersListusers={students}/>
    </ViewWrapper>
  );
};

export default Dashboard;
