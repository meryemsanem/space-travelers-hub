import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';
import './Missions.css';

function Missions() {
  const missionData = useSelector((store) => store.missions);
  const { isLoading, missions, error } = missionData;
  const dispatch = useDispatch();
  function hundleJoinMission(id) {
    dispatch(joinMission(id));
  }
  function hundleLeaveMission(id) {
    dispatch(leaveMission(id));
  }
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }
  return (
    <>
      <table className="missions">
        <tr>
          <th className="mission">Mission</th>
          <th className="description">Description</th>
          <th className="status">Status</th>
          <th className="button">&nbsp;</th>
        </tr>
        {missions.map((mission) => (
          mission.reserved ? (
            <tr key={mission.id} className="rows">
              <td className="td-mission">{mission.name}</td>
              <td className="description td-description">{mission.description}</td>
              <td className="status"><span className="mission-status-leave">Active Member</span></td>
              <td className="button">
                <button type="button" className="td-leave-mission" onClick={() => hundleLeaveMission(mission.id)}>Leave Mission</button>
              </td>
            </tr>
          ) : (
            <tr key={mission.id} className="join-rows">
              <td className="td-mission">{mission.name}</td>
              <td className="description td-description">{mission.description}</td>
              <td className="status"><span className="mission-status-join">NOT A MEMBER</span></td>
              <td className="button">
                <button type="button" className="td-join-mission" onClick={() => hundleJoinMission(mission.id)}>Join Mission</button>
              </td>
            </tr>
          )
        ))}
      </table>
    </>
  );
}
export default Missions;
