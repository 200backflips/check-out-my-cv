import React, { useEffect } from 'react';
import './Home.scss';
import { gsap } from 'gsap';
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

  useEffect(() => {
    const tl1 = gsap.timeline({
      defaults: {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
    });

    tl1.from('.Home__title', {}).from('.Home__heading', {});

    gsap.from('.Home__introduction > p, .Home__button-wrapper', {
      x: 540,
      duration: 1,
      stagger: 0.2,
      ease: 'back.inOut(1.7)',
    });

    gsap.from('.Home__link > svg', {
      scale: 0,
      duration: 1,
      stagger: 0.5,
      ease: 'elastic.out(3, 1)',
    });
  }, []);

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
          {links.map(({ href, icon, text }) => (
            <MenuLink href={href} icon={icon} text={text} key={text} />
          ))}
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

const MenuLink = ({ href = '#', icon = null, text = '' }) => {
  return (
    <a href={href}>
      <div className="Home__link">
        {icon}
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Home;
