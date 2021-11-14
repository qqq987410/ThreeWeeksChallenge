/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './filter.scss';
import cityList from '../../data/cityList';
import API from '../../api/index';

export default function Filter(props) {
  const { cntCity, setCity, cntDist, setDist, setSiteData } = props;

  const DATA_PER_PAGE = 12;

  const districtsOptions = cityList.find((el) => el.value === cntCity);

  const getSiteData = async (num) => {
    const obj = { $top: DATA_PER_PAGE, $skip: num };
    if (cntDist) {
      obj.$filter = `ZipCode eq '${cntDist}'`;
    }

    const rawData = await API.tourism.fetchScenicSpotByCity(cntCity, obj);
    setSiteData(rawData.data);
  };

  return (
    <div className="filter">
      <div className="chooseCity">選擇城市</div>
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
        {districtsOptions.districts.map((dist) => (
          <option value={dist.zip} key={dist.zip}>
            {dist.name}
          </option>
        ))}
      </select>

      <button
        className="search"
        type="button"
        onClick={() => getSiteData(0)}
        aria-label="Mute volume"
      />
    </div>
  );
}

Filter.protoTypes = {
  cntCity: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  cntDist: PropTypes.string.isRequired,
  setDist: PropTypes.func.isRequired,
  setSiteData: PropTypes.func.isRequired,
};
