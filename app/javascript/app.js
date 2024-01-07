import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Greeting from './pages/Greeting';
import Navbar from './components/Navbar';

function app() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="greetings"
            element={<Greeting />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default app