import React from 'react';
import MaterialFilter from '../MaterialFilter';
import WelcomeMessage from '../WelcomeMessage';
import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <WelcomeMessage />
      <MaterialFilter />
    </div>
  );
}
