import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { data, filters: { filterByName: { inputName } } } = useContext(PlanetsContext);
  // console.log(data[0]);
  // const keyData = data.map((item) => Object.entries(item));
  // console.log(keyData[0]);
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
};

export default Table;
