import request from './request';

//   $top: num,
//   $skip: skip,
//   $select: select,
//   $filter: filter,
//   $spatialFilter: spatial,
//   $format: 'JSON',

function baseFunc(cityName, ...args) {
  const arr = [this.category, this.type];
  if (cityName) {
    arr.push(cityName);
  }
  const apiName = arr.join('/');
  const query = new URLSearchParams(...args).toString();
  console.log('endpoint: ', apiName, query);
  return request('GET', apiName, query);
}

const API = {
  tourism: {
    category: 'Tourism',
    fetchScenicSpotByCity(cityName, ...args) {
      this.type = 'ScenicSpot';
      return baseFunc.call(this, cityName, ...args);
    },

    fetchRestaurantByCity(cityName, ...args) {
      this.type = 'Restaurant';
      return baseFunc.call(this, cityName, ...args);
    },
    // hotel, activity...
  },
  bike: {
    category: 'Bike',
    fetchStationByCity(cityName, ...args) {
      this.type = 'Station';
      return baseFunc.call(this, cityName, ...args);
    },
    fetchAvailabilityByCity(cityName, ...args) {
      this.type = 'Availability';
      return baseFunc.call(this, cityName, ...args);
    },
    fetchStationNearBy(lat, lon) {
      this.type = 'Station/NearBy';
      const obj = { $spatialFilter: `nearby(${lat},${lon}, 500)` };
      return baseFunc.call(this, null, obj);
    },
    fetchAvailabilityNearBy(lat, lon) {
      this.type = 'Availability/NearBy';
      const obj = { $spatialFilter: `nearby(${lat},${lon}, 500)` };
      return baseFunc.call(this, null, obj);
    },
  },
  // bus: {
  //   category: 'Bus',
  // },
};

export default API;
