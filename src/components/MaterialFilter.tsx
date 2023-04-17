import React, { FormEvent, useEffect } from 'react';
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
    onSubmitFilterForm,
    setPrimaryMaterialFilterOptions,
    setSelectedPrimaryMinimumPercentage,
    setError,
    secondaryMaterialFilterOptions,
    setSecondaryMaterialFilterOptions,
    setSelectedSecondaryMaterial,
    setSelectedSecondaryMinimumPercentage,
    setSelectedMaterialSource,
    setSelectedWeight,
    setSelectedWeightUnit,
    setSelectedZip,
    setSelectedUserGroup,
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
  }, [setError, setIsLoading, setPrimaryMaterialFilterOptions]);

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
  }, [setError, setIsLoading, setSecondaryMaterialFilterOptions]);

  // to do step 1.5: declare handleSubmit function to update selected input state
  // to do:
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // call fetch matching recyclers
    onSubmitFilterForm();
  };

  return (
    <>
      {/* <h1>{recyclers[0].company}</h1> */}
      <form className="material-filter" onSubmit={handleSubmit}>
        <label>
          Primary Material
          <select
            id="primary-material"
            className="filter-select"
            onChange={(e) => setSelectedPrimaryMaterial(e.target.value)}
            required
          >
            <option value=""></option>
            {/* <option placeholder="Select"></option> */}
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
            placeholder="100"
            min="0"
            max="100"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e) => setSelectedPrimaryMinimumPercentage(e.target.value as any)}
          ></input>
        </label>
        {/* TO DO: add timeout so secondary material fields don't flash as user starts typing '100' */}
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
                  <option placeholder="" value=""></option>
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
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e) => setSelectedSecondaryMinimumPercentage(e.target.value as any)}
                ></input>
              </label>
            </>
          ))}
        <label>
          Weight
          <input
            type="number"
            className="filter-select"
            id="weight"
            placeholder="Weight"
            required
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e) => setSelectedWeight(e.target.value as any)}
          ></input>
          <select
            className="filter-select"
            id="unit"
            onChange={(e) => setSelectedWeightUnit(e.target.value as any)}
          >
            <option>lb</option>
            <option>kg</option>
          </select>
        </label>
        <label>
          Material Source
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <select
            className="filter-select"
            id="material-source"
            onChange={(e) => setSelectedMaterialSource(e.target.value as string | null)}
            required
          >
            <option value=""></option>
            <option value="Post Consumer">Post Consumer</option>
            <option value="Post Industrial">Post Industrial</option>
          </select>
        </label>
        <label>
          Material Postal Code Location
          <input
            type="text"
            className="filter-select"
            id="zip"
            placeholder="Zip Code"
            onChange={(e) => setSelectedZip(e.target.value as string | null)}
            required
          ></input>
        </label>
        <label>
          I am looking to recycle materials for a...
          <select
            className="filter-select"
            id="user-group"
            onChange={(e) => setSelectedUserGroup(e.target.value as string | null)}
            required
          >
            <option value=""></option>
            <option value="company">Company</option>
            <option value="individual">Individual</option>
          </select>
        </label>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      {isLoading && <h1>Loading...</h1>}
    </>
  );
};

export default MaterialFilter;
