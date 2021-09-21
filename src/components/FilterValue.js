import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterValue = () => {
  const { value, setValue } = useContext(PlanetsContext);

  return (
    <div>
      <input
        type="number"
        name="value"
        id="value"
        value={ value }
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />

    </div>
  );
};

export default FilterValue;
