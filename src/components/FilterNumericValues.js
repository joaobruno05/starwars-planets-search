import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterNumericValues = () => {
  const { column, setColumn, comparison, setComparison } = useContext(PlanetsContext);

  const optionsColumn = [
    'Population',
    'Orbital Period',
    'Diameter',
    'Rotation Period',
    'Surface Water',
  ];

  const comparisonsSelect = [
    'maior que',
    'menor que',
    'igual a',
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

export default FilterNumericValues;
