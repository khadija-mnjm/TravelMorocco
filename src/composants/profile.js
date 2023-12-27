// Profile.js
import React from 'react';

const Profile = () => {
  // Access user data from the route state
  const { userData } = window.history.state;

  return (
    <div>
      <h2>Profile Page</h2>
      {userData && (
        <>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <img src={userData.image} alt="Profile" />
        </>
      )}
    </div>
  );
};

export default Profile;
