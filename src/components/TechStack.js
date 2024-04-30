import React from 'react';
import styled from 'styled-components';

// You might move relevant styles to this file if necessary
const TechStackStyle = styled.div`
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 4rem;
  }
  .tech-icon-wrapper {
    display: inline-block;
    margin-right: 10px;
    text-align: center;
    position: relative;
    width: 100px;
  }
  .tech-icon {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  .tech-icon:hover {
    transform: scale(1.2);
  }
  .tech-name {
    display: none;
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    z-index: 100;
  }
  .tech-icon-wrapper:hover .tech-name {
    display: block;
  }
  .tech-fallback-icon {
    background-color: #ccc;
    color: #333;
    padding: 10px;
    border-radius: 5px;
  }
`;

const TechStack = ({ techStack }) => (
  <TechStackStyle>
    <div className="tech-stack">
      {techStack.map((tech, index) => (
        <div key={index} className="tech-icon-wrapper" title={tech.name}>
          {tech.image ? (
            <img src={tech.image} alt={tech.name} className="tech-icon" />
          ) : (
            <span className="tech-fallback-icon">{tech.name}</span>
          )}
          <span className="tech-name">{tech.name}</span>
        </div>
      ))}
    </div>
  </TechStackStyle>
);

export default TechStack;
