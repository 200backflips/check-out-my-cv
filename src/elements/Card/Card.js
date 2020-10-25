import React from 'react';
import './Card.scss';
import TitleWithLabel from '../TitleWithLabel/TitleWithLabel';

const Card = ({ projects }) => {
  return projects.map(({ img, project, tech, description, link }) => (
    <div className="Card" key={project}>
      <img src={img} alt="thumbnail" />
      <a
        href={link}
        className="Card__link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <TitleWithLabel title="Project" value={project} />
        <TitleWithLabel title="Tech" value={tech} />
        <TitleWithLabel title="Description" value={description} />
      </a>
    </div>
  ));
};

export default Card;
