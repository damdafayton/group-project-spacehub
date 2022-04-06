import MissionActionTypes from './missionType';

const INITIAL_STATE = {
  loading: true,
  missions: [],
  error: false,
  joined_mission: [],
};

const MissionReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case MissionActionTypes.FETCH_MISSIONS_START:
      return { ...state, loading: true };
    case MissionActionTypes.FETCH_MISSIONS_SUCCESS:
      return {
        ...state, loading: false, error: false, missions: payload,
      };
    case MissionActionTypes.FETCH_MISSIONS_ERROR:
      return { ...state, error: payload };
    case MissionActionTypes.JOIN_MISSION:
      return { ...state, joined_mission: [...state.joined_mission, payload] };
    case MissionActionTypes.LEAVE_MISSION:
      return {
        ...state,
        joined_mission: state.joined_mission.filter((mission) => mission !== payload),
      };
    default:
      return state;
  }
};

export default MissionReducer;
