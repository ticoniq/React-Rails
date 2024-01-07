import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/" > Home </NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <NavLink
            className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
            to="/greetings">
            Greeting
          </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}