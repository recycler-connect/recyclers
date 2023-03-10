import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { recyclers } from '../data';
import { getRecyclers } from '../services/recyclers';
import Main from 'src/components/Main/Main';

export interface RecyclerResultType {
  id: number;
  company: string;
  location?: string;
}

type RecyclerContextType = {
  recyclerResults: RecyclerResultType[];
  setRecyclerResults: Dispatch<SetStateAction<RecyclerResultType[]>>;
  //add loading property so children can access it
};

const baseContext: RecyclerContextType = {
  recyclerResults: [],
  setRecyclerResults: () => null,
};

export const RecyclerContext = createContext<RecyclerContextType>(baseContext);

const RecyclerMainPage: React.FC = () => {
  const recyclerData = getRecyclers();
  // make sure to have empty array in state which we have done!
  // where we left off: need to utilize async somehow
  const [recyclerResults, setRecyclerResults] = useState<RecyclerResultType[]>([]);
  useEffect(() => {
    if (recyclerData) {
      setRecyclerResults(recyclerData);
    }
  }, [recyclerData]);

  return (
    <div>
      <RecyclerContext.Provider value={{ recyclerResults, setRecyclerResults }}>
        <Main />
      </RecyclerContext.Provider>
    </div>
  );
};

export default RecyclerMainPage;
