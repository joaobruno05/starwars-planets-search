import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
// import FilterName from './components/FilterName';
// import FilterNumeric from './components/Filters';

import './App.css';

function App() {
  return (
    <PlanetsProvider>
      {/* <FilterName />
      <FilterNumeric /> */}
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
