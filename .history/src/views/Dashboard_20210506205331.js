import React from 'react';
import axios from 'axios';
import { Link, Redirect, useParams } from 'react-router-dom';
import UsersList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { TitleWrapper, Wrapper, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

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
        <UsersList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
