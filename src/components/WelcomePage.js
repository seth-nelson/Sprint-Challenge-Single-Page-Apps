import React from "react";
import styled from 'styled-components';

const StyledTitle = styled.div`
  color: white;
`;

const StyledMainImg = styled.img`
  margin: 20px;
  border-radius: 20px;
  border: 5px dotted dodgerblue;
  width: 80%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <StyledTitle>Welcome to the ultimate fan site!</StyledTitle>
        <StyledMainImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
