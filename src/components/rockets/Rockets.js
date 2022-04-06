/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { fetchRocketsAsync } from '../../redux/rockets/rocketsActions';
import Rocket from './Rocket';

export default function Rockets() {
  const dispatch = useDispatch();
  const {
    loading, rockets, error, reservations,
  } = useSelector((state) => state.rocket);

  useEffect(() => {
    dispatch(fetchRocketsAsync());
  }, []);
  const checkReservation = (id) => reservations.find((ids) => ids === id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {
       loading
         ? (
           <Spinner animation="border" role="status" className="text-center">
             <span className="visually-hidden">Loading...</span>
           </Spinner>
         )
         : error
           ? <h4 className="text-center">{error}</h4>
           : rockets.map((rocket) => (
             <Rocket
               key={rocket.id}
               reserved={checkReservation(rocket.id)}
               rocket={rocket}
             />
           ))
     }
        </div>
      </div>
    </div>
  );
}
