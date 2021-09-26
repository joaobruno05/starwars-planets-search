import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterButton() {
  const {
    setButtonClicked, setNumericFilter, column, comparison, value,
  } = useContext(PlanetsContext);
  const handleFilterButton = () => {
    setButtonClicked(true);
    setNumericFilter({ column, comparison, value });
  };

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
