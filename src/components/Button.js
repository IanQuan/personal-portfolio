import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
    &:hover {
      transform: scale(1.05);
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

function renderButton(type, btnLink, btnText, download) {
  switch (type) {
    case 'internal':
      return (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      );
    case 'external':
      return (
        <a
          className="button"
          href={btnLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {btnText}
        </a>
      );
    case 'pdf':
      return (
        <a
          className="button"
          href={btnLink}
          target="_blank"
          rel="noopener noreferrer"
          download={download ? true : undefined}
        >
          {btnText}
        </a>
      );
    default:
      return null;
  }
}

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
  type = 'internal', // 'internal', 'external', 'pdf'
  download = false, // Additional prop to specify if the PDF should be downloaded
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {renderButton(type, btnLink, btnText, download)}
    </ButtonStyle>
  );
}
