import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  margin-top: 10rem;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
    min-height: 100vh;
    overflow: hidden; /* Add this to prevent any overflow */
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left, .right {
    width: 100%;
    max-width: 500px;
    box-sizing: border-box; /* Ensures padding and borders are included in the width */
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    padding: 0 3rem; /* Adjust padding as needed and ensure it's included in the width calculation */
  }
  @media only screen and (max-width: 768px) {

    .contactSection__wrapper {
      flex-direction: column;
      overflow: visible; /* Allow content to flow normally in a stacked layout */
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left, .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem; /* Ensure padding doesn't cause overflow */
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+1(437)-351-3690" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="quanian031229@gmail.com"
            />
            <ContactInfoItem text="Toronto, ON, Canada" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
