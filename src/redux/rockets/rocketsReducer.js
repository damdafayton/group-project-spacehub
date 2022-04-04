const ADD_ROCKET = 'rockets/addrocket';

export const addRocket = ({
  type, id, name, flickrImages,
}) => ({
  type: ADD_ROCKET, id, name, flickrImages,
});

export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, { id: action.id, name: action.name, flickrImage: action.flickrImages }];
  }
}
