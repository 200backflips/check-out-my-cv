import React from 'react';
import './App.scss';
import Content from './Content';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <img src="/bg.jpg" className="App__bg-photo" alt="background" />
      <div className="App__container">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
