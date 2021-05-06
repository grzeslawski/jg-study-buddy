import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Redirect, useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { TitleWrapper, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}
            </Link>
          ))}
        </nav>
      </TitleWrapper>

      <GroupWrapper>
        <UsersList users={students} />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
