import React from 'react';
import './Card.scss';
import TitleWithLabel from '../TitleWithLabel/TitleWithLabel';

const Card = ({ img, project, tech, description, link }) => {
  return (
    <a href={link} className="Card" target="_blank" rel="noreferrer noopener">
      <img src={img} alt="thumbnail" />
      <TitleWithLabel title="Project" value={project} />
      <TitleWithLabel title="Tech" value={tech} />
      <TitleWithLabel title="Description" value={description} />
    </a>
  );
};

export default Card;
