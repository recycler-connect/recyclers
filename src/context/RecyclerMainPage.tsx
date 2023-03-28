import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { getAllRecyclers, getMatchingRecyclers } from '../services/recyclers';
import Main from 'src/components/Main/Main';
// to do: create context type file and move types there

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

export interface SecondaryMaterialOptionType {
  secondary_material: string | null;
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
  selectedPrimaryMinimumPercentage: number | null;
  setSelectedPrimaryMinimumPercentage: Dispatch<SetStateAction<number>>;
  secondaryMaterialFilterOptions: SecondaryMaterialOptionType[];
  setSecondaryMaterialFilterOptions: Dispatch<SetStateAction<SecondaryMaterialOptionType[]>>;
  selectedSecondaryMaterial: string;
  setSelectedSecondaryMaterial: Dispatch<SetStateAction<string>>;
  fetchMatchingRecyclers: any;
  //to do later: add loading property so children can access it
};
// if it was just js, it would be the same but the types would not be passed
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
  selectedPrimaryMinimumPercentage: null,
  setSelectedPrimaryMinimumPercentage: () => 0,
  secondaryMaterialFilterOptions: [],
  setSecondaryMaterialFilterOptions: () => [],
  selectedSecondaryMaterial: '',
  setSelectedSecondaryMaterial: () => '',
  fetchMatchingRecyclers: () => [],
};
// best to create a base context (or initial context) outside of the component so that it is exportable.
export const RecyclerContext = createContext<RecyclerContextType>(baseContext);

const RecyclerMainPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [recyclerResults, setRecyclerResults] = useState<RecyclerResultType[]>([]);
  // to do step 1: add state for material types to map through in MaterialFilter input selects
  const [primaryMaterialFilterOptions, setPrimaryMaterialFilterOptions] = useState<
    PrimaryMaterialOptionType[]
  >([]);
  const [secondaryMaterialFilterOptions, setSecondaryMaterialFilterOptions] = useState<
    SecondaryMaterialOptionType[]
  >([]);

  // to do step 1: add state for all input data from MaterialFilter inputs: primary material type and percentage
  const [selectedPrimaryMaterial, setSelectedPrimaryMaterial] = useState<string>('');
  const [selectedPrimaryMinimumPercentage, setSelectedPrimaryMinimumPercentage] =
    useState<number>(0);
  const [selectedSecondaryMaterial, setSelectedSecondaryMaterial] = useState<string>('');
  // const [selectedSecondaryMinimumPercentage, setSelectedSecondaryMinimumPercentage] =
  //   useState<number>(0);

  // to do step 2: create useEffect to fetch matching recyclers using state values for selected inputs

  // for later: do we want to refactor useEffect and move to new file: no, keep it here!
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

  const fetchMatchingRecyclers = async () => {
    try {
      const resp = await getMatchingRecyclers(
        selectedPrimaryMaterial,
        selectedPrimaryMinimumPercentage,
        selectedSecondaryMaterial
      );
      if (resp) {
        // update recycler list state
        setRecyclerResults(resp);
        setIsLoading(false);
      }
    } catch (e) {
      alert(e);
    }
  };

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
          selectedPrimaryMinimumPercentage,
          setSelectedPrimaryMinimumPercentage,
          secondaryMaterialFilterOptions,
          setSecondaryMaterialFilterOptions,
          selectedSecondaryMaterial,
          setSelectedSecondaryMaterial,
          fetchMatchingRecyclers,
        }}
      >
        <Main />
      </RecyclerContext.Provider>
    </div>
  );
};

export default RecyclerMainPage;
