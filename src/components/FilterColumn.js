import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export const optionsColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function FilterColumn() {
  const [options, setOptions] = useState([...optionsColumn]);
  const {
    filters, setFilters, buttonClicked, setButtonClicked,
  } = useContext(PlanetsContext);
  const { filterByNumericValues: [{ column, comparison, value }] } = filters;

  useEffect(() => {
    const indexColumn = optionsColumn.indexOf(column);
    if (buttonClicked) {
      delete optionsColumn[indexColumn];
      setOptions(optionsColumn);
    }
  }, [column, buttonClicked]);

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
        { options.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        )) }
      </select>
    </div>
  );
}

export default FilterColumn;
