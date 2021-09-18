import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/API';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const { results } = await getPlanets();
      results.forEach((result) => delete result.residents);

      setData(results);
    };

    fetchAPI();
  }, []);

  const context = {
    data,
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
