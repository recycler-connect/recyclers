import React from 'react';
import './MaterialFilter.css';
// import { recyclers } from '../data';

export default function MaterialFilter() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //   setQuerySubmitValue(materialInputValue);
  };

  // to do step 1.5: declare handleSubmit function to update selected input state

  return (
    <>
      {/* <h1>{recyclers[0].company}</h1> */}
      <form className="material-filter">
        <label>
          Primary Material
          <select id="primary-material" className="filter-select" placeholder="Primary Material">
            <option placeholder="Select">Select one</option>
            {/* hardcoded options for now, will remove once map works */}
            {/* to do step 1: map through and render material types as options */}
            {/* to do step 1: set input state based on user selection */}
            <option value="Cotton">Cotton</option>
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
}
