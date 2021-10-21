import { useState } from 'react';
import './main.scss';
import API from '../api/index';
import cityList from '../data/cityList';

export default function Main() {
  const [cntCity, setCity] = useState(cityList[0].value);
  const [siteData, setSiteData] = useState([]);
  const [count, setCount] = useState(0);

  const cityOptions = cityList.map((city) => (
    <option value={city.value} key={city.value}>
      {city.name}
    </option>
  ));

  const getSiteData = async (num) => {
    const rawData = await API.fetchTourismByCity(cntCity, num);
    setSiteData(rawData.data);
  };

  const changePage = (num) => {
    const newCount = count + num;
    // getSiteData(count, newCount);
    console.log(count, newCount);
    setCount(newCount);
  };

  return (
    <main>
      <select name="cities" onChange={(e) => setCity(e.target.value)}>
        {cityOptions}
      </select>

      <button type="button" onClick={() => getSiteData(10)}>
        查詢景點
      </button>

      <p>
        <button type="button" onClick={() => changePage(-10)}>
          上 10 筆
        </button>
        {count}
        <button type="button" onClick={() => changePage(10)}>
          下 10 筆
        </button>
      </p>

      <ul>
        {siteData.map((site, i) => (
          <li key={site.ID}>
            {site.Name}
            {i}
          </li>
        ))}
      </ul>
    </main>
  );
}
