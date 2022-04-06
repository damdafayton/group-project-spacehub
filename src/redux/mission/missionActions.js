import axios from 'axios';
import MissionActionTypes from './missionType';

export const FetchMissionStart = () => ({
  type: MissionActionTypes.FETCH_MISSIONS_START,
});

export const FetchMissionSuccess = (payload) => ({
  type: MissionActionTypes.FETCH_MISSIONS_SUCCESS,
  payload,
});

export const FetchMissionError = (error) => ({
  type: MissionActionTypes.FETCH_MISSIONS_ERROR,
  payload: error,
});
export const JoinMission = (payload) => ({
  type: MissionActionTypes.JOIN_MISSION,
  payload,
});
export const LeaveMission = (payload) => ({
  type: MissionActionTypes.LEAVE_MISSION,
  payload,
});
export const FetchMissionAsync = () => (dispatch) => {
  dispatch(FetchMissionStart());
  axios.get('https://api.spacexdata.com/v3/missions').then((res) => {
    dispatch(FetchMissionSuccess(res.data));
  }).catch((err) => {
    dispatch(FetchMissionError(err.message));
  });
};
