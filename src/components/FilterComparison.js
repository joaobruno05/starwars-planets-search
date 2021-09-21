import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterComparison = () => {
  const { comparison, setComparison } = useContext(PlanetsContext);

  const comparisonsSelect = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <div>
      <select
        name="comparison"
        id="comparison"
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        { comparisonsSelect.map((comparisonSelect, index) => (
          <option key={ index } value={ comparisonSelect }>{ comparisonSelect }</option>
        )) }
      </select>
    </div>
  );
};

export default FilterComparison;
