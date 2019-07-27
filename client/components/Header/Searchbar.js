import React from 'react';
import { SEARCH_INPUT } from './styles';

const Searchbar = () => {
  return (
    <div id="search-bar">
      <form action="submit">
        <input
          type="text"
          name="search"
          placeholder="search"
          style={SEARCH_INPUT}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
