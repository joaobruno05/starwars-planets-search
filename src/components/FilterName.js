import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterName = () => {
  const {
    filters: { filterByName: { inputName } }, setInputName } = useContext(PlanetsContext);

  const inputNamePlanet = ({ target }) => {
    setInputName(target.value);
  };

  return (
    <div>
      <label htmlFor="planet">
        Search Planet
        <input
          type="text"
          name="planet"
          value={ inputName }
          id="planet"
          data-testid="name-filter"
          onChange={ inputNamePlanet }
        />
      </label>
    </div>
  );
};

export default FilterName;
