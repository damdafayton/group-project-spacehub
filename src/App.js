import { BrowserRouter } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Router from './router';

import './App.scss';

const githubBasename = process.env.REACT_APP_BASENAME || '/';

function App() {
  return (
    <BrowserRouter basename={githubBasename}>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
