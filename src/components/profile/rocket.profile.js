import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function RocketProfile() {
  const { rockets, reservations } = useSelector((state) => state.rocket);
  const selectRocket = (id) => rockets.find((rocket) => rocket.id === id);
  return (
    <Table bordered striped>
      <thead>
        <tr>
          <th className="text-center">Reserved Rockets</th>
        </tr>
      </thead>
      <tbody>
        {
           reservations.map((id) => {
             const rocket = selectRocket(id);
             return (
               <tr key={rocket.id}>
                 <td>{rocket.rocket_name}</td>
               </tr>
             );
           })
      }
      </tbody>
    </Table>
  );
}

export default RocketProfile;
