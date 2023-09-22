// import { useUser } from '../../context/UserContext';
// import { signOut } from '../../services/auth';
import React from 'react';
import './Header.css';

export default function Header() {
  // const { user, setUser } = useUser();

  // const handleSignOut = async () => {
  //   try {
  //     await signOut();
  //     setUser(null);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };
  // const myStyle = {
  //   backgroundImage: `url(${process.env.PUBLIC_URL + '/redcloth.jpeg'})`,
  //   height: '50%',
  //   // marginTop: '-30px',
  //   fontSize: '40px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // };

  return (
    <header>
      {/* <header style={myStyle}> */}
      <img
        src="/rc-logo.png"
        // src={
        //   'https://png.pngtree.com/png-clipart/20220910/original/pngtree-semicircle-frame-simple-png-image_8531222.png'
        // }
        width="100"
        // height="50"
      />
      {/* <p className="header-title">recycler connect</p> */}
      {/* {user && (
        <>
          <div className="welcome">Welcome {user.email}</div>{' '}
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )} */}
    </header>
  );
}
