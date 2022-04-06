/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissionAsync } from '../../redux/mission/missionActions';
import Mission from './mission';

function MissionsContainer() {
  const dispatch = useDispatch();
  const {
    missions, loading, error, joined_mission: joinedMission,
  } = useSelector((state) => state.mission);
  useEffect(() => {
    dispatch(FetchMissionAsync());
  }, []);
  const checkJoined = (id) => joinedMission.find((ids) => ids === id);
  return (
    <section id="mission" className="container">
      <Table className="mt-4" striped bordered hover>
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
      </Table>
    </section>
  );
}

export default MissionsContainer;
