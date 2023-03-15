import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
// import { recyclers } from '../data';
import { getAllRecyclers } from '../services/recyclers';
import Main from 'src/components/Main/Main';

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
  const [recyclerResults, setRecyclerResults] = useState<RecyclerResultType[]>([]);
  // to do step 1: add state for material types to map through in MaterialFilter input selects
  // to do step 1: add state for all input data from MaterialFilter inputs: primary material type and percentage

  // to do step 1: create useEffect to fetch all material types

  // to do step 2: create useEffect to fetch matching recyclers using state values for selected inputs

  // for later: do we want to refactor useEffect and move to new file?
  useEffect(() => {
    const fetchRecyclerData = async () => {
      try {
        const data = await getAllRecyclers();
        if (data) {
          setRecyclerResults(data);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
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
