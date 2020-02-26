import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #3c89d0;
  text-shadow: 2px 2px black;
`;

const StyledLinks = styled.h3`
  text-decoration: none;
  color: #00ff00;
  :hover {
    color: red;
  }
`;

export default function Header() {
  return (
    <header className="ui centered">
      <div>
        <StyledHeader className="ui center">Rick &amp; Morty Fan Page</StyledHeader>
      </div>
      <div>
        <NavLink className='nav-link' to='/'>
          <StyledLinks>Home</StyledLinks>
        </NavLink>
        <NavLink className='nav-link' to='/characters'>
          <StyledLinks>Characters</StyledLinks>
        </NavLink>
      </div>
    </header>
  );
}
