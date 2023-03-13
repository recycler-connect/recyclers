import React, { useContext } from 'react';
import { RecyclerContext } from 'src/context/RecyclerMainPage';
// import { recyclers } from 'src/data';
import Recycler from './Recycler';

export default function ResultsList() {
  const { recyclerResults } = useContext(RecyclerContext);

  return (
    <div>
      {recyclerResults.length !== 0 &&
        // tsx error: Property 'data' does not exist on type 'RecyclerResultType[]'.ts(2339)
        recyclerResults.map((recycler) => <Recycler key={recycler.id} {...recycler} />)}
    </div>
  );
}
