import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/nav.css';

export default function Nav() {
  return (
    <div class='nav'> 
        <Link class='link' key={1} to="/">
          About Me
        </Link>
        <Link class='link' key={2} to="/contact">
          Contact Me
        </Link>
        <Link class='link' key={3} to="/portfolio">
          Portfolio
        </Link>
        <Link class='link' key={4} to="/resume">
          Resume
        </Link>
    </div>
  );
}
