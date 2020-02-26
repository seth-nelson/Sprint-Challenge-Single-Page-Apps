import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div` 
  background-color: 008f11;
  border-radius: 10px;
  border: 2px solid 3c89d0;
  text-align: center;
`;

const StyledImg = styled.img`
  border-radius: 20px;
  border: 3px solid #3c89d0; 
`;

export default function CharacterCard({ image, name, gender, species, status}) {
  return (
    <StyledDiv>
      <StyledImg src={image} alt='rick'></StyledImg>
      <h2>{name}</h2>
      <p>{gender}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </StyledDiv>
  )
}
