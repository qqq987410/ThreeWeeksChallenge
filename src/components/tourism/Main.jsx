import { useState } from 'react';
import './main.scss';
import API from '../../api/index';
import cityList from '../../data/cityList';
import Card from './Card';
import Map from './Map';

export default function Main() {
  const [cntCity, setCity] = useState(cityList[0].value);
  const [siteData, setSiteData] = useState([]);
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState([25.056400299072266, 121.50760650634766]);

  const cityOptions = cityList.map((city) => (
    <option value={city.value} key={city.value}>
      {city.name}
    </option>
  ));

  const DATA_PER_PAGE = 12;

  const getSiteData = async (num) => {
    const rawData = await API.tourism.fetchScenicSpotByCity(cntCity, DATA_PER_PAGE, num);
    setSiteData(rawData.data);
  };

  const changePage = (num) => {
    const newCount = count + num;
    getSiteData(newCount * DATA_PER_PAGE);
    setCount(newCount);
  };

  return (
    <main>
      <Map position={position} />
      <select name="cities" onChange={(e) => setCity(e.target.value)}>
        {cityOptions}
      </select>

      <button type="button" onClick={() => getSiteData(0)}>
        查詢景點
      </button>

      <p>
        <button type="button" onClick={() => count > 0 && changePage(-1)}>
          上一頁
        </button>
        page
        {count}
        <button type="button" onClick={() => changePage(1)}>
          下一頁
        </button>
      </p>

      <div className="cards-container">
        <Card siteData={siteData} setPosition={setPosition} />

      </div>
    </main>
  );
}
