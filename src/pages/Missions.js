import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missionsSlice';
import './Missions.css';

function Missions() {
  const missionData = useSelector((store) => store.missions);
  const { isLoading, missions, error } = missionData;
  const dispatch = useDispatch();
  function hundleJoinMission(id) {
    dispatch(joinMission(id));
  }
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
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
          <tr key={mission.id} className="rows">
            <td className="td-mission">{mission.name}</td>
            <td className="description td-description">{mission.description}</td>
            <td className="status"><span className="mission-status">NOT A MEMBER</span></td>
            <td className="button"><button type="button" className="td-join-mission" onClick={() => hundleJoinMission(mission.id)}>Join Mission</button></td>
          </tr>
        ))}
      </table>
    </>
  );
}
export default Missions;
