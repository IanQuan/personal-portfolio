import React from 'react';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.7s ease;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    transition: transform 0.7s ease;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);

    .projectItem__img img {
      transform: scale(1.1);
    }
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = 'ProjectImg',
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
