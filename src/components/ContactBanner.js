import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 30px;
    padding: 5rem 3rem;
    text-align: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease;
  }
  .contactBanner__wrapper:hover {
    transform: translateY(-5px);
  }
  .contactBanner__heading {
    font-size: 4rem;
    color: var(--white);
    margin-bottom: 1rem;
  }
  .contactBanner__text {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--gray-1);
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
    .contactBanner__text {
      font-size: 1.5rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText className="contactBanner__text">
            Want to learn more about me? Let's talk!
          </PText>
          <h3 className="contactBanner__heading">Connect with me</h3>
          <Button btnText="Get in Touch" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
