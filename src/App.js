import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';
import img from './img/img1_hal.jpg';

const StyledMain = styled.div`
  background-image: url(${img});
  text-align: center;
  
  img {
    opacity: 85%;
  }
`;

export default function App() {
  return (
    <StyledMain>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </StyledMain>
  );
}
