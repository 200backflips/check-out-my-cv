import React from 'react';
import './Home.scss';
import Button from '../elements/Button';

const Home = () => {
  const heading = 'Functional and user-friendly web apps';

  const introduction = (
    <p>
      I’m a web developer with a heavy focus on frontend and user-friendly
      design. I’m based in Stockholm and currently available for full-time,
      part-time, remote or freelance work. If you are looking to hire a
      passionate developer with a deep knowledge of JavaScript, don’t hesitate
      to <strong>contact</strong> me.
    </p>
  );

  return (
    <div className="Home" id="Home">
      <span className="Home__heading">{heading}</span>

      {introduction}
      <div className="Home__buttons">
        <Button buttonText="portfolio" />
        <Button buttonText="cv" />
      </div>
    </div>
  );
};

export default Home;
