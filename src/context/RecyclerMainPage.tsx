import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
// import { recyclers } from '../data';
import { getRecyclers } from '../services/recyclers';
import Main from 'src/components/Main/Main';
import { log } from 'console';

export interface RecyclerResultType {
  // id: number;
  // company: string;
  // location?: string;
  acc_circ_feedstock_data: string | null;
  acc_circ_url: string | null;
  acrylic: boolean | null;
  comercialization_for_post_consumer: string | null;
  company: string | null;
  cotton: boolean | null;
  cotton_polyester: boolean | null;
  id: number;
  input_material: string | null;
  location: string | null;
  minimum_percentage: number | null;
  nylon: boolean | null;
  other: boolean | null;
  output_material: string | null;
  polyester: boolean | null;
  primary_material_type_list: string | null;
  recycling_type: string | null;
  status: string | null;
  wool: boolean | null;
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
  // make sure to have empty array in state which we have done!
  // where we left off: need to utilize async somehow
  const [recyclerResults, setRecyclerResults] = useState<RecyclerContextType | any>([]);

  useEffect(() => {
    const fetchRecyclerData = async () => {
      try {
        const data = await getRecyclers();
        console.log('data in fetch function', data);
        if (data) {
          setRecyclerResults(data);
        }
      } catch (error) {
        console.log('error message in fetch function', error);
      }
    };
    fetchRecyclerData();
  }, []);

  return (
    <div>
      <RecyclerContext.Provider value={{ recyclerResults, setRecyclerResults }}>
        <Main />
      </RecyclerContext.Provider>
    </div>
  );
};

export default RecyclerMainPage;
