import React from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

const ArrowNavigationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .arrow-button {
    margin: 0 0.5rem;
    width: fit-content;
    background-color: var(--deep-dark);
    padding: 0.5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    svg {
      width: 50px;
      pointer-events: none;
    }
    &:hover {
      background-color: #333; // Changes background color on hover
    }
  }
`;

export default function ArrowNavigation({ onPrev, onNext }) {
  return (
    <ArrowNavigationStyles>
      <div
        className="arrow-button prev"
        onClick={onPrev}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => event.key === 'Enter' && onPrev()}
        aria-label="Previous"
      >
        <MdArrowBack />
      </div>
      <div
        className="arrow-button next"
        onClick={onNext}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => event.key === 'Enter' && onNext()}
        aria-label="Next"
      >
        <MdArrowForward />
      </div>
    </ArrowNavigationStyles>
  );
}
