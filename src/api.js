const rocketsApi = 'https://api.spacexdata.com/v3/rockets';

export default () => fetch(rocketsApi).then((res) => res.json());
