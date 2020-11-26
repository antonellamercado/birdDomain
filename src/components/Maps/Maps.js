import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";



export const Mapa = ({position,observation}) => {

const plane = new Icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/67/67076.svg',
  iconSize: [25, 25],
  popupAnchor:  [-1, -20]
});

const bins = new Icon({
  iconUrl: 'https://www.flaticon.es/svg/static/icons/svg/425/425951.svg',
  iconSize: [25, 25],
  popupAnchor:  [-1, -20]
});


  return(
        <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
         <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={position} icon = {plane}> 
        <Popup>Punto de retiro</Popup>
        </Marker>
        <Marker position={observation} icon = {bins}> 
        <Popup>Punto de observacion</Popup>
        </Marker>
        </MapContainer>
    );
}


export default Mapa;