import React from 'react';
import './Header.scss';

const Header = () => {
  const arrow = (
    <svg
      width="74"
      height="57"
      viewBox="0 0 74 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 23.5C9.50536 15.6012 8.50616 10.5949 2 1M2 1C16.1976 5.7519 21.3291 6.10891 26.5 3.5M2 1C29.1578 27.1074 44.5604 40.372 73 56.5"
        stroke="#FFC979"
      />
    </svg>
  );
  return (
    <div className="Header">
      <div className="Header__text">
        <h3>Fredrik Karlsson</h3>
        <p>Fullstack JavaScript Developer</p>
      </div>
      <div className="Header__links">
        <p>home</p>
        <p>porfolio</p>
        <p>cv</p>
        <p>contact</p>
        <p>about</p>
        <label className="Header__switch">
          <input type="checkbox" />
          <span className="Header__slider Header__slider-round"></span>
        </label>
      </div>
      {arrow}
      <span className="Header__warning">Do not press!</span>
    </div>
  );
};

export default Header;
