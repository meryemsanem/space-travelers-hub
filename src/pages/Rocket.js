import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rockets';
import { fetchRocketsData } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const { isLoading, data, error } = useSelector((store) => store.rockets);
  console.log(isLoading, data, error);
  // console.log(rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsData());
  }, []);

  // if (!data) {
  //   return <div>Loading data...</div>;
  // }
  // if (isLoading === true) {
  //   return <div>Rockets are loading..</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <>
      <p>Hello</p>
      <div className="allRockets">
        { {data.map((rockets) => (
        <Rocket key={rockets.id} rocket={rockets} />
      ))} }
      </div>
    </>
  );
}

export default Rockets;