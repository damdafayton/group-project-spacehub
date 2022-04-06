import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { JoinMission, LeaveMission } from '../../redux/mission/missionActions';

function Mission({
  // eslint-disable-next-line react/prop-types
  id, description, mission, status,
}) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>
        {
          status
            ? (
              <p className="bg-success text-white">
                Active Member
              </p>
            )
            : (
              <p className="bg-secondary text-white">
                Not a member
              </p>
            )
    }

      </td>
      <td>
        {
        status
          ? (
            <Button variant="outline-secondary" onClick={() => dispatch(LeaveMission(id))}>
              Leave Mission
            </Button>
          )
          : (
            <Button variant="outline-success" onClick={() => dispatch(JoinMission(id))}>
              Join Mission
            </Button>
          )
      }

      </td>
    </tr>
  );
}

export default Mission;
