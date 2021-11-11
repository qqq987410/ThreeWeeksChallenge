/* eslint-disable */
import { useRef,useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Map(props) {
  const mapRef = useRef(null);

  useEffect(()=>{
    const mymap = L.map(mapRef.current).setView(props.position, 17);
    const OSMUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(OSMUrl).addTo(mymap);
  },[])
 
  // https://hackmd.io/@c36ICNyhQE6-iTXKxoIocg/BkMEznmXU
  // const greenIcon = new L.Icon({
  //   iconUrl:
  //     'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  //   iconSize: [25, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   shadowSize: [41, 41],
  // });

  // const marker = L.marker([25.03418, 121.564517], { icon: greenIcon }).addTo(mymap);

  // marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

  // L.circle([25.03418, 121.564517], {
  //   color: 'red',
  //   fillColor: '#f03',
  //   fillOpacity: 0.5,
  //   radius: 10,
  // }).addTo(mymap);
  return (
    <div>
      <h4>This is map</h4>
      {props.position}
      <div ref={mapRef} style={{ height: '300px', width: '600px' }} />
    </div>
  );
}
