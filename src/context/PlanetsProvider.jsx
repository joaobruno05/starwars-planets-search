import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/API';
import PlanetsContext from './PlanetsContext';
// import { optionsColumn } from '../components/FilterColumn';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // const [inputName, setInputName] = useState('');
  // const [column, setColumn] = useState('population');
  // const [comparison, setComparison] = useState('maior que');
  // const [value, setValue] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      inputName: '',
    },
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: 0,
    }],
  });

  useEffect(() => {
    const fetchAPI = async () => {
      const { results } = await getPlanets();
      results.forEach((result) => delete result.residents);

      setData(results);
    };

    fetchAPI();
  }, []);

  const handleFilterButton = () => {
    setButtonClicked(true);
    // const { filterByNumericValues: [{ column }] } = filters;

    // const indexColumn = optionsColumn.indexOf(column);
    // delete optionsColumn[indexColumn];
  };

  const context = {
    data,
    buttonClicked,
    filters,
    setButtonClicked,
    setFilters,
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
    // setInputName,
    // setColumn,
    // setComparison,
    // setValue,
    handleFilterButton,
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
