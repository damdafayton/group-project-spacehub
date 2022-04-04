const rocketsApi = 'https://api.spacexdata.com/v3/rockets';

export const rockets = () => fetch(rocketsApi).then((res) => res.json());
export const nonrockets = 1;
