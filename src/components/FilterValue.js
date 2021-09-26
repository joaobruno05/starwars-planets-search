import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterValue() {
  const { value, setValue, setButtonClicked } = useContext(PlanetsContext);
  // const { filterByNumericValues: [{ value }] } = filters;

  // const handleFilterValue = ({ target }) => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [{
  //       column,
  //       comparison,
  //       value: target.value,
  //     }],
  //   });
  //   setButtonClicked(false);
  // };
  const handleFilterValue = ({ target }) => {
    setValue(target.value);
    setButtonClicked(false);
  };

  return (
    <div>
      <input
        type="number"
        name="value"
        id="value"
        value={ value }
        data-testid="value-filter"
        // onChange={ ({ target }) => setValue(target.value) }
        onChange={ handleFilterValue }
      />

    </div>
  );
}

export default FilterValue;
