import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, buttonClicked,
    filters:
      { filterByName: { inputName },
        filterByNumericValues: [{
          column, comparison, value }] } } = useContext(PlanetsContext);
  // const { column, comparison, value } = filterByNumericValues;

  // Função para utilizar determinada comparação dependendo do valor de comparison
  const comparisonElement = (element1, element2) => {
    if (comparison === 'maior que') {
      return (Number(element1) > element2);
    }
    if (comparison === 'menor que') {
      return (Number(element1) < element2);
    }
    if (comparison === 'igual a') {
      return (element1 === element2);
    }
  };

  if (buttonClicked === false) {
    return (
      <div>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>

          {
            data
              .filter(({ name }) => name.toLowerCase().includes(inputName.toLowerCase()))
              .map(({
                name,
                rotation_period: rotationPeriod,
                orbital_period: orbitalPeriod,
                diameter,
                climate,
                gravity,
                terrain,
                surface_water: surfaceWater,
                population,
                films,
                created,
                edited,
                url,
              }) => (
                <tr key={ name }>
                  <td>{name}</td>
                  <td>{rotationPeriod}</td>
                  <td>{orbitalPeriod}</td>
                  <td>{diameter}</td>
                  <td>{climate}</td>
                  <td>{gravity}</td>
                  <td>{terrain}</td>
                  <td>{surfaceWater}</td>
                  <td>{population}</td>
                  <td>{films}</td>
                  <td>{created}</td>
                  <td>{edited}</td>
                  <td>{url}</td>
                </tr>
              ))
          }
        </table>
      </div>
    );
  }
  return (
    <div>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>

        {
          data
            .filter((item) => comparisonElement(item[column], value))
            .map(({
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            }) => (
              <tr key={ name }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ))
        }
      </table>
    </div>
  );
}

export default Table;
