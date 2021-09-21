import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterColumn = () => {
  const { column, setColumn } = useContext(PlanetsContext);

  const optionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div>
      <select
        name="column"
        id="column"
        value={ column }
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { optionsColumn.map((optionColumn, index) => (
          <option key={ index } value={ optionColumn }>{optionColumn}</option>
        )) }
      </select>
    </div>
  );
};

export default FilterColumn;
