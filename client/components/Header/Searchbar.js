import React from 'react';
import { SEARCH_INPUT, SEARCH_BAR } from './styles';

const Searchbar = () => {
  return (
    <div id="search-bar" style={SEARCH_BAR}>
      <form action="submit">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            style={SEARCH_INPUT}
          />
          <button type="submit"> Search</button>
        </div>
        <hr style={{ width: '100vw' }} />
      </form>
    </div>
  );
};

export default Searchbar;
