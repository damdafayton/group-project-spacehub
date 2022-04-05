/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissionAsync } from '../../redux/mission/missionActions';
import Mission from './mission';
import MissionTable from './mission.style';

function MissionsContainer() {
  const dispatch = useDispatch();
  const {
    missions, loading, error, joined_mission: joindeMission,
  } = useSelector((state) => state.mission);
  useEffect(() => {
    dispatch(FetchMissionAsync());
  }, []);
  const checkJoined = (id) => joindeMission.find((ids) => ids === id);
  return (
    <MissionTable striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join mission</th>
        </tr>
      </thead>
      <tbody>
        {
          loading
            ? (
              <tr>
                <td colSpan={4}>
                  <Spinner className="text-center mt-4" size="lg" animation="border" />
                </td>
              </tr>
            )
            : error
              ? (
                <tr>
                  <td colSpan={4}>
                    <h4 className="text-center tex-danger">
                      {error}
                    </h4>
                  </td>
                </tr>
              )
              : missions.map((mission) => (
                <Mission
                  key={mission.mission_id}
                  id={mission.mission_id}
                  mission={mission.mission_name}
                  description={mission.description}
                  status={checkJoined(mission.mission_id)}
                />
              ))
        }
      </tbody>
    </MissionTable>
  );
}

export default MissionsContainer;
