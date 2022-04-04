import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import * as api from '../../api';

import { addRocket } from '../../redux/rockets/rocketsReducer';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  // Fetch Rockets from the api and dispatch into store
  useEffect(() => {
    if (rockets && rockets.length <= 0) {
      (async () => {
        const apiResponse = await api.rockets();

        apiResponse.forEach((object) => {
          dispatch(() => addRocket({
            id: object.id,
            name: object.name,
            flickrImage: object.flickr_image,
          }));
        });
      })();
    }
  }, []);

  return (
    rockets.map((rocket) => <div key={`rocket-${uuidv4()}`}>{rocket}</div>)
  );
}
