import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export const comparisonsSelect = [
  'maior que',
  'menor que',
  'igual a',
];

function FilterComparison() {
  const { comparison, setComparison, setButtonClicked } = useContext(PlanetsContext);
  // const { filterByNumericValues: [{ comparison }] } = filters;

  // const handleFilterComparison = ({ target }) => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [{
  //       column,
  //       comparison: target.value,
  //       value,
  //     }],
  //   });
  //   setButtonClicked(false);
  // };
  const handleFilterComparison = ({ target }) => {
    setComparison(target.value);
    setButtonClicked(false);
  };

  return (
    <div>
      <select
        name="comparison"
        id="comparison"
        value={ comparison }
        data-testid="comparison-filter"
        // onChange={ ({ target }) => setComparison(target.value) }
        onChange={ handleFilterComparison }
      >
        { comparisonsSelect.map((comparisonSelect, index) => (
          <option key={ index } value={ comparisonSelect }>{ comparisonSelect }</option>
        )) }
      </select>
    </div>
  );
}

export default FilterComparison;
