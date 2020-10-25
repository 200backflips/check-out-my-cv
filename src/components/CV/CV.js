import React from 'react';
import './CV.scss';
import { ReactComponent as Monster } from '../../monster doodles/monster2.svg';
import TitleWithLabel from '../../elements/TitleWithLabel/TitleWithLabel';

const CV = () => {
  const entries = [
    {
      employer: 'Oneflow',
      title: 'Frontend Developer',
      duration: 'nov 2020 - current',
      tech: 'React etc.',
      description:
        'Development of a completely web based digital contract solution',
    },
    {
      employer: 'Gordon Delivery',
      title: 'Frontend Developer',
      duration: 'may 2020 - aug 2020',
      tech: 'React, Svelte, Sass, Leaflet Maps, Figma, Zendesk',
      description:
        'Development of a complete software solution for a company in the last mile delivery business.',
    },
    {
      employer: '</salt>',
      title: 'Fullstack JavaScript Developer',
      duration: 'sep 2019 - apr 2020',
      tech: 'Node, Express, React, MongoDB, HTML, CSS and more',
      description:
        'A fast paced 13 week bootcamp turning hobby coders to complete fullstack JavaScript developers.',
    },
    {
      employer: 'Qliro AB',
      title: 'Customer Service Agent',
      duration: 'nov 2017 - aug 2019',
      tech: 'Aptic ARC, Zendesk',
      description:
        'Customer service in Norwegian, Swedish and Danish for a payment service/fintech company. Some customer data maintenance as well.',
    },
  ];
  return (
    <div className="CV">
      <div className="CV__left-item">
        <h2 id="CV">CV</h2>
      </div>
      <div className="CV__container">
        <div className="CV__entries">
          <Entry entries={entries} />
        </div>
      </div>
      <div className="CV__right-item">
        <img src="/bgphoto.jpg" alt="background" />
        <Monster />
      </div>
    </div>
  );
};

const Entry = ({ entries }) => {
  return entries.map(({ employer, title, duration, tech, description }, i) => (
    <div className="CV__entry" key={i}>
      <TitleWithLabel title="Employer" value={employer} />
      <TitleWithLabel title="Title" value={title} />
      <TitleWithLabel title="Duration" value={duration} />
      <TitleWithLabel title="Tech/Tools" value={tech} />
      <TitleWithLabel title="Description" value={description} />
    </div>
  ));
};

export default CV;
