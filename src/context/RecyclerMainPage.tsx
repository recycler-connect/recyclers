import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { getAllRecyclers, getMatchingRecyclers } from '../services/recyclers';
import Main from 'src/components/Main/Main';
// to do: create context type file and move types there

export interface RecyclerResultType {
  acc_circ_url: string | null;
  comercialization_for_post_consumer: string | null;
  company: string | null;
  id: number;
  material_source: string | null;
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
  setSelectedPrimaryMinimumPercentage: Dispatch<SetStateAction<number | null>>;
  secondaryMaterialFilterOptions: SecondaryMaterialOptionType[];
  setSecondaryMaterialFilterOptions: Dispatch<SetStateAction<SecondaryMaterialOptionType[]>>;
  selectedSecondaryMaterial: string | null;
  setSelectedSecondaryMaterial: Dispatch<SetStateAction<string | null>>;
  selectedSecondaryMinimumPercentage: number | null;
  setSelectedSecondaryMinimumPercentage: Dispatch<SetStateAction<number | null>>;
  selectedMaterialSource: string;
  // should this be Dispatch<SetStateAction<string | null>> or Dispatch<SetStateAction<RecyclerResultType>>? Does it matter?
  setSelectedMaterialSource: Dispatch<SetStateAction<string>>;
  fetchMatchingRecyclers: any;
};
// if it was just js, it would be the same but the types would not be passed
const baseContext: RecyclerContextType = {
  // explore null vs empty string/array - what is the advantage of one or the other?
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
  setSelectedPrimaryMinimumPercentage: () => null,
  secondaryMaterialFilterOptions: [],
  setSecondaryMaterialFilterOptions: () => [],
  selectedSecondaryMaterial: null,
  setSelectedSecondaryMaterial: () => null,
  selectedSecondaryMinimumPercentage: null,
  setSelectedSecondaryMinimumPercentage: () => null,
  selectedMaterialSource: '',
  setSelectedMaterialSource: () => '',
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
  const [selectedPrimaryMinimumPercentage, setSelectedPrimaryMinimumPercentage] = useState<
    number | null
  >(100);
  const [selectedSecondaryMaterial, setSelectedSecondaryMaterial] = useState<string | null>(
    'Other'
  );
  const [selectedSecondaryMinimumPercentage, setSelectedSecondaryMinimumPercentage] = useState<
    number | null
  >(0);
  const [selectedMaterialSource, setSelectedMaterialSource] = useState<string>('');

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
        selectedSecondaryMaterial,
        selectedSecondaryMinimumPercentage,
        selectedMaterialSource
      );
      if (resp) {
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
          selectedSecondaryMinimumPercentage,
          setSelectedSecondaryMinimumPercentage,
          selectedMaterialSource,
          setSelectedMaterialSource,
          fetchMatchingRecyclers,
        }}
      >
        <Main />
      </RecyclerContext.Provider>
    </div>
  );
};

export default RecyclerMainPage;
