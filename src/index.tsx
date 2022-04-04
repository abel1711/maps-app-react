import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MapsApp } from './MapsApp';
// import 'dotenv/config';
 
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

if( !navigator.geolocation ){
  alert('Tu navegador no tiene geolocation');
  throw new Error('Tu navegador no tiene geolocation');
};

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
); 

