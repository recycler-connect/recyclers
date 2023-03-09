import React from 'react';
import MaterialFilter from '../MaterialFilter';
import ResultsList from '../ResultsList';
import WelcomeMessage from '../WelcomeMessage';
import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <WelcomeMessage />
      <MaterialFilter />
      <ResultsList />
    </div>
  );
}
