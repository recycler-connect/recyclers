import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { recyclers } from '../data';
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
  // const recyclerData = fetchRecyclerData()
  // make sure to have empty array in state
  const [recyclerResults, setRecyclerResults] = useState<RecyclerResultType[]>(recyclers);

  //   useEffect (() => {
  //     if (recyclerData) {
  //       setRecyclerResults(recyclerData)
  //     }

  // }, [recyclerData])

  return (
    <div>
      <RecyclerContext.Provider value={{ recyclerResults, setRecyclerResults }}>
        <Main />
      </RecyclerContext.Provider>
    </div>
  );
};

export default RecyclerMainPage;
