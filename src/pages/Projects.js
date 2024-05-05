import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

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

const projectVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1, // each card will appear with a delay of 0.1s between them
      duration: 0.5,
    },
  }),
};

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`;

export default function Projects() {
  const [projectsData] = useState(ProjectsInfo);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />

          <div className="projects__allItems">
            {projectsData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="initial"
                animate="animate"
                variants={projectVariants}
              >
                <Link to={`/projects/${encodeURIComponent(item.name)}`}>
                  <ProjectItem
                    title={item.name}
                    desc={item.desc}
                    img={item.images[0]}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </ProjectStyle>
    </motion.div>
  );
}
