// import React from 'react';
// import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Rocket() {
  const rocket = useSelector((store) => store.rockets);
  console.log(rocket);
  // return (
  //   <div className="single-rocket">
  //     <img src={rocket.image} alt="rocket" />
  //     <div className="rocket-info">
  //       <h1>{rocket.name}</h1>
  //       <p>{rocket.description}</p>
  //       <Button type="submit">Reserve Rocket</Button>
  //     </div>
  //   </div>
  // );
}

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
