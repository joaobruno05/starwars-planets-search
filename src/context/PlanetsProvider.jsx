import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/API';
import PlanetsContext from './PlanetsContext';
// import { optionsColumn } from '../components/FilterColumn';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // const [inputName, setInputName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      inputName: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const fetchAPI = async () => {
      const { results } = await getPlanets();
      results.forEach((result) => delete result.residents);

      setData(results);
    };

    fetchAPI();
  }, []);

  const inputNamePlanet = (namePlanet) => {
    setFilters({
      ...filters,
      filterByName: { ...filters.filterByName, inputName: namePlanet },
    });
  };

  const setNumericFilter = (numericFilter) => {
    // const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, numericFilter],
    });
  };

  // const handleFilterButton = () => {
  //   setButtonClicked(true);
  // };

  const context = {
    data,
    buttonClicked,
    filters,
    setButtonClicked,
    setFilters,
    setNumericFilter,
    // filters: {
    //   filterByName: {
    //     inputName,
    //   },
    //   filterByNumericValues: [{
    //     column,
    //     comparison,
    //     value,
    //   }],
    // },
    // inputName,
    column,
    comparison,
    value,
    // setInputName,
    inputNamePlanet,
    setColumn,
    setComparison,
    setValue,
    // handleFilterButton,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
