import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import './Missions.css';

function Missions() {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

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
            <td className="button"><button type="button" className="td-join-mission">Join Mission</button></td>
          </tr>
        ))}
      </table>
    </>
  );
}
export default Missions;
