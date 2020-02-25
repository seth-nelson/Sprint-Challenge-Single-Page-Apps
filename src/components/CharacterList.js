import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characterInfo, setCharacterInfo ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');

  const handleInputChanges = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
          setCharacterInfo(characters);
      })
      .catch(error => {
        console.log('Error!', error);
      })
  }, [searchQuery]);

  return (
    <div>
      <SearchForm placeHolder='Search Characters' searchQuery={searchQuery} handleInputChanges={handleInputChanges} />
      <section className="character-list">
        {characterInfo.map(character => {
          return (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
            />
          );
        })}
      </section>
    </div>
  );
}
