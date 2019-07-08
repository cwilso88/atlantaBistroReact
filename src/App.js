import React from 'react';
import Header from './components/Header';
import Topimg from './components/Topimg';
import ContactUs from './components/ContactUs';

import OurStory from './components/OurStory';
import RandomQuote from './components/RandomQuote';
import SpecialMenu from './components/SpecialMenu';

import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
        <Topimg />
        <OurStory />
        <RandomQuote />
        <SpecialMenu />
        <ContactUs />
    </div>
  );
}

export default App;
