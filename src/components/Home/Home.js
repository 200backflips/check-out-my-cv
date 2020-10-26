import React from 'react';
import './Home.scss';
import { Button } from '../../elements/Buttons/Buttons';

import { ReactComponent as Portfolio } from '../../svg icons/portfolio-outline.svg';
import { ReactComponent as PortfolioFill } from '../../svg icons/portfolio-fill.svg';
import { ReactComponent as CV } from '../../svg icons/cv.svg';
import { ReactComponent as About } from '../../svg icons/info-outline.svg';
import { ReactComponent as Contact } from '../../svg icons/contact.svg';

const Home = () => {
  return (
    <div className="Home" id="Home">
      <div className="Home__left-item">
        <div className="Home__title">
          <h2>Fredrik Karlsson</h2>
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
            <div className="Home__link">
              <Portfolio />
              <p>portfolio</p>
            </div>
          </a>
          <a href="#CV">
            <div className="Home__link">
              <CV />
              <p>cv</p>
            </div>
          </a>
          <a href="#About">
            <div className="Home__link">
              <About />
              <p>about</p>
            </div>
          </a>
          <a href="#Contact">
            <div className="Home__link">
              <Contact />
              <p>contact</p>
            </div>
          </a>
        </div>
        <div className="Home__introduction">
          <p>
            I’m a web developer with a focus on frontend and user-friendly
            design. If you are looking to hire a passionate developer with a
            deep knowledge of JavaScript, don’t hesitate to{' '}
            <a href="#Contact" className="Home__contact">
              contact
            </a>{' '}
            me.
          </p>
          <div className="Home__button-wrapper">
            <Button
              title="portfolio"
              linkTo="#Portfolio"
              icon={<PortfolioFill />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
