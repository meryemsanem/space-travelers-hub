import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const { data, joinedRockets } = useSelector((store) => store.rockets);

  const reservedRockets = data.filter((rocket) => joinedRockets.includes(rocket.id));
  return (
    <div className="profile">
      <table className="profile-rockets">
        <thead>
          <tr>
            <th>Rockets Reserved</th>
          </tr>
        </thead>
        <tbody>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Profile;
