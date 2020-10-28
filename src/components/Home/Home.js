import React from 'react';
import './Home.scss';
import { Tween } from 'react-gsap';
import { Button } from '../../elements/Buttons/Buttons';

import { ReactComponent as Portfolio } from '../../icons/portfolio-outline.svg';
import { ReactComponent as PortfolioFill } from '../../icons/portfolio-fill.svg';
import { ReactComponent as CV } from '../../icons/cv.svg';
import { ReactComponent as About } from '../../icons/info-outline.svg';
import { ReactComponent as Contact } from '../../icons/contact.svg';

const Home = () => {
  const links = [
    { href: '#Portfolio', icon: <Portfolio />, text: 'portfolio' },
    { href: '#CV', icon: <CV />, text: 'cv' },
    { href: '#About', icon: <About />, text: 'about' },
    { href: '#Contact', icon: <Contact />, text: 'contact' },
  ];

  return (
    <div className="Home" id="Home">
      <div className="Home__left-item">
        <Tween
          from={{ opacity: 0 }}
          stagger={0.2}
          duration={1}
          ease="power2.inOut"
        >
          <div className="Home__title">
            <h2>Fredrik Karlsson</h2>
            <span>Fullstack JavaScript Developer</span>
          </div>
          <div className="Home__heading">
            <p className="lilgraph">I build functional &</p>
            <p>user-friendly </p>
            <p>web apps</p>
          </div>
        </Tween>
      </div>
      <div className="Home__right-item">
        <img src="/bgphoto.jpg" alt="background" />
        <div className="Home__links">
          {links.map(({ href, icon, text }, i) => (
            <MenuLink
              href={href}
              delay={`0.${i * 2}`}
              icon={icon}
              text={text}
              key={text}
            />
          ))}
        </div>
        <div className="Home__introduction">
          <Tween
            from={{ x: 540 }}
            duration={1}
            stagger={0.2}
            ease="power2.inOut"
          >
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
          </Tween>
        </div>
      </div>
    </div>
  );
};

const MenuLink = ({ href = '#', delay = 0, icon = null, text = '' }) => {
  return (
    <a href={href}>
      <div className="Home__link">
        <Tween
          from={{ scale: 0 }}
          duration={2}
          delay={delay}
          ease="elastic.out(3, 1)"
        >
          {icon}
        </Tween>
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Home;
