import React from 'react';
import './Content.scss';

import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import CV from './components/CV/CV';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const Content = () => {
  return (
    <div className="Content">
      <Home />
      <Portfolio />
      <CV />
      <Contact />
      <About />
    </div>
  );
};

export default Content;
