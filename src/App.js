import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Router from './router';

import './App.css';
import * as api from './api';

import { addRocket } from './redux/rockets/rocketsReducer';

function App() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (0 > 1 && rockets) {
      const apiResponse = api.rockets().then((res) => res);
      console.log(apiResponse);

      apiResponse.forEach((object) => {
        dispatch(() => addRocket({
          id: object.id,
          name: object.name,
          flickrImage: object.flickr_image,
        }));
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
