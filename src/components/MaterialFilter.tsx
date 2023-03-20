import React, { useEffect } from 'react';
import { useContext } from 'react';
import './MaterialFilter.css';
import { RecyclerContext } from 'src/context/RecyclerMainPage';
import { getMatchingRecyclers } from 'src/services/recyclers';

// export default function MaterialFilter() {
const MaterialFilter: React.FC = () => {
  const {
    primaryMaterialFilterOptions,
    isLoading,
    setIsLoading,
    selectedPrimaryMaterial,
    setSelectedPrimaryMaterial,
    setRecyclerResults,
  } = useContext(RecyclerContext);

  const fetchMatchingRecyclers = async () => {
    try {
      const resp = await getMatchingRecyclers(selectedPrimaryMaterial);
      if (resp) {
        // update recycler list state
        setRecyclerResults(resp);
        setIsLoading(false);
      }
    } catch (e) {
      alert(e);
    }
  };

  // to do step 1.5: declare handleSubmit function to update selected input state
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    // call fetch matching recylers
    fetchMatchingRecyclers();
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
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
              <option key={primary_material} value={primary_material}>
                {primary_material}
              </option>
            ))}
            {/* to do step 1: set input state based on user selection */}
          </select>
        </label>
        <label>
          Primary Material Percentage
          <input
            type="text"
            className="filter-select"
            id="primary-material-percentage"
            placeholder="Material Percentage"
            min="0"
            max="100"
          ></input>
        </label>
        <label>
          Weight
          <input className="filter-select" placeholder="Weight" id="weight"></input>
        </label>
        <label>
          Zip Code
          <input className="filter-select" placeholder="Zip Code" id="zip"></input>
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
    </>
  );
};

export default MaterialFilter;
