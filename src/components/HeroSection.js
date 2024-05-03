import React from 'react';
import styled from 'styled-components';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import HeroImg from '../assets/images/cn_tower.jpg';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
      overflow: hidden; /* Ensures the text is clipped */
      white-space: nowrap; /* Keeps the text on a single line */
      width: 0;
      animation: typing 3.5s steps(40, end) forwards 0.5s,
        blink-caret 0.75s step-end infinite 0.5s;
    }
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -15rem;
  }
  .hero__info .para p {
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown img {
    max-height: 70px;
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 2rem;
          transform: rotate(360deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
const socialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 1, delay: 1 },
  },
};

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Ian Quan</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="Ian Quan" />
          </div>
          <div className="hero__info">
            <PText>
              Welcome to my personal website! Here you can learn more about me
              and my interests.
            </PText>
          </div>
          <div className="hero__social">
            <motion.div
              className="hero__social__indicator"
              initial="hidden"
              animate="visible"
              variants={socialVariants}
            >
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </motion.div>
            <div className="hero__social__text">
              <ul>
                {[
                  'https://www.linkedin.com/in/ian-quan-ca/',
                  'http://instagram.com/ianquanhk',
                  'http://github.com/ianquan',
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={socialVariants}
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={['LinkedIn', 'Instagram', 'Github'][index]}
                      className="social-icon"
                    >
                      {[<BsLinkedin />, <BsInstagram />, <BsGithub />][index]}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={socialVariants}
            >
              <p>Scroll</p>
              <img src={ScrollDownArrow} alt="Scroll Down Arrow" />
            </motion.div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
