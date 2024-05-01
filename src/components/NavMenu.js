import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  MdHome,
  MdPerson,
  MdWork,
  MdContactMail,
  MdMenu,
  MdClose,
} from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%; // Center horizontally
  transform: translateX(-50%); // Adjust to exactly center the nav
  width: auto; // Auto width based on content
  padding: 0.7rem 1rem; // Uniform padding
  background: rgba(40, 40, 40, 0.8); // Semi-transparent background
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); // Soft shadow for floating effect
  border-radius: 30px; // Rounded corners for the nav box
  max-width: 960px; // Maximum width of the nav box
  margin-top: 0.5rem;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 10px; // Space between menu items
      border-radius: 12px;
      transition: background-color 0.5s ease, transform 0.5s ease;

      &:hover {
        background-color: var(--deep-dark);
        transform: scale(1.1); // Slight scale on hover
      }
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;

      .nav-text {
        display: none;
      }

      &:hover .nav-text {
        display: inline; // Show text on hover
      }
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }

  .navItems .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    width: 90%; // Make wider on smaller screens
    left: 5%; // Align with the page
    transform: none; // Remove transform on mobile for full-width adjustment

    .mobile-menu-icon {
      display: block;
    }

    .navItems {
      padding: 1rem;
      position: absolute;
      top: var(--top);
      right: 1rem; // Align to the right
      background-color: var(--deep-dark);
      border-radius: 12px;
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  const handleKeyDown = (event, action) => {
    // Trigger action on Enter or Space key press
    if (event.key === 'Enter' || event.key === ' ') {
      action();
    }
  };

  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        onKeyDown={(e) => handleKeyDown(e, () => setShowNav(!showNav))}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation"
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          onKeyDown={(e) => handleKeyDown(e, () => setShowNav(!showNav))}
          role="button"
          tabIndex={0}
          aria-label="Close navigation"
        >
          <MdClose />
        </div>
        {['/', '/about', '/projects', '/contact'].map((path, index) => (
          <li key={index}>
            <NavLink
              to={path}
              exact={path === '/'}
              onClick={() => setShowNav(!showNav)}
              onKeyDown={(e) => handleKeyDown(e, () => setShowNav(!showNav))}
              role="button"
              tabIndex={0}
            >
              {path === '/' && <MdHome />}
              {path === '/about' && <MdPerson />}
              {path === '/projects' && <MdWork />}
              {path === '/contact' && <MdContactMail />}
              <span className="nav-text">{path.substring(1) || 'Home'}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
}
