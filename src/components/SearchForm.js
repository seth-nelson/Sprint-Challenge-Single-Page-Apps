import React, { useState } from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: black;
  padding: 6px 10px;
  width: 60px;
 text-align: center;
  margin: 5px;
  border: 1px solid #00ff00;
  border-radius: 3px;
  color: #00ff00;
  &hover {
    background-color: #00ff00;
    color: black;
  }
`;

export default function SearchForm(props) {

  return (
    <section className="search-form">
      <form>
        <input
          type='text'
					onChange={props.handleInputChanges}
					value={props.searchQuery}
          placeholder={props.placeHolder}
        />
        <StyledButton type='submit'>Search</StyledButton>
      </form>
    </section>
  );
}
