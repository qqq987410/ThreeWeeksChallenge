import { useState } from 'react';
import './main.scss';

export default function Main() {
  const [count, setCount] = useState(0);
  const [cntCity, setCity] = useState('請選擇');

  const cityList = [
    { name: '台北市', value: 'TPE' },
    { name: '新北市', value: 'TPH' },
    { name: '桃園市', value: 'TYC' },
    { name: '基隆市', value: 'KLU' },
  ];

  const cityItems = cityList.map((city) => (
    <option value={city.value} key={city.value}>
      {city.name}
    </option>
  ));

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
    </main>
  );
}
