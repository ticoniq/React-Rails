// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Greeting from './components/Greeting';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          to="/greetings"
        >
          Greetings
        </NavLink>
      </nav>
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
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
