import React from 'react';
import { users } from 'data/users.js';
import UserListItem from 'components/molecules/UsersListItem/UserListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  detectMouseMove = () => {};

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => {
        this.setState({ users: data, isLoading: false });
      })
      .catch((err) => console.log(err));
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);

    this.setState({ users: filteredUsers });
  };

  componentDidUpdate(prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed');
    }
  }

  render() {
    return (
      <Wrapper>
        <StyledList>
          <h1>{this.state.isLoading ? 'Loading...' : 'Users List'}</h1>
          {this.state.users.map((userData) => (
            <UserListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
