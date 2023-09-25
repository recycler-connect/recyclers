import React from 'react';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/red-textiles.jpeg'})`,
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={myStyle}>
      <div className="welcome-container">
        <div className="welcome-message">
          <h1>Welcome to Recycler Connect</h1>
          <p>
            We&apos;re on a mission to transform the way we handle surplus textiles, by connecting
            individuals like you, who have excess textiles, with state-of-the-art facilities ready
            to handle them responsibly.
          </p>
          <p>
            By using this tool, you&apos;re taking a step towards promoting sustainable textile
            waste management and circular economies. Let&apos;s work together to make every thread
            count in building a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
