import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { asyncFetchRockets, reserveRocket, cancelReservation } from '../../redux/rockets/rocketsReducer';

import styles from './Rockets.module.scss';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  function reserveButtonHandler(e) {
    const id = e.target.getAttribute('data-rocket-id');
    dispatch(reserveRocket({ id }));
  }

  function cancelButtonHandler(e) {
    const id = e.target.getAttribute('data-rocket-id');
    dispatch(cancelReservation({ id }));
  }

  // Fetch Rockets from the api and dispatch into store
  useEffect(() => {
    if (rockets && rockets.length <= 0) {
      dispatch(asyncFetchRockets());
    }
  }, []);

  return (
    <section
      className={`${styles.section} mx-sm-5`}
      style={{ gridTemplateRows: '1fr '.repeat(rockets.length) }}
    >
      {rockets && rockets.map((rocket) => (
        <div className="row mx-0" key={`rocket-${uuidv4()}`}>
          <img
            alt="rocket"
            src={rocket.flickrImages[0]}
            className={`${styles.rocket_image} col-12 col-md-3`}
          />
          <div className="col-12 col-md-9">
            <h2 className="fs-5">{rocket.name}</h2>
            <p>
              {
                rocket.reserved
                && <span className="badge bg-success me-2">Reserved</span>
              }
              {rocket.description}
            </p>
            <button
              data-rocket-id={rocket.id}
              onClick={rocket.reserved ? cancelButtonHandler : reserveButtonHandler}
              className={rocket.reserved ? 'btn btn-outline-secondary' : 'btn btn-primary'}
              type="button"
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
