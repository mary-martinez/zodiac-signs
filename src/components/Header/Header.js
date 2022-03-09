import React from 'react';
import './Header.css';
import background from '../../background.jpg';

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      <h1>{`What's your sign?`}</h1>
    </header>
  );
}
