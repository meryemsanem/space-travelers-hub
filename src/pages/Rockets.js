import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRocketsData,
  reserveRocket,
  cancelReserveRocket,
} from '../redux/rockets/rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  const handleReserveButtonClick = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelReservationButtonClick = (rocketId) => {
    dispatch(cancelReserveRocket(rocketId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="rockets-container">
      {data.map((rocket) => (
        <div className="rocket-left" key={rocket.id}>
          <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          <div className="rocket-details">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-desc">{rocket.description}</p>
            <button
              type="submit"
              className="rocket-btn"
              onClick={() => handleReserveButtonClick(rocket.id)}
            >
              Reserve Rocket
            </button>
            <button
              type="button"
              className="rocket-btn"
              onClick={() => handleCancelReservationButtonClick(rocket.id)}
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
