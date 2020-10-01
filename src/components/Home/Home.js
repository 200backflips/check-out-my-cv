import React from 'react';
import './Home.scss';
import Button from '../../elements/Button';

const Home = () => {
  const introduction = (
    <p>
      I’m a web developer with a focus on frontend and user-friendly design. If
      you are looking to hire a passionate coder with a deep knowledge of
      JavaScript, don’t hesitate to{' '}
      <a href="#Contact" className="Home__contact">
        contact
      </a>{' '}
      me.
    </p>
  );

  return (
    <div className="Home" id="Home">
      <p className="Home__heading">I build functional &</p>
      <div>
        <p className="Home__heading">user-friendly </p>
        <p className="Home__heading">web apps</p>
      </div>
      <div className="Home__introduction">
        {introduction}
        <div className="Home__buttons">
          <Button buttonText="portfolio" linkTo="#Portfolio" />
          <Button buttonText="cv" linkTo="#CV" />
        </div>
      </div>
    </div>
  );
};

export default Home;
