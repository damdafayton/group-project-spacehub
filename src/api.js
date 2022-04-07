const rocketsApi = 'https://api.spacexdata.com/v3';
const ROCKETS = '/rockets';

export const rockets = () => fetch(rocketsApi + ROCKETS).then((res) => res.json());
export const nonrockets = 1;
