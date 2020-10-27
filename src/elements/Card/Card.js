import React from 'react';
import './Card.scss';
import TitleWithLabel from '../TitleWithLabel/TitleWithLabel';

const Card = ({ projects }) => {
  return projects.map(({ img, project, tech, description, link }) => (
    <a
      href={link}
      className="Card"
      target="_blank"
      rel="noreferrer noopener"
      key={project}
    >
      <img src={img} alt="thumbnail" />
      <TitleWithLabel title="Project" value={project} />
      <TitleWithLabel title="Tech" value={tech} />
      <TitleWithLabel title="Description" value={description} />
    </a>
  ));
};

export default Card;
