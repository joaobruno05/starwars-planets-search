import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/API';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

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
  };

  const context = {
    data,
    buttonClicked,
    filters: {
      filterByName: {
        inputName,
      },
      filterByNumericValues: {
        column,
        comparison,
        value,
      },
    },
    setInputName,
    setColumn,
    setComparison,
    setValue,
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
