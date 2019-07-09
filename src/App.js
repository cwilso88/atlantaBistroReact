import React from 'react';

import "./sass/main.scss";

import Header from './components/Header';
import Topimg from './components/Topimg';
import ContactUs from './components/ContactUs';

import reviewsData from './data/reviewsData';

import OurStory from './components/OurStory';
import RandomQuote from './components/RandomQuote';
import SpecialMenu from './components/SpecialMenu';
import Reviews from './components/Reviews';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
        <Topimg />
        <OurStory />
        <RandomQuote />
        <SpecialMenu />
        <Reviews props={reviewsData} />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
