import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectsInfo from '../assets/data/projects';
import Button from '../components/Button';
import PText from '../components/PText';
import SectionTitle from '../components/SectionTitle';
import TechStack from '../components/TechStack';
import ArrowNavigation from '../components/ArrowNavigation';
import ProjectImage from '../components/ProjectImage';

const ProjectStyle = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    min-height: 100vh;
  }

  .containerSecond {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .section-title {
    text-align: left;
  }
  .projectDetailSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  .projectDetailSection__left,
  .projectDetailSection__right {
    flex: 1;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .features-section {
    display: grid;
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Change this line to have 3 cards in a row */
    gap: 5rem;
    margin-top: 5rem;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 15rem;
  }

  .feature-card {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); // Makes the card slightly larger
      background-color: #333; // Changes background color on hover
    }

    ul {
      padding: 0;
    }

    li {
      margin-bottom: 0.8rem;
    }
  }

  .featureHeading {
    font-size: 2.3rem;
    font-family: Montserrat SemiBold;
    color: var(--white);
    margin-bottom: 0.9rem;
  }

  .tech-stack-title {
    font-size: 4rem;
    text-align: center; /* Center the title */
    width: 100%; /* Ensure the title spans the full width */
  }

  .arrowNavigation {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .problem-section {
    padding: 3rem;    
    font-size: 1.8rem;
    line-height: 1.8em;
    margin-bottom: 15rem;

    p {         
      max-width: 800px;
    }

    .question {
      color: #2C2C2C;
      font-size: 2.2rem;
      background-color: rgba(192, 189, 189, 1); 
      padding: 1rem;
      font-weight: bold; // Make the font bold
      display: inline-block; // Change display to inline-block for background to fit text
      margin-bottom: 1.5rem; // Optional: add some space below each question
    }
  }

  .apology-notice {
    text-align: left;
    font-size: 1.6rem;
    margin-top: 10rem;
    max-width: 850px;
  }

  @media only screen and (max-width: 1024px) {

    .features-section {
      grid-template-columns: repeat(2, 1fr); /* 2 cards in a row for tablets */
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;

    .container {
      flex-direction: column;
      text-align: center;
      margin-bottom: 10rem;
    }
    .projectDetailSection__left,
    .projectDetailSection__right {
      width: 100%;
    }
    .projectDetailSection__right {
      margin-top: 3rem;
    }
    .section-title,
    .tech-stack-title {
      /* Make sure all titles are centered */
      text-align: center;
    }
    .projectDetailSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
    .features-section {
      grid-template-columns: 1fr; /* 1 card in a row for mobiles */
      gap: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
      
    }
    .problem-section {
      font-size: 1.4rem;
      max-width: 550px;
  }
`;
const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectDetail() {
  const { projectName } = useParams();
  const navigate = useNavigate(); // Updated to useNavigate
  const [projectIndex, setProjectIndex] = useState(0);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const index = ProjectsInfo.findIndex(
      (p) => decodeURIComponent(projectName) === p.name
    );
    if (index > -1) {
      setProjectIndex(index);
      setProject(ProjectsInfo[index]);
    }
  }, [projectName]);

  const handlePrev = () => {
    const newIndex =
      projectIndex === 0 ? ProjectsInfo.length - 1 : projectIndex - 1;
    navigate(`/projects/${encodeURIComponent(ProjectsInfo[newIndex].name)}`);
  };

  const handleNext = () => {
    const newIndex =
      projectIndex === ProjectsInfo.length - 1 ? 0 : projectIndex + 1;
    navigate(`/projects/${encodeURIComponent(ProjectsInfo[newIndex].name)}`);
  };
  const renderText = (text) => {
    const paragraphs = text.split('\n');
    return paragraphs.map((paragraph, index) => {
      let match = paragraph.match(/^[^?]*\?/);
      if (match) {
        const question = match[0];
        const restOfParagraph = paragraph.substring(question.length);
  
        return (
          <React.Fragment key={index}>
            <div>
              <p className="question">{question}</p>
              <p>{restOfParagraph}</p>
            </div>
            {index !== paragraphs.length - 1 && <br />}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index !== paragraphs.length - 1 && <br />}
          </React.Fragment>
        );
      }
    });
  };
  
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <ProjectStyle>
        <div className="container">
          <div className="projectDetailSection__left">
            <SectionTitle subheading="" heading={project.name} />
            <PText noMargin>{project.desc}</PText>
            <div className="projectDetailSection__buttons">
              <Button
                btnText="Github"
                btnLink={project.github}
                type="external"
              />
              {project.other_link && project.other_link[1] && (
                <Button
                  btnText={project.other_link[0]}
                  btnLink={project.other_link[1]}
                  outline
                  type={project.other_link[0] === 'Report' ? 'pdf' : 'external'} // Determines type based on link description
                />
              )}
            </div>
          </div>
          <div className="projectDetailSection__right">
            <ProjectImage images={project.images} />
          </div>
        </div>

        <div className="containerSecond">
          <SectionTitle subheading="" heading={"Problem Statement"} />
          <div className="problem-section">
            {renderText(project.problem)}
          </div>
          <SectionTitle subheading="" heading={project.detail_title} />
          <div className="features-section">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h1 className="featureHeading">
                  <b>{feature.heading}</b>
                </h1>
                <ul>
                  {feature.description.map((point, idx) => (
                    <li key={idx}>
                      <PText>{point}</PText>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="techStack-section">
            <h1 className="tech-stack-title">Tech Stack</h1>
            <TechStack techStack={project.techStack} />
          </div>
        </div>
        <div className="arrowNavigation">
          <ArrowNavigation onPrev={handlePrev} onNext={handleNext} />
        </div>
      </ProjectStyle>
    </motion.div>
  );
}
