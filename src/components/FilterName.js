import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterName = () => {
  const { filters, inputNamePlanet } = useContext(PlanetsContext);
  const { filterByName: { inputName } } = filters;
  // const {
  //   filters: { filterByName: { inputName } }, setInputName } = useContext(PlanetsContext);
  // const { filters, setFilters, inputName } = useContext(PlanetsContext);

  // const inputNamePlanet = ({ target }) => {
  //   setFilters({
  //     ...filters,
  //     filterByName: {
  //       inputName: target.value,
  //     },
  //   });
  // };

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
          onChange={ ({ target }) => inputNamePlanet(target.value) }
        />
      </label>
    </div>
  );
};

export default FilterName;
