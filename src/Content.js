import React from 'react';
import './Content.scss';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import CV from './components/CV';
import Contact from './components/Contact';
import About from './components/About';

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
