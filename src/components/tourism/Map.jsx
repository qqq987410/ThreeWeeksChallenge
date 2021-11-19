/* eslint-disable */
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import config from '../../config';
import styles from './map.module.scss';

const mapbox = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
const mapStyle = 'qiqily/ckvwo0sz52e1514pcvqyw3t08';
const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

export default function Map(props) {
  const { position, siteData, setInfoId } = props;

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
      const lat = data.Position.PositionLat;
      const lon = data.Position.PositionLon;
      return L.marker([lat, lon], { icon: icon(i + 1, data.ID) })
        .on('click', function (e) {
          setInfoId(i);
          mapRef.current.setView(e.target.getLatLng(), 14);
        })
        .addTo(markerLayer.current);
    });
  }, [props.siteData]);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.flyTo(position, 14);
  }, [position]);

  return <div id="map" className={styles.map} ref={mapRef} />;
}
