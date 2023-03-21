import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { getMaterialOptions, getAllRecyclers } from '../services/recyclers';
import Main from 'src/components/Main/Main';

export interface RecyclerResultType {
  acc_circ_url: string | null;
  comercialization_for_post_consumer: string | null;
  company: string | null;
  id: number;
  input_material: string | null;
  location: string | null;
  output_material: string | null;
  primary_material_type_list: string | null;
  recycling_type: string | null;
  status: string | null;
}

export interface PrimaryMaterialOptionType {
  primary_material: string | null;
}

type RecyclerContextType = {
  recyclerResults: RecyclerResultType[];
  setRecyclerResults: Dispatch<SetStateAction<RecyclerResultType[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  primaryMaterialFilterOptions: PrimaryMaterialOptionType[];
  setPrimaryMaterialFilterOptions: Dispatch<SetStateAction<PrimaryMaterialOptionType[]>>;
  selectedPrimaryMaterial: string;
  setSelectedPrimaryMaterial: Dispatch<SetStateAction<string>>;
  //to do later: add loading property so children can access it
};

const baseContext: RecyclerContextType = {
  recyclerResults: [],
  setRecyclerResults: () => null,
  isLoading: true,
  setIsLoading: () => true,
  error: '',
  setError: () => '',
  primaryMaterialFilterOptions: [],
  setPrimaryMaterialFilterOptions: () => [],
  selectedPrimaryMaterial: '',
  setSelectedPrimaryMaterial: () => '',
};

export const RecyclerContext = createContext<RecyclerContextType>(baseContext);

const RecyclerMainPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [recyclerResults, setRecyclerResults] = useState<RecyclerResultType[]>([]);
  // to do step 1: add state for material types to map through in MaterialFilter input selects
  const [primaryMaterialFilterOptions, setPrimaryMaterialFilterOptions] = useState<
    PrimaryMaterialOptionType[]
  >([]);

  // to do step 1: add state for all input data from MaterialFilter inputs: primary material type and percentage
  const [selectedPrimaryMaterial, setSelectedPrimaryMaterial] = useState<string>('');
  // to do step 1: create useEffect to fetch all material types
  useEffect(() => {
    setIsLoading(true);
    const fetchMaterialOptions = async () => {
      try {
        const resp = await getMaterialOptions();
        if (resp !== null) {
          setPrimaryMaterialFilterOptions(resp);
          setIsLoading(false);
        }
      } catch (error) {
        setError('Uh oh, something went wrong.');
      }
    };
    fetchMaterialOptions();
  }, []);

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
      <RecyclerContext.Provider
        value={{
          recyclerResults,
          setRecyclerResults,
          isLoading,
          setIsLoading,
          error,
          setError,
          primaryMaterialFilterOptions,
          setPrimaryMaterialFilterOptions,
          selectedPrimaryMaterial,
          setSelectedPrimaryMaterial,
        }}
      >
        <Main />
      </RecyclerContext.Provider>
    </div>
  );
};

export default RecyclerMainPage;
