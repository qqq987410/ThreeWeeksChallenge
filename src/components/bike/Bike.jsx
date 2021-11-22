import { useState } from 'react';
import API from '../../api/index';
import cityList from '../../data/cityList';
import { bikeVersion, bikeDemand } from '../../data/bike/bikeConstant';
import PageChooser from '../tourism/PageChooser';
import Map from '../Map';

import './bike.scss';

import './bike.scss';

export default function Bike() {
  const [cntCity, setCity] = useState(cityList[0].value);
  const [version, setVersion] = useState(bikeVersion[0].type);
  const [demand, setDemand] = useState(bikeDemand[0].type);


  const [keyword, setKeyWord] = useState('');
  const [siteData, setSiteData] = useState([]);
  const [position, setPosition] = useState([25.083, 121.555]);

  // const DATA_PER_PAGE = 12;

  // const getSiteData = async (num, versionName) => {
  //   console.log(versionName);
  //   if (num) return;
  //   const obj = {
  //     $top: DATA_PER_PAGE,
  //     $skip: num,
  //     $filter: `contains(StationName/Zh_tw,'${versionName}')`,
  //   };

  //   const rawData = await API.bike.fetchStationByCity(cntCity, obj);
  //   console.log('rawData=', rawData);
  //   console.log('version=', version);
  //   console.log('demand=', demand);
  //   setSiteData(rawData.data);
  // };

  const getSiteData = async () => {
    const obj = {
      $filter: `contains(StationName/Zh_tw,'${keyword}')`,
    };

    const rawData = await API.bike.fetchStationByCity(cntCity, obj);

    // TODO: version & demand filter
    console.log('version=', version);
    console.log('demand=', demand);

    setSiteData(rawData.data);
    if (rawData.data.length === 0) {
      console.log('no data');
      return;
    }

    const lat = rawData.data[0].StationPosition.PositionLat;
    const lon = rawData.data[0].StationPosition.PositionLon;
    setPosition([lat, lon]);
  };

  const getNearByData = async (obj) => {
    const lat = obj.PositionLat;
    const lon = obj.PositionLon;
    const nearByDataRaw = await API.bike.fetchStationNearBy(lat, lon);
    const availableDataRaw = await API.bike.fetchAvailabilityNearBy(lat, lon);

    const availableObj = availableDataRaw.data.reduce((acc, cnt) => {
      acc[cnt.StationUID] = cnt;
      return { ...acc };
    }, {});

    const availableData = nearByDataRaw.data.map((e) => ({
      StationUID: e.StationUID,
      StationName: e.StationName,
      StationPosition: e.StationPosition,
      ServiceType: e.ServiceType,
      BikesCapacity: e.BikesCapacity,
      RentBike: availableObj[e.StationUID].AvailableRentBikes,
      ReturnBike: availableObj[e.StationUID].AvailableReturnBikes,
    }));

    // console.log(nearByDataRaw, availableDataRaw);
    // console.log(availableData);
    setSiteData(availableData);
    // setPosition([lat, lon]);
  };


  return (
    <main>
      <Map
        position={position}
        siteData={siteData}
        category="Bike"
        setPosition={setPosition}
        setSiteData={setSiteData}
      />
      <div className="main">
        Bike page
        <PageChooser />
        {/* 城市 */}
        <select
          name="cities"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          {cityList.map((city) => (
            <option value={city.value} key={city.value}>
              {city.name}
            </option>
          ))}
        </select>
        {/* 版本 */}
        <select
          name="version"
          onChange={(e) => {
            setVersion(e.target.value);
          }}
        >
          {bikeVersion.map(({ type }) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
        {/* 借 or 還 */}
        <select
          name="demand"
          onChange={(e) => {
            setDemand(e.target.value);
          }}
        >
          {bikeDemand.map((item) => (
            <option value={item.type} key={item.key}>
              {item.type}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="請輸入關鍵字"
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
          value={keyword}
        />
        <button
          className="search"
          type="button"
          onClick={() => getSiteData()}
          aria-label="Mute volume"
        />
        {siteData.length === 0 && <div>目前無資料</div>}
        {siteData.map((item) => (
          <div className="bikeStop" key={item.StationID}>
            {item.StationName.Zh_tw}

            <span>容量：{item.BikesCapacity} </span>
            <span>可借：{item.RentBike} </span>
            <span>可還：{item.ReturnBike} </span>
            <button type="button" onClick={() => getNearByData(item.StationPosition)}>
              搜尋附近站牌
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
