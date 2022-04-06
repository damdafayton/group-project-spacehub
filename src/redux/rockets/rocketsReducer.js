import RocketActionTypes from './rocketType';

const INTIAL_STATE = {
  loading: true,
  rockets: [],
  error: false,
  reservations: [],
};

export default function rocketsReducer(state = INTIAL_STATE, { type, payload }) {
  switch (type) {
    case RocketActionTypes.FETCH_ROCKETS_START:
      return { ...state, loading: true };
    case RocketActionTypes.FETCH_ROCKETS_SUCCESS:
      return {
        ...state, loading: false, error: false, rockets: payload,
      };
    case RocketActionTypes.FETCH_ROCKETS_ERROR:
      return {
        ...state, loading: false, error: payload,
      };
    case RocketActionTypes.ADD_RESESRVATION:
      return {
        ...state, reservations: [...state.reservations, payload],
      };
    case RocketActionTypes.REMOVE_RESERVATION:
      return {
        ...state, reservations: state.reservations.filter((reservation) => reservation !== payload),
      };
    default:
      return state;
  }
}
