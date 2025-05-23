import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = ({ user }) => {
  return (
    <div className="card text-center" style={{ display: 'flex' }}>
      <div className="card-header">
        <img src={user.profilePicture} alt={`${user.name}'s profile`} className="rounded-circle" width="100" height="100" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
