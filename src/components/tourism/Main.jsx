import { useState } from 'react';
import cx from 'classnames';
import './main.scss';
import API from '../../api/index';
import cityList from '../../data/cityList';
import Card from './Card';
import PageChooser from './PageChooser';
import PageTitle from './PageTitle';
import InfoCard from './InfoCard';
import Map from './Map';
import Filter from './Filter';

import { getPathName } from '../../utils/urlUtils';
import { categoryList } from '../../utils/constantUtils';

export default function Main() {
  const [cntCity, setCity] = useState(cityList[0].value);
  const [cntDist, setDist] = useState();

  const [siteData, setSiteData] = useState([]);
  const [info, setInfo] = useState();
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState([25.083, 121.555]);

  const districtsOptions = cityList.find((el) => el.value === cntCity);

  const DATA_PER_PAGE = 12;

  const getSiteData = async (num) => {
    const obj = { $top: DATA_PER_PAGE, $skip: num };
    if (cntDist) {
      obj.$filter = `ZipCode eq '${cntDist}'`;
    }

    const rawData = await API.tourism.fetchScenicSpotByCity(cntCity, obj);
    setSiteData(rawData.data);
  };

  const changePage = (num) => {
    const newCount = count + num;
    getSiteData(newCount * DATA_PER_PAGE);
    setCount(newCount);
  };

  const pathName = getPathName();

  return (
    <main>
      <div className="mapContainer">
        <Map position={position} siteData={siteData} />
        <InfoCard info={info} districts={districtsOptions.districts} />
      </div>

      <div className="main">
        <div className="navbar">
          <PageChooser />
          <PageTitle />
          {pathName === 'tourism' && (
            <Filter
              cntCity={cntCity}
              setCity={setCity}
              cntDist={cntDist}
              setDist={setDist}
              setSiteData={setSiteData}
            />
          )}
        </div>

        <div className="categoryBar">
          {categoryList.map((item) => {
            const categoryStyle = cx('category', item.type);
            return (
              <div className={categoryStyle} key={item.type}>
                <div className="icon" />
                <div className="name">{item.displayName}</div>
              </div>
            );
          })}
        </div>

        <div className="cardsContainer">
          <Card siteData={siteData} setPosition={setPosition} setInfo={setInfo} />
        </div>

        <div className="paging">
          <button type="button" onClick={() => count > 0 && changePage(-1)}>
            上一頁
          </button>

          <span>
            page
            {count}
          </span>

          <button type="button" onClick={() => changePage(1)}>
            下一頁
          </button>
        </div>
      </div>
    </main>
  );
}

//     <div className="filter">
//       <div className="choose-city">選擇城市</div>
//       <select name="cities" onChange={(e) => setCity(e.target.value)}>
//         {cityOptions}
//       </select>
//       <button type="button" onClick={() => getSiteData(0)}>
//         查詢景點
//       </button>
