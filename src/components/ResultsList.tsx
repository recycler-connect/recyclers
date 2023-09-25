import React, { useContext } from 'react';
import { RecyclerContext } from 'src/context/RecyclerMainPage';
import Recycler from './Recycler';
import './ResultsList.css';

export default function ResultsList() {
  const { recyclerResults } = useContext(RecyclerContext);

  // const myStyle = {
  //   backgroundImage: `url(${process.env.PUBLIC_URL + '/mustard-fabric.jpeg'})`,
  //   width: '100vw',
  //   backgroundSize: 'cover',
  //   // backgroundRepeat: 'no-repeat',
  // };

  return (
    <div>
      <div className="results-message-container">
        <div className="results-message">
          <h2>You have {recyclerResults.length} matching recyclers. </h2>
          <p>Click on the recycler&apos;s cards below to link to each recycler&apos;s website</p>
        </div>
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
