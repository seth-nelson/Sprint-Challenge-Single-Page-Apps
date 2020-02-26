import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';

const StyledMain = styled.div`
  background-color: darkGray;
  text-align: center;
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
