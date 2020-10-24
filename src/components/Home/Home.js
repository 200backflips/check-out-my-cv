import React from 'react';
import './Home.scss';
import Button from '../../elements/Button';

import portfolio from '../../svg icons/portfolio-outline.svg';
import cv from '../../svg icons/cv.svg';
import about from '../../svg icons/info-outline.svg';
import contact from '../../svg icons/contact.svg';

const Home = () => {
  const heading = 'Functional and user-friendly web apps';

  const introduction = (
    <p>
      I’m a web developer with a heavy focus on frontend and user-friendly
      design. I’m based in Stockholm and currently available for full-time,
      part-time, remote or freelance work. If you are looking to hire a
      passionate developer with a deep knowledge of JavaScript, don’t hesitate
      to{' '}
      <a href="#Contact" className="Home__contact">
        contact
      </a>{' '}
      me.
    </p>
  );

  return (
    <div className="Home" id="Home">
      <div className="Home__left-item">
        <div className="Home__title">
          <h3>Fredrik Karlsson</h3>
          <span>Fullstack JavaScript Developer</span>
        </div>
        <div className="Home__heading">
          <p>I build functional &</p>
          <p>user-friendly </p>
          <p>web apps</p>
        </div>
      </div>
      <div className="Home__right-item">
        <img src="/bgphoto.jpg" alt="background" />
        <div className="Home__links">
          <a href="#Portfolio">
            <img src={portfolio} alt="portfolio" />
            portfolio
          </a>
          <a href="#CV">
            <img src={cv} alt="cv" />
            cv
          </a>
          <a href="#About">about</a>
          <a href="#Contact">
            <img src={contact} alt="contact" />
            contact
          </a>
        </div>
        <div className="Home__introduction">{introduction}</div>
        <div className="Home__button-wrapper">
          <Button buttonText="portfolio" linkTo="#Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Home;
