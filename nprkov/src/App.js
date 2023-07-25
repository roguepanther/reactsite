import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
    </div>
  );
}

export default App;