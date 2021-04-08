import React from 'react';
import PropTypes from 'prop-types';

function UserListItem({ userData: { average, name, attendance = '0%' } }) {
  return (
    <li key={name}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
}

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
