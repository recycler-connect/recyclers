import React from 'react';
import './Footer.css';

export default function Footer() {
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/redcloth.jpeg'})`,
    height: '50%',
    // marginTop: '-30px',
    fontSize: '40px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return <div className="footer">© Hana Acciaioli & Emily Sellers 2023</div>;
}
