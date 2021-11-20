import { useState } from 'react';
import API from '../../api/index';
import cityList from '../../data/cityList';
import { bikeVersion, bikeDemand } from '../../data/bike/bikeConstant';
import PageChooser from '../tourism/PageChooser';

import './bike.scss';

export default function Bike() {
  const [cntCity, setCity] = useState(cityList[0].value);
  const [version, setVersion] = useState(bikeVersion[0].type);
  const [demand, setDemand] = useState(bikeDemand[0].type);

  const [siteData, setSiteData] = useState([]);

  const DATA_PER_PAGE = 12;

  const getSiteData = async (num, versionName) => {
    const obj = {
      $top: DATA_PER_PAGE,
      $skip: num,
      $filter: `contains(StationName/Zh_tw,'${versionName}')`,
    };

    const rawData = await API.bike.fetchStationByCity(cntCity, obj);
    console.log('rawData=', rawData);
    console.log('version=', version);
    console.log('demand=', demand);
    setSiteData(rawData.data);
  };
  console.log('siteData=', siteData);
  return (
    <div className="App">
      <div className="app">
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
        <input type="text" />
        <button
          className="search"
          type="button"
          onClick={() => getSiteData(0, version)}
          aria-label="Mute volume"
        />
        {siteData.map((item) => (
          <div key={item.StationID}>{item.StationName.Zh_tw}</div>
        ))}
      </div>
    </div>
  );
}
