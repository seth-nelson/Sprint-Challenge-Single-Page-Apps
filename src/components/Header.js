import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <div>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </div>
      <div>
        <NavLink className='nav-link' to='/'>
          <h3>Home</h3>
        </NavLink>
        <NavLink className='nav-link' to='/characters'>
          <h3>Characters</h3>
        </NavLink>
      </div>
    </header>
  );
}
