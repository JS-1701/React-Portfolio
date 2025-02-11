import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email).toLowerCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required.');
    } else if (!validateEmail(email)) {
      setError('Email is invalid.');
    } else {
      setError('');
      console.log('Form submitted:', { name, email, message });
    }
  };

  return (
    <div className="contact">
      <h1><strong>Contact Me</strong></h1>
      <p>You can reach me at jschob93@gmail.com  </p>
      <form onSubmit={handleSubmit}>
        <strong>Name:</strong>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <strong>Email Address:</strong>
        <input
          type="email"
          placeholder="yourEmail@website.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       <strong>Message:</strong>
        <textarea
          placeholder="Your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}