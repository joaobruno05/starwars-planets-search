import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export const optionsColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function FilterColumn() {
  const { filters, setFilters, setButtonClicked } = useContext(PlanetsContext);
  const { filterByNumericValues: [{ column, comparison, value }] } = filters;

  const handleFilterColumn = ({ target }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: target.value,
        comparison,
        value,
      }],
    });
    setButtonClicked(false);
  };

  return (
    <div>
      <select
        name="column"
        id="column"
        value={ column }
        data-testid="column-filter"
        onChange={ handleFilterColumn }
        // onChange={ ({ target }) => setColumn(target.value) }
      >
        { optionsColumn.map((optionColumn, index) => (
          <option key={ index } value={ optionColumn }>{optionColumn}</option>
        )) }
      </select>
    </div>
  );
}

export default FilterColumn;
