/* eslint-disable */
import request from './request';

const API = {
  fetchTourismByCity(cityName, num) {
    const endpoint = `/Tourism/ScenicSpot/${cityName}?$top=${num}&$format=JSON`;
    return request('GET', endpoint);
  },
};

export default API;
