import React from 'react';
import './Header.scss';

const Header = () => {
  const arrow = (
    <svg
      width="95"
      height="74"
      viewBox="0 0 95 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M90.4085 43.8108C83.2747 54.0579 84.5695 60.5525 93 73M93 73C74.6031 66.8354 67.9538 66.3722 61.2535 69.7568M93 73C57.8097 39.1309 37.8513 21.9228 0.999995 0.999996"
        stroke="#FFC979"
      />
    </svg>
  );
  return (
    <div className="Header">
      <div className="Header__text">
        <h3>Fredrik Karlsson</h3>
        <span>Fullstack JavaScript Developer</span>
      </div>
      <div className="Header__links">
        <a href="#Home">home</a>
        <a href="#Portfolio">portfolio</a>
        <a href="#CV">cv</a>
        <a href="#Contact">contact</a>
        <a href="#About">about</a>
        <label className="Header__switch">
          <input type="checkbox" />
          <span className="Header__slider Header__slider-round"></span>
        </label>
      </div>
      <span className="Header__warning">Do not press!</span>
      {arrow}
    </div>
  );
};

export default Header;
