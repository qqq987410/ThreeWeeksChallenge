import { useState } from 'react';
import styles from './main.module.scss';
import API from '../../api/index';
import cityList from '../../data/cityList';
import Card from './Card';
// import PageChooser from './PageChooser';
import InfoCard from './InfoCard';
import Map from './Map';

export default function Main() {
  const [cntCity, setCity] = useState(cityList[0].value);
  const [cntDist, setDist] = useState();

  const [siteData, setSiteData] = useState([]);
  const [info, setInfo] = useState();
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState([25.083, 121.555]);

  const distsOptions = cityList.find((el) => el.value === cntCity);

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

  return (
    <main>
      <div className={styles.mapContainer}>
        <Map position={position} siteData={siteData} />
        <InfoCard info={info} dists={distsOptions.districts} />
      </div>
      <div>
        <div className={styles.filter}>
          <select
            name="cities"
            onChange={(e) => {
              setCity(e.target.value);
              setDist(0);
            }}
          >
            {cityList.map((city) => (
              <option value={city.value} key={city.value}>
                {city.name}
              </option>
            ))}
          </select>
          <select name="districts" onChange={(e) => setDist(e.target.value)}>
            <option value="">不限</option>
            {distsOptions.districts.map((dist) => (
              <option value={dist.zip} key={dist.zip}>
                {dist.name}
              </option>
            ))}
          </select>

          <button type="button" onClick={() => getSiteData(0)}>
            查詢景點
          </button>
        </div>

        <div className={styles.cardsContainer}>
          <Card siteData={siteData} setPosition={setPosition} setInfo={setInfo} />
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

// <div className="tourism-container">
//   <div className="map">Map</div>
//   <main>
//     <div className="nav-bar">
//       <PageChooser />
//       <div className="page-title">
//         <span className="english-title">Travel In Taiwan</span>
//         <span className="chinese-title">悠遊台灣</span>
//       </div>
//     </div>

//     <div className="category-bar">Category</div>
//     <div className="filter">
//       <div className="choose-city">選擇城市</div>
//       <select name="cities" onChange={(e) => setCity(e.target.value)}>
//         {cityOptions}
//       </select>
//       <button type="button" onClick={() => getSiteData(0)}>
//         查詢景點
//       </button>

//       <p>
//         <button type="button" onClick={() => count > 0 && changePage(-1)}>
//           上 10 筆
//         </button>
//         page
//         {count}
//         <button type="button" onClick={() => changePage(1)}>
//           下 10 筆
//         </button>
//       </p>
//     </div>
//     <div className="cards-container">
//       <Card siteData={siteData} />
//     </div>
//   </main>
// </div>
