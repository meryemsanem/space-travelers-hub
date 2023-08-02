import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { data } = useSelector((state) => state.rockets);
  const reservedRockets = data.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-rockets">
      <h2 className="my-rockets">My Rockets</h2>
      <div className="rockets-container-pro">
        {reservedRockets.map((rocket) => (
          <h2 className="rocket-name" key={rocket.id}>
            {rocket.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Profile;
