import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UsersProvider } from './context/UsersContext';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import User from './components/User';

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <Router>
        <header className=''>
          <p>Integrify Full-Stack Course React Pre-Assigment Spring 2022</p>
        </header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:id' element={<User />} />
        </Routes>
      </Router>
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
//   <Route path='/user/:id' element={<User />} />
