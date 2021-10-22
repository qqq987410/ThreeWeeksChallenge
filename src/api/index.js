/* eslint-disable */
import request from './request';

const API = {
  fetchTourismByCity(cityName, num, skip) {
    const endpoint = `/Tourism/ScenicSpot/${cityName}?&$top=${num}&$skip=${skip}&$format=JSON`;
    return request('GET', endpoint);
  },
};

export default API;
