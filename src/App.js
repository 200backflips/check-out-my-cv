import React from 'react';
import './App.scss';

import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import CV from './components/CV/CV';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Portfolio />
      <CV />
      <About />
      <Contact />
    </div>
  );
}

export default App;
