import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRocketsData,
  reserveRocket,
  cancelReserveRocket,
} from '../redux/rockets/rocketsSlice';
import './styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const {
    isLoading, data, error, joinedRockets,
  } = useSelector(
    (state) => state.rockets,
  );
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
      {data.map((rocket) => (joinedRockets.includes(rocket.id) ? (
        <div className="rocket-left" key={rocket.id}>
          <img
            src={rocket.image}
            alt={rocket.name}
            className="rocket-image"
          />
          <div className="rocket-details">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-desc">
              {' '}
              <span className="reserved-badge">Reserved</span>
              {rocket.description}
            </p>
            <button
              type="button"
              className="rocket-btn cancel"
              data-testid={`cancel-reservation-button-${rocket.id}`}
              onClick={() => handleCancelReservationButtonClick(rocket.id)}
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      ) : (
        <div className="rocket-left" key={rocket.id}>
          <img
            src={rocket.image}
            alt={rocket.name}
            className="rocket-image"
          />
          <div className="rocket-details">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-desc">{rocket.description}</p>
            <button
              type="button"
              className="rocket-btn"
              key={rocket.id}
              data-testid={`reserve-button-${rocket.id}`}
              onClick={() => handleReserveButtonClick(rocket.id)}
            >
              Reserve Rocket
            </button>
          </div>
        </div>
      )))}
    </div>
  );
};
export default Rockets;
