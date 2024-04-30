import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/profile_pic_circle.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Resume from '../assets/reports/Ian_Quan_Resume.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
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
    img {
      // border: 2px solid var(--gray-1);
    }
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

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ian Quan</span>
              </p>
              <h2 className="about__heading">A software engineer</h2>
              <div className="about__info">
                <PText>
                  Hello! I'm Ian Quan, a third-year undergraduate at the
                  University of Toronto, pursuing a double major in Computer
                  Science and Statistics.
                  <br /> <br />
                  With a strong foundation in Data analysis and software
                  engineering, I bring over 2 years of hands-on experience as a
                  research assistant and data analyst. I'm passionate about
                  applying data science and software developing skills to solve
                  real-world challenges, always seeking creative and
                  user-centered solutions.
                  <br />
                  <br />I thrive on building and enhancing products through
                  effective communication and experimentation. Having honed my
                  skills through various projects, I enjoy tackling problems and
                  continuously improving solutions.
                </PText>
              </div>
              <Button btnText="Resume" btnLink={Resume} type="pdf" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem title="School" items={['University of Toronto']} />
              <AboutInfoItem
                title="Degree"
                items={['B.Sc.(Hons) Computer Science and Statistics']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React.js',
                  'Bootstrap',
                  'Java Swing',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={[
                  'C',
                  'Node.js',
                  'REST API',
                  'Django',
                  'Firebase',
                  'Flask',
                  'MongoDB',
                  'PostgreSQL',
                  'SQLite',
                ]}
              />
              <AboutInfoItem
                title="AI/ML"
                items={[
                  'Python',
                  'R',
                  'OpenCV',
                  'Matplotlib',
                  'Pandas',
                  'PyTorch',
                  'Scikit-learn',
                  'TensorFlow',
                ]}
              />
              <AboutInfoItem
                title="Languages"
                items={['English', 'Cantonese', 'Mandarin']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Mar 2024"
                items={[
                  'Full Stack Web Developer',
                  '@ Global Health Core Inc.',
                ]}
              />
              <AboutInfoItem
                title="2023 - 2024"
                items={['Data Analyst', '@ University of Toronto']}
              />
              <AboutInfoItem
                title="Jan-Apr 2024"
                items={[
                  'Full Stack Software Developer',
                  '@ 0 Barriers Foundation',
                ]}
              />
              <AboutInfoItem
                title="Nov-Sep 2023"
                items={['Research Assistant', '@ University of Toronto']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
