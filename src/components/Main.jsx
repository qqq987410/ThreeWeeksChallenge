import { useState } from 'react';
import './main.scss';
import API from '../api';

export default function Main() {
  const [count, setCount] = useState(0);
  const [cntCity, setCity] = useState('請選擇');
  const [siteDate, setSiteData] = useState([]);

  const cityList = [
    { name: '台北市', value: 'Taipei' },
    { name: '新北市', value: 'NewTaipei' },
    { name: '桃園市', value: 'Taoyuan' },
    { name: '基隆市', value: 'Keelung' },
  ];

  const cityItems = cityList.map((city) => (
    <option value={city.value} key={city.value}>
      {city.name}
    </option>
  ));

  const getData = async () => {
    const aaa = await API.fetchTourismByCity(cntCity);
    setSiteData(aaa.data);
    // console.log(aaa.data);
  };

  return (
    <main>
      <div>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button type="button" onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>

      <p>
        所選擇縣市為
        {cntCity}
      </p>

      <select name="cities" onChange={(e) => setCity(e.target.value)}>
        {cityItems}
      </select>

      <button type="button" onClick={getData}>
        查詢景點
      </button>

      <ul>
        {siteDate.map((site) => (
          <li key={site.ID}>{site.Name}</li>
        ))}
      </ul>
    </main>
  );
}
