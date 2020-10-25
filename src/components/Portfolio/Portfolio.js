import React from 'react';
import './Portfolio.scss';
import { Button } from '../../elements/Buttons/Buttons';
import Card from '../../elements/Card/Card';

import bookingmate from '../../projects/bookingmate.png';
import wayofnorris from '../../projects/wayofnorris.png';
import jakobfroden from '../../projects/jakobfroden.png';

import { ReactComponent as Github } from '../../svg icons/github.svg';
import { ReactComponent as Monster1 } from '../../monster doodles/monster1.svg';
import { ReactComponent as Monster3 } from '../../monster doodles/monster3.svg';
import { ReactComponent as Monster4 } from '../../monster doodles/monster4.svg';
import { ReactComponent as Line } from '../../monster doodles/line5.svg';

const Portfolio = () => {
  const projects = [
    {
      img: bookingmate,
      project: 'Lil booking Mate',
      tech: 'Vue, Vuex',
      description: 'A "hotel style" booking app',
      link: 'https://bookingmate.netlify.app/',
    },
    {
      img: wayofnorris,
      project: 'The Way of The Norris',
      tech: 'React, Sass',
      description: 'UI for the chucknorris.io API',
      link: 'https://wayofnorris.netlify.app/',
    },
    {
      img: jakobfroden,
      project: 'Jakob Frödén',
      tech: 'Svelte',
      description: 'A motion graphics design portfolio',
      link: 'https://jakobfroden.netlify.app/',
    },
  ];

  return (
    <div className="Portfolio">
      <div className="Portfolio__left-item">
        <img src="/bgphoto.jpg" alt="background" />
        <div className="Portfolio__left-container" id="Portfolio">
          <h2>Portfolio</h2>
          <div>
            <p>
              Check out a few of the projects that I’ve deployed. If you’re
              interested in the code, it’s available on my Github profile along
              with about a dozen other repositories.
            </p>
            <div className="Portfolio__button-wrapper">
              <Button
                title="see all my repos"
                linkTo="https://github.com/200backflips"
                openInNewTab={true}
                icon={<Github />}
              />
            </div>
          </div>
          <div className="Portfolio__monster-doodles">
            <Monster1 />
            <Monster3 />
            <Monster4 />
            <Line />
          </div>
        </div>
      </div>
      <div className="Portfolio__right-item">
        <div className="Portfolio__right-container">
          <h3>Deployed Projects</h3>
          <div className="Portfolio__login-credentials">
            <h4>Login Credentials</h4>
            <p>
              <strong>username:</strong> test@test.com
            </p>
            <p>
              <strong>password:</strong> secret
            </p>
          </div>
          <div className="Portfolio__links">
            <Card projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
