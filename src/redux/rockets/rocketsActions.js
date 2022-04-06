import axios from 'axios';
import RocketActionTypes from './rocketType';

export const fetchRocketStart = () => ({
  type: RocketActionTypes.FETCH_ROCKETS_START,
});

export const fetchRocketSuccess = (payload) => ({
  type: RocketActionTypes.FETCH_ROCKETS_SUCCESS,
  payload,
});

export const fetchRocketError = (payload) => ({
  type: RocketActionTypes.FETCH_ROCKETS_ERROR,
  payload,
});

export const AddReservation = (payload) => ({
  type: RocketActionTypes.ADD_RESESRVATION,
  payload,
});

export const RemoveReservation = (payload) => ({
  type: RocketActionTypes.REMOVE_RESERVATION,
  payload,
});

export const fetchRocketsAsync = () => (dispatch) => {
  dispatch(fetchRocketStart());
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((res) => dispatch(fetchRocketSuccess(res.data)))
    .catch((err) => dispatch(fetchRocketError(err.message)));
};
