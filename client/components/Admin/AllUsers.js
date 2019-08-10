import React from 'react';
const AllUsers = props => {
  const { users } = props;
  return (
    <div>
      {users.map(user => (
        <p>{user.email}</p>
      ))}
    </div>
  );
};

export default AllUsers;
