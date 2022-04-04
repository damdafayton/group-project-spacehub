import { BrowserRouter } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Router from './router';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
