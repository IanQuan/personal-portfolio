import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="Where I spend my time on"
          heading="Interests"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Software Engineering"
            desc="I build softwares. I am particularly interested in software architecture and design patterns"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Data Science"
            desc="I also love uncovering insights from data and build machine learning models for real life application."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Web Development"
            desc="I develop web applications with a passion in UI/UX desgin. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
