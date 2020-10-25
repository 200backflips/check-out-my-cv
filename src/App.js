import React from 'react';
import './App.scss';

import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import CV from './components/CV/CV';

function App() {
  return (
    <div className="App">
      <Home />
      <Portfolio />
      <CV />
    </div>
  );
}

export default App;
