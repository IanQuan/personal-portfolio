import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .error {
    color: red;
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const tempErrors = {};
    let isValid = true;

    if (!name.trim()) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!email.trim()) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Email is invalid.';
      isValid = false;
    }

    if (!message.trim()) {
      tempErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('Validation failed');
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <FormStyle ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email
          <input
            type="email"
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your message
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        {errors.message && <div className="error">{errors.message}</div>}
      </div>
      <button type="submit">Send</button>
    </FormStyle>
  );
}
