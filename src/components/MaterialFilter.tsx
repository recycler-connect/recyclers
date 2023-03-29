import React, { useEffect } from 'react';
import { useContext } from 'react';
import './MaterialFilter.css';
import { RecyclerContext } from 'src/context/RecyclerMainPage';
import { getMaterialOptions, getSecondaryMaterialOptions } from 'src/services/recyclers';

// export default function MaterialFilter() {
const MaterialFilter: React.FC = () => {
  const {
    primaryMaterialFilterOptions,
    isLoading,
    setIsLoading,
    selectedPrimaryMinimumPercentage,
    setSelectedPrimaryMaterial,
    fetchMatchingRecyclers,
    setPrimaryMaterialFilterOptions,
    setSelectedPrimaryMinimumPercentage,
    setError,
    secondaryMaterialFilterOptions,
    setSecondaryMaterialFilterOptions,
    setSelectedSecondaryMaterial,
    setSelectedSecondaryMinimumPercentage,
  } = useContext(RecyclerContext);
  // to do: move fetch options from mainPage
  // done: move fetchmatching to mainpage

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

  useEffect(() => {
    setIsLoading(true);
    const fetchSecondaryMaterialOptions = async () => {
      try {
        const resp = await getSecondaryMaterialOptions();
        if (resp !== null) {
          setSecondaryMaterialFilterOptions(resp);
          setIsLoading(false);
        }
      } catch (error) {
        setError('Uh oh, something went wrong.');
      }
    };
    fetchSecondaryMaterialOptions();
  }, []);

  // to do step 1.5: declare handleSubmit function to update selected input state
  // to do:
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    // call fetch matching recyclers
    fetchMatchingRecyclers();
  };

  return (
    <>
      {/* <h1>{recyclers[0].company}</h1> */}
      <form className="material-filter">
        <label>
          Primary Material
          <select
            id="primary-material"
            className="filter-select"
            placeholder="Primary Material"
            onChange={(e) => setSelectedPrimaryMaterial(e.target.value)}
          >
            <option placeholder="Select">Select one</option>
            {/* to do step 1: map through and render material types as options */}
            {primaryMaterialFilterOptions.map(({ primary_material }) => (
              <option key={primary_material} value={primary_material as string}>
                {primary_material}
              </option>
            ))}
            {/* to do step 1: set input state based on user selection */}
          </select>
        </label>
        <label>
          Primary Material Percentage
          <input
            type="number"
            className="filter-select"
            id="primary-material-percentage"
            placeholder="Material Percentage"
            min="0"
            max="100"
            onChange={(e) => setSelectedPrimaryMinimumPercentage(e.target.value as any)}
          ></input>
        </label>
        {selectedPrimaryMinimumPercentage === null ||
          (selectedPrimaryMinimumPercentage < 100 && (
            <>
              <label>
                Secondary Material
                <select
                  id="secondary-material"
                  className="filter-select"
                  placeholder="Secondary Material"
                  onChange={(e) => setSelectedSecondaryMaterial(e.target.value)}
                >
                  <option placeholder="Select">Select one</option>
                  {secondaryMaterialFilterOptions.map(({ secondary_material }) => (
                    <option key={secondary_material} value={secondary_material as string}>
                      {secondary_material}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Secondary Material Percentage
                <input
                  type="number"
                  className="filter-select"
                  id="secondary-material-percentage"
                  placeholder="Material Percentage"
                  min="0"
                  max="100"
                  onChange={(e) => setSelectedSecondaryMinimumPercentage(e.target.value as any)}
                ></input>
              </label>
            </>
          ))}
        <label>
          Weight
          <input className="filter-select" placeholder="Weight" id="weight"></input>
        </label>
        <label>
          I am a...
          <select>
            <option value="company">Company</option>
            <option value="individual">Individual</option>
          </select>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {isLoading && <h1>Loading...</h1>}
    </>
  );
};

export default MaterialFilter;
