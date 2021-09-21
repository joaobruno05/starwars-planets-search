import React from 'react';
import FilterName from './FilterName';
import FilterColumn from './FilterColumn';
import FilterComparison from './FilterComparison';
import FilterValue from './FilterValue';
import FilterButton from './FilterButton';

function Filters() {
  return (
    <div>
      <FilterName />
      <FilterColumn />
      <FilterComparison />
      <FilterValue />
      <FilterButton />
    </div>
  );
}

export default Filters;
