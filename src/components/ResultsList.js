import React, { useContext } from 'react';
import { RecyclerContext, RecyclerResultType } from 'src/context/RecyclerMainPage';
// import { recyclers } from 'src/data';
import Recycler from './Recycler';

export default function ResultsList() {
  const { recyclerResults } = useContext(RecyclerContext);
  console.log('recycler results in resultsList', recyclerResults);

  return (
    <div>
      {recyclerResults.length !== 0 &&
        // tsx error: Property 'data' does not exist on type 'RecyclerResultType[]'.ts(2339)
        recyclerResults.data.map((recycler) => <Recycler key={recycler.id} {...recycler} />)}
    </div>
  );
}
