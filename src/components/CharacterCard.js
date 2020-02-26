import React from "react";

export default function CharacterCard({ image, name, gender, species, status}) {
  return (
    <div>
      <img src={image} alt='rick'></img>
      <h2>{name}</h2>
      <p>{gender}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  )
}
