import React from 'react';
import Header from './components/Header';
import Topimg from './components/Topimg';
import ContactUs from './components/ContactUs';
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Topimg />
      <ContactUs />
    </div>
  );
}

export default App;
