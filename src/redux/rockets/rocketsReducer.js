const ADD_ROCKET = 'rockets/addrocket';
const RESERVE_ROCKET = 'rockets/reserve';
const CANCEL_RESERVATION = 'rockets/cancel';

export const addRocket = ({
  id, name, flickrImages, description,
}) => ({
  type: ADD_ROCKET, id, name, flickrImages, description,
});

export const reserveRocket = ({ id }) => ({ type: RESERVE_ROCKET, payload: id });
export const cancelReservation = ({ id }) => ({ type: CANCEL_RESERVATION, payload: id });

export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, {
        id: action.id,
        name: action.name,
        flickrImages: action.flickrImages,
        description: action.description,
      }];
    case RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === parseInt(action.payload, 10)
        ? { ...rocket, reserved: true }
        : rocket));
    case CANCEL_RESERVATION:
      return state.map((rocket) => (rocket.id === parseInt(action.payload, 10)
        ? { ...rocket, reserved: false }
        : rocket));
    default:
      return state;
  }
}
