import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterButton() {
  const { handleFilterButton } = useContext(PlanetsContext);

  return (
    <div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterButton }
      >
        Add Filter
      </button>
    </div>
  );
}

export default FilterButton;
