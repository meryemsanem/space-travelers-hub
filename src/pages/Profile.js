import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const { missions, joinedMissions } = useSelector((store) => store.missions);
  const { data, joinedRockets } = useSelector((store) => store.rockets);
  const reservedMissions = missions.filter((mission) => joinedMissions.includes(mission.id));
  const reservedRockets = data.filter((rocket) => joinedRockets.includes(rocket.id));
  return (
    <div className="profile">
      <table className="profile-missions">
        <thead>
          <tr>
            <th>Missions Joined</th>
          </tr>
        </thead>
        <tbody>
          {reservedMissions.map((mission) => (
            <tr key={mission.id}>
              <td>
                {mission.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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