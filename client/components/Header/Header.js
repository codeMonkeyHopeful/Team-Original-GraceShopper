import React from 'react';

import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar';

import { HEADER_CONTAINER } from './styles';

const Header = () => {
  return (
    <header id="header-container" style={HEADER_CONTAINER}>
      <h2>Bester Buy</h2>
      <Searchbar />
      <Navbar />
    </header>
  );
};

export default Header;
