import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterButton = () => {
  const { handleFilterButton } = useContext(PlanetsContext);

  return (
    <div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterButton }
      >
        Use Filter
      </button>
    </div>
  );
};

export default FilterButton;
