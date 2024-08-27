import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/portrait_sketch.png';
import ContactBanner from '../components/ContactBanner';
import Resume from '../assets/reports/Ian_Quan_Resume.pdf';
import SkillsSection from '../components/SkillsSection';
import { skills as allSkills } from '../assets/data/icons';

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

const AboutPageStyles = styled.div`
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative; // Make sure the parent is positioned relative
    min-height: 100vh;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    flex: 2;
    position: relative;
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const findTechIcons = (techNames) =>
  techNames.map((techName) => {
    const techData = allSkills[0].skills.find(
      (s) => s.name.toLowerCase() === techName.toLowerCase()
    );
    return techData || { name: techName, image: 'default-icon-path' }; // Provide a default icon if none found
  });
export default function About() {
  const skillSets = [
    {
      title: 'FrontEnd',
      techStack: findTechIcons([
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Bootstrap',
        'Redux',
        'Material UI',
        'Next.js',
        'Tailwindcss',
      ]),
    },
    {
      title: 'BackEnd',
      techStack: findTechIcons([
        'Node.js',
        'Django',
        'Firebase',
        'Flask',
        'MySQL',
        'Postgresql',
        'MongoDB',
        'Sqlite',
        'Postman',
      ]),
    },
    {
      title: 'AI/ML',
      techStack: findTechIcons([
        'Python',
        'TensorFlow',
        'Scikitlearn',
        'Keras',
        'OpenCV',
        'PyTorch',
        'Jupyter',
        'Google Colab',
        'Hugging Face',
      ]),
    },
    {
      title: 'Data Analysis',
      techStack: findTechIcons([
        'R',
        'Matplotlib',
        'Pandas',
        'NumPy',
        'Excel',
        'Selenium',
        'Kaggle',
      ]),
    },
    {
      title: 'Others',
      techStack: findTechIcons([
        'Java',
        'C',
        'Git',
        'Docker',
        'Figma',
        'Linux',
        'Jira',
        'Latex',
        'Netlify',
        'AWS',
        'Puppeteer',
      ]),
    },
  ];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ian Quan</span>
              </p>
              <div className="about__heading">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('A Software Engineer')
                      .pauseFor(800)
                      .deleteAll()
                      .typeString('A Data Analyst')
                      .pauseFor(800)
                      .deleteAll()
                      .typeString('An AI Engineer')
                      .pauseFor(800)
                      .deleteAll()
                      .typeString('A Research Assistant')
                      .pauseFor(800)
                      .start();
                  }}
                  options={{
                    loop: true,
                    autoStart: true,
                    delay: 50, // Faster typing speed
                    deleteSpeed: 50, // Faster deletion speed
                  }}
                />
              </div>

              <div className="about__info">
                <PText>
                  Hello! I'm Ian, a third-year undergraduate at the University
                  of Toronto, pursuing a double major in Computer Science and
                  Statistics.
                  <br /> <br />
                  With a strong foundation in software engineering and Data analysis, 
                  I bring over 2 years of experience as a research assistant and data analyst. I'm passionate about applying data science and software engineering skills to solve real-world challenges, always seeking creative and user-centered solutions.
                  <br />
                  <br />In my free time, I love playing basketball and working out, it helps me relieve stress! Another fun fact about me is that I love cooking, and I even cook for my friends regularly as a side hustle!
                </PText>
              </div>
              <Button btnText="Resume" btnLink={Resume} type="pdf" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <SkillsSection skills={skillSets} />
        </div>
      </AboutPageStyles>
    </motion.div>
  );
}
