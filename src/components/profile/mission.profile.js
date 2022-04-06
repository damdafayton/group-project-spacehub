import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function MissionProfile() {
  const { joined_mission: joinedMission, missions } = useSelector((state) => state.mission);
  const selectMission = (id) => missions.find((mission) => mission.mission_id === id);
  return (
    <Table bordered striped>
      <thead>
        <tr>
          <th className="text-center">Joined Mission</th>
        </tr>
      </thead>
      <tbody>
        {
          joinedMission.map((id) => {
            const mission = selectMission(id);
            return (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            );
          })
      }
      </tbody>
    </Table>
  );
}

export default MissionProfile;
