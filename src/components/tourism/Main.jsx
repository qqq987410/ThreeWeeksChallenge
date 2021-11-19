import { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './main.module.scss';
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
  const [infoId, setInfoId] = useState(0);
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
    setInfoId(0);
  };

  const pathName = getPathName();

  // TODO: fly to first site's position when renew the siteData
  useEffect(() => {
    if (siteData.length === 0) return;
    const positionObj = siteData[infoId].Position;
    setPosition([positionObj.PositionLat, positionObj.PositionLon]);
  }, [infoId, count]);

  return (
    <main>
      <div className={styles.mapContainer}>
        <Map position={position} siteData={siteData} setInfoId={setInfoId} />
        <InfoCard infoData={siteData[infoId]} districts={districtsOptions.districts} />
      </div>

      <div className={styles.main}>
        <div className={styles.navbar}>
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

        <div className={styles.categoryBar}>
          {categoryList.map((item) => {
            const categoryStyle = cx(`${styles.category}`, item.type);
            return (
              <div className={categoryStyle} key={item.type}>
                <div className={styles.icon}>11</div>
                <div className={styles.name}>{item.displayName}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.cardsContainer}>
          <Card siteData={siteData} setInfoId={setInfoId} />
        </div>

        <div className={styles.paging}>
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
