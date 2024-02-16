import React, { FormEvent, useEffect } from 'react';
import { useContext } from 'react';
import './MaterialFilter.css';
import { RecyclerContext } from 'src/context/RecyclerMainPage';
import { getMaterialOptions, getSecondaryMaterialOptions } from 'src/services/recyclers';

const MaterialFilter: React.FC = () => {
  const {
    isLoading,
    setIsLoading,
    selectedPrimaryMinimumPercentage,
    setSelectedPrimaryMaterial,
    onSubmitFilterForm,
    setPrimaryMaterialFilterOptions,
    setSelectedPrimaryMinimumPercentage,
    setError,
    primaryMaterialFilterOptions,
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

  // fetch all primary material types for Primary material dropdown
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

  // fetch all secondary material types for Secondary material dropdown
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

  // handle material filter form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    onSubmitFilterForm();
  };

  return (
    <>
      <div className="material-filter-container">
        <form className="material-filter" onSubmit={handleSubmit}>
          <h3>Enter your material&apos;s details to find matching recyclers.</h3>

          {/* render form options and set state based on user selection/input */}

          <label className="filter-label" htmlFor="primary-material">
            Primary material{' '}
          </label>
          <select
            autoFocus
            id="primary-material"
            className="filter-select"
            onChange={(e) => setSelectedPrimaryMaterial(e.target.value)}
            placeholder="select one"
            required
          >
            <option value=""></option>
            {/* map through and render material types as dropdown options */}
            {primaryMaterialFilterOptions.map(({ primary_material }) => (
              <option key={primary_material} value={primary_material as string}>
                {primary_material}
              </option>
            ))}
          </select>

          <label className="filter-label" htmlFor="primary-material-percentage">
            Primary material percentage{' '}
          </label>
          <input
            type="number"
            className="filter-select"
            id="primary-material-percentage"
            placeholder="100"
            defaultValue={100}
            min="0"
            max="100"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e) => setSelectedPrimaryMinimumPercentage(e.target.value as any)}
          ></input>

          {/* render secondary materials dropdowns only if primary materials percentage in null or <100% */}
          {selectedPrimaryMinimumPercentage === null ||
            (selectedPrimaryMinimumPercentage < 100 && (
              <>
                <label className="filter-label" htmlFor="secondary-material">
                  Secondary material:{' '}
                </label>
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

                <label className="filter-label" htmlFor="secondary-material-percentage">
                  Secondary material percentage{' '}
                </label>
                <input
                  type="number"
                  className="filter-select"
                  id="secondary-material-percentage"
                  min="0"
                  max="100"
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e) => setSelectedSecondaryMinimumPercentage(e.target.value as any)}
                ></input>
              </>
            ))}

          <label className="filter-label" htmlFor="weight">
            Weight{' '}
          </label>
          <div className="weight-select">
            <input
              type="number"
              className="filter-select"
              id="weight"
              required
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e) => setSelectedWeight(e.target.value as any)}
            ></input>
            <select
              className="filter-select"
              id="unit"
              onChange={(e) => setSelectedWeightUnit(e.target.value as string)}
            >
              <option>lb</option>
              <option>kg</option>
            </select>
          </div>

          <label className="filter-label" htmlFor="material-source">
            Material source {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          </label>
          <select
            className="filter-select"
            id="material-source"
            onChange={(e) => setSelectedMaterialSource(e.target.value as string | null)}
            required
          >
            <option value=""></option>
            <option value="Post Consumer">Post consumer</option>
            <option value="Post Industrial">Post industrial</option>
          </select>

          <label className="filter-label" htmlFor="zip">
            Material postal code{' '}
          </label>
          <input
            type="number"
            className="filter-select"
            id="zip"
            onChange={(e) => setSelectedZip(e.target.value as string | null)}
            required
          ></input>

          <label className="filter-label" htmlFor="user-group">
            I&apos;m recycling materials for a{' '}
          </label>
          <select
            className="filter-select"
            id="user-group"
            onChange={(e) => setSelectedUserGroup(e.target.value as string | null)}
            required
          >
            <option value=""></option>
            <option value="company">company</option>
            <option value="individual">individual</option>
          </select>

          <button type="submit" value="submit" className="submit-button">
            find recyclers
          </button>
        </form>

        {isLoading && <h1>Loading...</h1>}
      </div>
    </>
  );
};

export default MaterialFilter;
