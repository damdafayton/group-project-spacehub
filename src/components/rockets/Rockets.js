import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';
import * as api from '../../api';

import { addRocket } from '../../redux/rockets/rocketsReducer';

import styles from './Rockets.module.scss';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  // Fetch Rockets from the api and dispatch into store
  useEffect(() => {
    if (rockets && rockets.length <= 0) {
      (async () => {
        const apiResponse = await api.rockets();
        console.log(apiResponse);
        apiResponse.forEach((object) => {
          dispatch(addRocket({
            id: object.id,
            name: object.rocket_name,
            flickrImages: object.flickr_images,
            description: object.description,
          }));
        });
      })();
    }
  }, []);

  return (
    <section
      className={`${styles.section} mx-sm-5`}
      style={{ gridTemplateRows: '1fr '.repeat(rockets.length) }}
    >
      {rockets.map((rocket) => (
        <div className="row mx-0" key={`rocket-${uuidv4()}`}>
          <img
            alt="rocket"
            src={rocket.flickrImages[0]}
            className={`${styles.rocket_image} col-12 col-md-3`}
          />
          <div className="col-12 col-md-9">
            <h2 className="fs-5">{rocket.name}</h2>
            <p>{rocket.description}</p>
            {/* <button type="button" className="btn btn-primary"></button> */}
            <Button variant="primary">Reserve Rocket</Button>
            {' '}
          </div>
        </div>
      ))}
    </section>
  );
}
