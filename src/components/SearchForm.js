import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
        <input
          type='text'
					onChange={props.handleInputChange}
					value={props.searchQuery}
          placeholder={props.placeHolder}
        />
      </form>
    </section>
  );
}
