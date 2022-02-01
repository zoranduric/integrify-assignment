import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./components/About";
import User from "./components/User";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header className="">
        <p>Integrify Full-Stack Course React Pre-Assigment</p>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
