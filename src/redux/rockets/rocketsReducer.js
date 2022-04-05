const ADD_ROCKET = 'rockets/addrocket';

export const addRocket = ({
  id, name, flickrImages, description,
}) => ({
  type: ADD_ROCKET, id, name, flickrImages, description,
});

export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, {
        id: action.id,
        name: action.name,
        flickrImages: action.flickrImages,
        description: action.description,
      }];
    default:
      return state;
  }
}
