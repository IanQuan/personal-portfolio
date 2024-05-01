import React from 'react';
import styled from 'styled-components';
import TechStack from './TechStack'; // Ensure TechStack can handle image rendering correctly.

const SkillsSectionStyles = styled.div`
  display: flex;
  flex-direction: column; // Changed to column to stack heading and cards
  align-items: center; // Center the heading and cards horizontally
  margin-top: 5rem;

  .skills-heading {
    font-size: 4rem; // Large font size for the heading
    color: var(--gray-1); // Use a light color variable
    text-align: center; // Center align the text
    margin-bottom: 3rem; // Space between heading and cards
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    width: 100%; // Ensure the grid takes full width
  }

  .skill-card {
    flex: 1;
    min-width: 300px; // Minimum width for smaller screens
    max-width: calc(50% - 2rem); // Adjust width minus the gap
    padding: 2rem;
    background-color: rgba(51, 51, 51, 0.7); // Semi-transparent background
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); // Soft shadow for depth
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease-in-out; // Smooth transition for transform

    .skills-title {
      font-size: 3rem;
      color: var(--gray-1);
      text-align: center;
      width: 100%;
      margin-top: 1rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 1.5rem;
    }

    .tech-icon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      .tech-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
      }
      .tech-name {
        font-size: 1.5rem;
        text-align: center;
      }
    }

    &:hover {
      transform: scale(1.05); // Scales up the card to 105% of its original size
    }
  }

  @media (max-width: 768px) {
    .skill-card {
      max-width: 100%; // Full width for smaller screens
      &:hover {
        transform: none; // Disables hover effect on smaller screens if desired
      }
    }
  }
`;

const SkillsSection = ({ skills }) => (
  <SkillsSectionStyles>
    <h1 className="skills-heading">SKILLS</h1> {/* New heading */}
    <div className="skills-grid">
      {' '}
      {/* This div wraps the cards */}
      {skills.map((skillSet, index) => (
        <div key={index} className="skill-card">
          <h2 className="skills-title">{skillSet.title}</h2>
          <TechStack techStack={skillSet.techStack} />
        </div>
      ))}
    </div>
  </SkillsSectionStyles>
);

export default SkillsSection;
