import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import './components/googleFonts';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;