import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './Button'; 
import '@testing-library/jest-dom';

describe('Button Component', () => {
  test('renders internal link button with correct text and href', () => {
    render(
      <Router>
        <Button btnText="Internal Link" btnLink="/home" type="internal" />
      </Router>
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveTextContent('Internal Link');
    expect(linkElement.getAttribute('href')).toBe('/home');
  });

  test('renders external link button correctly', () => {
    render(
      <Button btnText="External Link" btnLink="http://example.com" type="external" />
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

});

