import React, { useContext } from 'react';
import { RecyclerContext } from 'src/context/RecyclerMainPage';
// import { recyclers } from 'src/data';
import Recycler from './Recycler';
import './Main/Main.css';

export default function ResultsList() {
  const { recyclerResults } = useContext(RecyclerContext);

  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/waves.jpeg'})`,
    width: '100vw',
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={myStyle}>
      <div className="results-message-container">
        <h2 className="results-message">You have {recyclerResults.length} matching recyclers! </h2>
        <p>Click on the recycler&apos;s cards below to link to each recycler&apos;s website</p>
      </div>
      <div className="results-container">
        <div className="results-list">
          {recyclerResults.length !== 0 &&
            // tsx error: Property 'data' does not exist on type 'RecyclerResultType[]'.ts(2339)
            recyclerResults.map((recycler) => <Recycler key={recycler.id} {...recycler} />)}
        </div>
      </div>
    </div>
  );
}
