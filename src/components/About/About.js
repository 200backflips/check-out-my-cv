import React, { useState } from 'react';
import './About.scss';
import { ReactComponent as Head } from '../../svg/feggehead.svg';

const About = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      text:
        '"Fredrik did a good job working as a Frontend developer at Gordon, and he worked with several projects and modules, such as tracking page, last mile platform etc. He is a social and outgoing person, and has the potential to become an amazing developer!"',
      img: '/thumbnail1.png',
      name: 'Andreas Viklund',
      title: 'CTO at Gordon Delivery',
    },
    {
      text:
        '"During our time at the School of Applied Technology, Fredrik demonstrated a great enthusiasm for development, and an ability to learn new subjects with ease. The best part of having him in your team, is that he brings such joy and fun everyday, and anyone would be lucky to have him at their workplace. Hope to work together some day in the future!"',
      img: '/thumbnail2.jpeg',
      name: 'Paulina Ludwig',
      title: 'Software Engineer at Uibquiti Inc.',
    },
  ];

  return (
    <div className="About">
      <div className="About__left-item">
        <img src="/bgphoto.jpg" alt="background" className="About__bg" />
        <div className="About__left-container" id="About">
          <h2>About</h2>
          <div className="About__text">
            <p>
              I’m based in Stockholm, Sweden and I have worked in software
              development since 2019. I'm an analytical thinker as well as a
              creative. Everyday I strive towards some form of improvement or
              personal development, be it profound changes or the tiniest of
              baby steps.
            </p>
            <p>
              My passions in life are software development, music (I've produced
              and written music for 15+ years) and high level problem solving -
              Preferably together with awesome people. For the past 11 years
              I've also been working on getting my black belt in Brazilian Jiu
              Jitsu.
            </p>
          </div>
          <div>
            <h3>Testimonials</h3>
            <div className="About__testimony">
              <p>{testimonials[index].text}</p>
              <div className="About__testimony--author">
                <img src={testimonials[index].img} alt="author" />
                <p>
                  <strong>{testimonials[index].name}</strong>
                </p>
                <p>{testimonials[index].title}</p>
              </div>
              <div className="About__buttons">
                <input
                  type="radio"
                  name="testimonies"
                  value={0}
                  onChange={e => setIndex(+e.target.value)}
                  checked={index === 0}
                />
                <input
                  type="radio"
                  name="testimonies"
                  value={1}
                  onChange={e => setIndex(+e.target.value)}
                  checked={index === 1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About__right-item">
        <div className="About__right-container">
          <h3>Skills</h3>
          <div className="About__skills">
            <div className="About__list">
              <h4>JAVASCRIPT</h4>
              <p>Node</p>
              <p className="About__indent">Express</p>
              <p>React</p>
              <p className="About__indent">Redux</p>
              <p>React Native</p>
              <p>Svelte</p>
              <p>Vue</p>
              <p className="About__indent">Vuex</p>
            </div>
            <div className="About__list">
              <h4>HTML5</h4>
              <div>
                <h4>CSS3</h4>
                <p>Sass</p>
              </div>
              <h4>MONGODB</h4>
              <h4>GIT</h4>
            </div>
          </div>
          <div>
            <h4>AGILE METHODS</h4>
            <p>Scrum</p>
            <p>Kanban</p>
          </div>
          <Head />
        </div>
      </div>
    </div>
  );
};

export default About;
