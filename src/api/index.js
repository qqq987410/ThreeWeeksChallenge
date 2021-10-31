/* eslint-disable */
import request from './request';

function params(num, skip, select, filter, spatial) {
  const obj = {
    $top: num,
    $skip: skip,
    $select: select,
    $filter: filter,
    $spatialFilter: spatial,
    $format: 'JSON',
  };
  Object.keys(obj).forEach((k) => obj[k] === undefined && delete obj[k]);
  return new URLSearchParams(obj).toString();
}

function apiNameFunc(category, type, cityName) {
  const path = Array.prototype.slice.call(arguments);
  return path.join('/');
}

function baseFunc(cityName, ...args) {
  const apiName = [this.category, this.type, cityName].join('/');
  console.log(apiName);

  const query = params(args);
  console.log(query);
  // return request('GET', apiName, query);
}

const API = {
  tourism: {
    category: 'Tourism',

    fetchScenicSpotByCity(cityName, num, skip) {
      this.type = 'ScenicSpot';
      console.log(this);
      const apiName = apiNameFunc(this.category, this.type, cityName);
      const query = params(num, skip);
      return request('GET', apiName, query);
    },
    fetchRestaurantByCity(cityName, num, skip) {
      this.type = 'Restaurant';
      console.log(this);
      const apiName = apiNameFunc(this.category, this.type, cityName);
      const query = params(num, skip);
      return request('GET', apiName, query);
    },
    // hotel, activity...
  },
  // bike: {
  //   category: 'Bike',
  //   fetchStationByCity(cityName, num, skip) {
  //     const endpoint = `/Bike/Station/${cityName}?&$top=${num}&$skip=${skip}&$format=JSON`;
  //     return request('GET', endpoint);
  //   },
  // },
  // bus: {
  //   category: 'Bus',
  // },
};

export default API;
