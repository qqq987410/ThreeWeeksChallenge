/* eslint-disable */
import { useRef, useEffect } from 'react';
import API from '../api/index';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import config from '../config';
import styles from './map.module.scss';
import InfoCard from './InfoCard';

const mapbox = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
const mapStyle = 'qiqily/ckvwo0sz52e1514pcvqyw3t08';
const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

export default function Map(props) {
  const { position, siteData, setPosition, setInfoId, category, infoData, districts, setSiteData } =
    props;

  const mapRef = useRef(null);
  const markerLayer = useRef(L.layerGroup());

  function initializeMap(mapRef) {
    // TODO: change init view to current select city
    mapRef.current = L.map('map').setView([25.083, 121.555], 12);
    L.tileLayer(mapbox, {
      attribution,
      maxZoom: 20,
      id: mapStyle,
      tileSize: 512,
      zoomOffset: -1,
      accessToken: config.MY_TOKEN,
    }).addTo(mapRef.current);
  }
  const icon = (text, id) =>
    L.divIcon({
      html: `<div value='${id}'>${text}</div>`,
      className: `${styles.icon}`,
      iconSize: [30, 40],
      iconAnchor: [15, 40],
    });

  const getLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(pos) {
      const crd = pos.coords;
      const rawData = await API.bike.fetchStationNearBy(crd.latitude, crd.longitude);
      setSiteData(rawData.data);
      setPosition([crd.latitude, crd.longitude]);
      console.log(rawData);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  useEffect(() => {
    initializeMap(mapRef);
    markerLayer.current.addTo(mapRef.current);
  }, []);

  useEffect(() => {
    if (siteData.length === 0) return;
    const markersLength = markerLayer.current.getLayers();
    if (markersLength.length !== 0) {
      markerLayer.current.clearLayers();
    }

    siteData.forEach((data, i) => {
      let position;
      if (category === 'Tourism') {
        position = data.Position;
      } else if (category === 'Bike') {
        position = data.StationPosition;
      }

      const lat = position.PositionLat;
      const lon = position.PositionLon;
      return (
        L.marker([lat, lon], { icon: icon(i + 1, data.ID) })
          // .on('click', function (e) {
          //   setInfoId(i);
          //   mapRef.current.setView(e.target.getLatLng(), 14);
          // })
          .addTo(markerLayer.current)
      );
    });
  }, [props.siteData]);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.flyTo(position, 14);
  }, [position]);

  return (
    <div className={styles.mapContainer}>
      <div id="map" className={styles.map} ref={mapRef} />
      {category === 'Tourism' && <InfoCard infoData={infoData} districts={districts} />}
      {category === 'Bike' && (
        <button
          className={styles.cntLocation}
          type="button"
          onClick={() => {
            getLocation();
          }}
          aria-label="Mute volume"
        >
          目前位置
        </button>
      )}
    </div>
  );
}
