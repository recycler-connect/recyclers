import React, { useContext } from 'react';
import { RecyclerContext } from 'src/context/RecyclerMainPage';
// import { recyclers } from 'src/data';
import Recycler from './Recycler';
import './Main/Main.css';

export default function ResultsList() {
  const { recyclerResults } = useContext(RecyclerContext);

  return (
    <div className="results-list">
      <h3>You have {recyclerResults.length} matching recyclers: </h3>
      {recyclerResults.length !== 0 &&
        // tsx error: Property 'data' does not exist on type 'RecyclerResultType[]'.ts(2339)
        recyclerResults.map((recycler) => <Recycler key={recycler.id} {...recycler} />)}
    </div>
  );
}
