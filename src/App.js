import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/Nav';

import './App.css';
import * as api from './api';

import { addRocket } from './redux/rockets/rocketsReducer';

function App() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(async () => {
    if (rockets.length <= 0) {
      const apiResponse = await api.rockets();
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
