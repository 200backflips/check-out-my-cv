import React from 'react';
import './Portfolio.scss';
import { Tween } from 'react-gsap';
import { Button } from '../../elements/Buttons/Buttons';
import Card from '../../elements/Card/Card';

import bookingmate from '../../projects/bookingmate.png';
import wayofnorris from '../../projects/wayofnorris.png';
import jakobfroden from '../../projects/jakobfroden.png';

import { ReactComponent as Github } from '../../icons/github.svg';
import { ReactComponent as Monster1 } from '../../svg/monster1.svg';
import { ReactComponent as Monster3 } from '../../svg/monster3.svg';
import { ReactComponent as Monster4 } from '../../svg/monster4.svg';
import { ReactComponent as Line } from '../../svg/line5.svg';
import { ReactComponent as Shapes } from '../../svg/shapes.svg';

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
            <Tween
              from={{ x: -350 }}
              duration={1}
              stagger={0.2}
              ease="power2.inOut"
              immediateRender={false}
            >
              <p>
                Check out a few of the projects that I’ve deployed. If you’re
                interested in the code, it’s available on my Github profile
                along with about a dozen other repositories.
              </p>
              <div className="Portfolio__button-wrapper">
                <Button
                  title="see all my repos"
                  linkTo="https://github.com/200backflips"
                  openInNewTab={true}
                  icon={<Github />}
                />
              </div>
            </Tween>
          </div>
          <div className="Portfolio__monster-doodles">
            <Monster3 />
            <Monster1 />
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
            {projects.map(({ img, project, tech, description, link }) => (
              <Card
                img={img}
                project={project}
                tech={tech}
                description={description}
                link={link}
                key={project}
              />
            ))}
          </div>
          <Shapes />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
