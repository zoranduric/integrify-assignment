import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './components/User';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header className=''>
        <p>Integrify Full-Stack Course React Pre-Assigment</p>
      </header>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/user/:id' element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
