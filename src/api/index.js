/* eslint-disable */
import request from './request';

const API = {
  fetchTourismByCity(cityName) {
    const endpoint = `/Tourism/ScenicSpot/${cityName}?$top=30&$format=JSON`;
    return request('GET', endpoint);
  },
};

export default API;
