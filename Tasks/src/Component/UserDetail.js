import React from 'react';

function UserDetail(props) {
  const { name, username, email } = props.user;
  return (
    <div>
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserDetail;
