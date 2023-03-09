import React, { useContext } from 'react';
import { RecyclerContext, RecyclerResultType } from 'src/context/RecyclerMainPage';
// import { recyclers } from 'src/data';
import Recycler from './Recycler';

export default function ResultsList() {
  const { recyclerResults } = useContext(RecyclerContext);

  return (
    <div>
      {recyclerResults.map((recycler: RecyclerResultType) => (
        <Recycler key={recycler.id} {...recycler} />
      ))}
    </div>
  );
}
