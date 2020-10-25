import React from 'react';
import './Portfolio.scss';
import Button from '../../elements/Button';
import { ReactComponent as Github } from '../../svg icons/github.svg';
import { ReactComponent as Monster1 } from '../../monster doodles/monster1.svg';
import { ReactComponent as Monster3 } from '../../monster doodles/monster3.svg';
import { ReactComponent as Monster4 } from '../../monster doodles/monster4.svg';
import { ReactComponent as Line } from '../../monster doodles/line5.svg';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="Portfolio__left-item">
        <img src="/bgphoto.jpg" alt="background" />
        <div className="Portfolio__left-container" id="Portfolio">
          <h2>Portfolio</h2>
          <p>
            Check out a few of the projects that I’ve deployed. If you’re
            interested in the code, it’s available on my Github profile along
            with about a dozen other repositories.
          </p>
          <div className="Portfolio__button-wrapper">
            <Button
              buttonText="see all my repos"
              linkTo="https://github.com/200backflips"
              openInNewTab={true}
              icon={<Github />}
            />
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
              <strong>email:</strong> secret
            </p>
          </div>
          <div className="Portfolio__links">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
