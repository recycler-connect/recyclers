import React from 'react';
import './Main/Main.css';

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h1>Welcome to Recycler Connect</h1>
      <p>
        We&apos;re on a mission to transform the way we handle surplus textiles, by connecting
        individuals like you, who have excess textiles, with state-of-the-art facilities ready to
        handle them responsibly. By using this tool, you&apos;re taking a step towards promoting
        sustainable textile waste management and circular economies. Let&apos;s work together to
        make every thread count in building a brighter future.
      </p>
      <p>
        Please enter your material&apos;s details below to find recycling facilities ready to give
        them new life.{' '}
      </p>
    </div>
  );
};

export default WelcomeMessage;
