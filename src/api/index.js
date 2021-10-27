/* eslint-disable */
import request from './request';
const API = {
  tourism: {
    type: 'Tourism',
    fetchScenicSpotByCity(cityName, num, skip) {
      const endpoint = `/Tourism/ScenicSpot/${cityName}?&$top=${num}&$skip=${skip}&$format=JSON`;
      console.log(this.type);
      return request('GET', endpoint);
    },
    fetchRestaurantByCity(cityName, num, skip) {
      const endpoint = `/Tourism/Restaurant/${cityName}?&$top=${num}&$skip=${skip}&$format=JSON`;
      return request('GET', endpoint);
    },
    // hotel, activity...
  },
  bike: {
    type: 'Bike',
    fetchStationByCity(cityName, num, skip) {
      const endpoint = `/Bike/Station/${cityName}?&$top=${num}&$skip=${skip}&$format=JSON`;
      return request('GET', endpoint);
    },
  },
  bus: {
    type: 'Bus',
  },
};

export default API;
