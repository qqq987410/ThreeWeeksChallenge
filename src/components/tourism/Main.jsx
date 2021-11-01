import { useState } from 'react';
import './main.scss';
import API from '../../api/index';
import cityList from '../../data/cityList';

export default function Main() {
  const [cntCity, setCity] = useState(cityList[0].value);
  const [siteData, setSiteData] = useState([]);
  const [count, setCount] = useState(0);

  const cityOptions = cityList.map((city) => (
    <option value={city.value} key={city.value}>
      {city.name}
    </option>
  ));

  const DATA_PER_PAGE = 10;

  const getSiteData = async (num) => {
    const rawData = await API.tourism.fetchScenicSpotByCity(cntCity, DATA_PER_PAGE, num);
    setSiteData(rawData.data);
  };

  const changePage = (num) => {
    const newCount = count + num;
    getSiteData(newCount * 10);
    setCount(newCount);
  };

  return (
    <main>
      <select name="cities" onChange={(e) => setCity(e.target.value)}>
        {cityOptions}
      </select>

      <button type="button" onClick={() => getSiteData(0)}>
        查詢景點
      </button>

      <p>
        <button type="button" onClick={() => count > 0 && changePage(-1)}>
          上 10 筆
        </button>
        page
        {count}
        <button type="button" onClick={() => changePage(1)}>
          下 10 筆
        </button>
      </p>

      <ul>
        {siteData.map((site) => (
          <li key={site.ID}>
            {site.Name}
            {/* <span>{site.ID}</span> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
